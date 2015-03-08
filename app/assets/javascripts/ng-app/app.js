angular
	.module('myApp', [
		'ngAnimate',
		'ui.router',
		'templates',
		'HomeCtrl',
		'InfoCtrl',
		'ngAppDirectives'
	])
	.config(function(
		$stateProvider, 
		$urlRouterProvider, 
		$locationProvider) {

		// default fallback route
		$urlRouterProvider.otherwise('/');
		/**
		 * Route and States
		 */
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'home.html',
				controller: 'HomeCtrl'
			})

			.state('info', {
				url: '/info',
				templateUrl: 'info.html',
				controller: 'InfoCtrl'
			})
			// an abstract state that just serves as a
			// parent for the below child states
			.state('dashboard', {
				abstract: true,
				url: '/dashboard',
				templateUrl: 'dashboard/layout.html'
			})
				// the default route when someone hits dashboard
				.state('dashboard.one', {
					url: '',
					templateUrl: 'dashboard/one.html'
				})
				// this is /dashboard/two
				.state('dashboard.two', {
					url: '/two',
					templateUrl: 'dashboard/two.html'
				})
				// this is /dashboard/three
				.state('dashboard.three', {
					url: '/three',
					templateUrl: 'dashboard/three.html'
				});


		// enable HTML5 mode for SEO
		$locationProvider.html5Mode(true);

	});