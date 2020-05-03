/* eslint-disable no-debugger */
import Component from '@ember/component';
import { inject as service } from "@ember/service";
import { computed, observer } from "@ember/object";
import { on } from '@ember/object/evented';
import { run } from '@ember/runloop';
import { addObserver } from '@ember/object/observers';
import EmberObject from '@ember/object';

export default Component.extend({
    viewportHandler: service('viewport-handler'),
    tagName: 'a',
    attributeBindings: ['href'],
    classNameBindings: ['active'],
    
    init(){
        this._super(...arguments);
        let linkId = this.linkId;
        this.set(`viewportHandler.${linkId}`, false);

        this.addObserver(`viewportHandler.${linkId}`,function() {
            this.set('active', this.get(`viewportHandler.${linkId}`));
        });
      },
      willDestroy() {
        this._super();
        this.removeObserver(`viewportHandler.${this.linkId}`);
      }
});
