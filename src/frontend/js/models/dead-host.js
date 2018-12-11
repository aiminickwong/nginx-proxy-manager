'use strict';

const Backbone = require('backbone');

const model = Backbone.Model.extend({
    idAttribute: 'id',

    defaults: function () {
        return {
            id:              undefined,
            created_on:      null,
            modified_on:     null,
            domain_names:    [],
            certificate_id:  0,
            ssl_forced:      false,
            http2_support:   false,
            meta:            {},
            advanced_config: '',
            // The following are expansions:
            owner:           null,
            certificate:     null
        };
    }
});

module.exports = {
    Model:      model,
    Collection: Backbone.Collection.extend({
        model: model
    })
};
