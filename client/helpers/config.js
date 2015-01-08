Meteor.startup(function() {
AccountsEntry.config({
homeRoute: '/',
dashboardRoute: '/new',
passwordSignupFields: 'EMAIL_ONLY',
showSignupCode: true,
});
});
