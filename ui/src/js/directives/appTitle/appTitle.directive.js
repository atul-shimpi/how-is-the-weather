function appTitleDirective() {
    'ngInject';

    return {
        restrict: 'E',
        scope: {},
        replace: true,
        template: `
            <h2>
                Welcome
            </h2>
        `
    };

}

export {appTitleDirective};
