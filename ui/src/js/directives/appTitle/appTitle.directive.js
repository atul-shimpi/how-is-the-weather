function appTitleDirective() {
    'ngInject';

    return {
        restrict: 'E',
        scope: {},
        replace: true,
        templateUrl: './src/views/title/title.html'
    };

}

export {appTitleDirective};
