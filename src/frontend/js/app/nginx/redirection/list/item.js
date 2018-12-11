'use strict';

const Mn       = require('backbone.marionette');
const App      = require('../../../main');
const template = require('./item.ejs');

module.exports = Mn.View.extend({
    template: template,
    tagName:  'tr',

    ui: {
        edit:      'a.edit',
        delete:    'a.delete',
        host_link: '.host-link'
    },

    events: {
        'click @ui.edit': function (e) {
            e.preventDefault();
            App.Controller.showNginxRedirectionForm(this.model);
        },

        'click @ui.delete': function (e) {
            e.preventDefault();
            App.Controller.showNginxRedirectionDeleteConfirm(this.model);
        },

        'click @ui.host_link': function (e) {
            e.preventDefault();
            let win = window.open($(e.currentTarget).attr('rel'), '_blank');
            win.focus();
        }
    },

    templateContext: {
        canManage: App.Cache.User.canManage('redirection_hosts'),

        isOnline: function () {
            return typeof this.meta.nginx_online === 'undefined' ? null : this.meta.nginx_online;
        },

        getOfflineError: function () {
            return this.meta.nginx_err || '';
        }
    },

    initialize: function () {
        this.listenTo(this.model, 'change', this.render);
    }
});
