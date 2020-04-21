/* eslint-disable no-debugger */
import Service from '@ember/service';
import { get, set, setProperties, computed } from '@ember/object';
import { inject as service } from '@ember/service';


export default Service.extend({
    store: service(),
    currentId: null,
    about: false,
    experience: false,
    education: false,
    opensource: false,
    portfolio: false,
    design: false,
    contact: false,

    resetViewPort() {
        setProperties(this, {
          about: false,
          experience: false,
          education: false,
          opensource: false,
          portfolio: false,
          design: false,
          contact: false
        });
      },
    
      updateViewPortActivity(status, areaName) {
        if (status === true) {
          this.resetViewPort();
          set(this, areaName, status);
        }
      }
});
