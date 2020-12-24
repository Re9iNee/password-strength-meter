let app = angular.module('myApp', ['ngAnimate'])
app.directive('minEightChar', () => {
    return {
        require: 'ngModel',
        link: (scope, element, attr, mCtrl) => {
            myValidation = x => {
                if (x.length >= 8) {
                    mCtrl.$setValidity('minChar', true)
                } else {
                    mCtrl.$setValidity('minChar', false)
                }
                return x;
            }
            mCtrl.$parsers.push(myValidation)
        }
    }
})
app.directive('capitalLetters', () => {
    return {
        require: 'ngModel',
        link: (scope, element, attr, mCtrl) => {
            myValidation = x => {
                mCtrl.$setValidity('capLetters', /[A-Z]/.test(x))
                return x;
            }
            mCtrl.$parsers.push(myValidation)
        }
    }
})
app.directive('lowerLetters', () => {
    return {
        require: 'ngModel',
        link: (scope, element, attr, mCtrl) => {
            myValidation = x => {
                mCtrl.$setValidity('lowerCaseLetters', /[a-z]/.test(x))
                return x;
            }
            mCtrl.$parsers.push(myValidation)
        }
    }
})
app.directive('numbers', () => {
    return {
        require: 'ngModel',
        link: (scope, element, attr, mCtrl) => {
            myValidation = x => {
                mCtrl.$setValidity('numbers', /\d/.test(x))
                return x;
            }
            mCtrl.$parsers.push(myValidation)
        }
    }
})