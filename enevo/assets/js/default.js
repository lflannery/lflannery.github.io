(function() {
	// Determine Site Profile
	gfSite.plugins.Profile = {
		breakpoint: 768,
		currentProfile: "",
		init: function() {
			this.setup();
			this.update();

			return this;
		},
		setup: function() {
			jQuery(window).on("resize", null, { plugin: this }, this.update);
		},
		update: function(event) {
			var plugin = event ? event.data.plugin : this;

			if ( plugin.currentProfile != plugin.value() ) {
				plugin.currentProfile = plugin.value();
				gfSite.element.data("profile", plugin.currentProfile).removeClass("desktop mobile").addClass(plugin.currentProfile);
				gfSite.trigger("gfsite_profile_change");
			}
		},
		value: function() {
			return this.viewport().width >= this.breakpoint ? "desktop" : "mobile";
		},
		viewport: function() {
			var element = window,
				property = 'inner';

			if ( !( 'innerWidth' in window ) ) {
				property = 'client';
				element = document.documentElement || document.body;
			}

			return { width : element[ property+'Width' ] , height : element[ property+'Height' ] };
		}
	};

	// Mobile Menu
	gfSite.plugins.Menu = {
		isExpanded: false,
		init: function(values) {
			var object = gfSite._create(this, values);

			object.element = object.element instanceof jQuery ? object.element : jQuery(object.element);
			object.button = object.button instanceof jQuery ? object.button : jQuery(object.button);
			object.setup();

			return object;
		},
		setup: function() {
			this.button.on("click", null, { plugin: this }, this.toggle);
			gfSite.element.on("gfsite_profile_change", null, { plugin: this }, this.close);
			gfSite.element.on("gfsite_menu_reset",   null, { plugin: this }, this.reset);
		},
		toggle: function(event) {
			var plugin = event.data.plugin;

			if ( gfSite.plugins.Profile.value() === "mobile" ) {
				gfSite.trigger("gfsite_menu_reset", [ { currentPlugin: plugin } ]);

				if ( plugin.isExpanded ) {
					plugin.close(event);
				} else {
					plugin.open(event);
				}
			}
		},
		close: function(event) {
			var plugin = event.data.plugin;

			plugin.isExpanded = false;
			plugin.element.stop(true, true).removeClass("Expanded");
			plugin.button.stop(true, true).removeClass("Expanded");
		},
		open: function(event) {
			var plugin = event.data.plugin;

			plugin.isExpanded = true;
			plugin.element.stop(true, true).addClass("Expanded");
			plugin.button.stop(true, true).addClass("Expanded");
		},
		reset: function(event, data) {
			var plugin = event.data.plugin;

			if ( plugin !== data.currentPlugin ) {
				plugin.close(event);
			}
		}
	};
})();

// On Load
jQuery(function($) {
	// Initialize Plugins
	gfSite.plugins.Profile.init();
	gfSite.plugins.Menu.init({ element: ".Navigation", button: ".Menu-Button" });
	gfSite.plugins.Menu.init({ element: ".Header-Search", button: ".Search-Button" });
});

// Extensions
jQuery.fn.extend({
    serializeObject: function() {
        var o = {},
            a = this.serializeArray();

        jQuery.each(a, function() {
            if (o[this.name] !== undefined) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    }
});