/* eslint-disable no-debugger */
import Component from '@ember/component';
import { inject as service } from "@ember/service";
export default Component.extend({
    viewportHandler: service('viewport-handler'),
    tagName: 'a',
    attributeBindings: ['href'],
    classNameBindings: ['active'],
});
