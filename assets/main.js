/**
* Wallop.js
*
* @fileoverview Minimal JS library to show & hide things
*
* @author Pedro Duarte
* @author http://pedroduarte.me/wallop
*
*/
!function (global) {
  function Wallop(selector, options) {
    if (!selector)
      throw new Error("Missing selector. Refer to Usage documentation: https://github.com/peduarte/wallop#javascript");
    for (var s = 0; s < l.length; s++)if (l[s] === selector)
      throw new Error("An instance of Wallop with this selector already exists.");
    if (this.options = {
      buttonPreviousClass: "Wallop-buttonPrevious",
      buttonNextClass: "Wallop-buttonNext",
      itemClass: "Wallop-item",
      currentItemClass: "Wallop-item--current",
      showPreviousClass: "Wallop-item--showPrevious",
      showNextClass: "Wallop-item--showNext",
      hidePreviousClass: "Wallop-item--hidePrevious",
      hideNextClass: "Wallop-item--hideNext",
      carousel: !0
    }
      , this.whitelist = { form: !0 }
      , selector.length > 0 && !this.whitelist[selector])
      throw new Error("Selector cannot be an array, Refer to Usage documentation: https://github.com/peduarte/wallop#javascript");
    this.$selector = selector, this.options = n(this.options, options), this.event = null, this.reset(), this.buttonPrevious = this.$selector.querySelector(" ." + this.options.buttonPreviousClass), this.buttonNext = this.$selector.querySelector(" ." + this.options.buttonNextClass), this.bindEvents(), this.createCustomEvent(), this.currentItemIndex === -1 && (this.currentItemIndex = 0, i(this.allItemsArray[this.currentItemIndex], this.options.currentItemClass)), this.updateButtonStates(); var o = this; setTimeout(function () { o.event.detail.currentItemIndex = o.currentItemIndex, o.$selector.dispatchEvent(o.event) }, 0)
  }

  function getElementByClass(className, context) {
    if (className) return context || (context = document), context.querySelector("." + className)
  }
  function addClassToElement(element, className) {
    element && (element.className = (element.className + " " + className).trim())
  }
  function removeClassFromElement(element, className) {
    element && (element.className = element.className.replace(className, "").trim())
  }

  function mergeObjects(obj1, obj2) {
    var key, merged = {};
    for (key in obj1) merged[key] = obj1[key];
    for (key in obj2) merged[key] = obj2[key];
    return merged;
  }

  function createCustomEvent(eventName, eventOptions) {
    eventOptions = eventOptions || { bubbles: !1, cancelable: !1, detail: void 0 };
    var customEvent = document.createEvent("CustomEvent");
    customEvent.initCustomEvent(eventName, eventOptions.bubbles, eventOptions.cancelable, eventOptions.detail);
    return customEvent;
  }
  var wallopInstances = [], wallopProto = Wallop.prototype;

  wallopProto.updateButtonStates = function () {
    if (!this.buttonPrevious && !this.buttonNext) return;
    if (this.options.carousel) return;
    if (this.currentItemIndex === this.lastItemIndex) {
      this.buttonNext.setAttribute("disabled", "disabled");
    } else if (this.currentItemIndex === 0) {
      this.buttonPrevious.setAttribute("disabled", "disabled");
    }
  };

  wallopProto.removeAllHelperSettings = function () {
    removeClassFromElement(this.allItemsArray[this.currentItemIndex], this.options.currentItemClass);
    removeClassFromElement(getElementByClass(this.options.hidePreviousClass, this.$selector), this.options.hidePreviousClass);
    removeClassFromElement(getElementByClass(this.options.hideNextClass, this.$selector), this.options.hideNextClass);
    removeClassFromElement(getElementByClass(this.options.showPreviousClass, this.$selector), this.options.showPreviousClass);
    removeClassFromElement(getElementByClass(this.options.showNextClass, this.$selector), this.options.showNextClass);
    if (this.buttonPrevious || this.buttonNext) {
      this.buttonPrevious.removeAttribute("disabled");
      this.buttonNext.removeAttribute("disabled");
    }
  };

  wallopProto.goTo = function (index) {
    if (
      index !== this.currentItemIndex &&
      (index = index === -1 && this.options.carousel ? this.lastItemIndex : index,
      index = index === this.lastItemIndex + 1 && this.options.carousel ? 0 : index,
      !(index < 0 || index > this.lastItemIndex))
    ) {
      this.removeAllHelperSettings();
      var isNext =
        (index > this.currentItemIndex || (index === 0 && this.currentItemIndex === this.lastItemIndex)) &&
        !(index === this.lastItemIndex && this.currentItemIndex === 0);
      addClassToElement(
        this.allItemsArray[this.currentItemIndex],
        isNext ? this.options.hidePreviousClass : this.options.hideNextClass
      );
      addClassToElement(
        this.allItemsArray[index],
        this.options.currentItemClass + " " + (isNext ? this.options.showNextClass : this.options.showPreviousClass)
      );
      this.currentItemIndex = index;
      this.updateButtonStates();
      this.event.detail.currentItemIndex = this.currentItemIndex;
      this.$selector.dispatchEvent(this.event);
    }
  };

  wallopProto.previous = function () {
    this.goTo(this.currentItemIndex - 1);
  };

  wallopProto.next = function () {
    this.goTo(this.currentItemIndex + 1);
  };

  wallopProto.reset = function () {
    this.allItemsArray = Array.prototype.slice.call(
      this.$selector.querySelectorAll(" ." + this.options.itemClass)
    );
    this.currentItemIndex = this.allItemsArray.indexOf(
      this.$selector.querySelector(" ." + this.options.currentItemClass)
    );
    this.lastItemIndex = this.allItemsArray.length - 1;
  };

  wallopProto.bindEvents = function () {
    wallopInstances.push(this.$selector);
    var self = this;
    if (this.buttonPrevious) {
      this.buttonPrevious.addEventListener("click", function (e) {
        e.preventDefault();
        self.previous();
      });
    }
    if (this.buttonNext) {
      this.buttonNext.addEventListener("click", function (e) {
        e.preventDefault();
        self.next();
      });
    }
  };

  wallopProto.on = function (eventName, handler) {
    this.$selector.addEventListener(eventName, handler, !1);
  };

  wallopProto.off = function (eventName, handler) {
    this.$selector.removeEventListener(eventName, handler, !1);
  };

  wallopProto.createCustomEvent = function () {
    var self = this;
    this.event = new createCustomEvent("change", {
      detail: { wallopEl: self.$selector, currentItemIndex: Number(self.currentItemIndex) },
      bubbles: !0,
      cancelable: !0,
    });
  };

  createCustomEvent.prototype = window.CustomEvent ? window.CustomEvent.prototype : {};
  window.CustomEvent = createCustomEvent;
  if (typeof define == "function" && define.amd) {
    define(function () {
      return Wallop;
    });
  } else if (typeof module != "undefined" && module.exports) {
    module.exports = Wallop;
  } else {
    global.Wallop = Wallop;
  }
}(this);


/**
 * Main Js
 *
 */
var clientBtn = document.querySelector('.js-clients-btn'),
  clientAll = document.querySelector('.js-clients-all'),
  isClientsOpen = false;

if (clientBtn != null) {
  clientBtn.addEventListener('click', function () {
    if (!isClientsOpen) {
      clientAll.style.display = 'inline';
      //aboutSection.style.display = 'block';
      this.innerHTML = '– clients';
      isClientsOpen = true;
    } else {
      clientAll.style.display = 'none';
      this.innerHTML = '+ clients';
      isClientsOpen = false;
    }

  });
}

//window.onload = function() {
var wallopEl = document.querySelector('.Wallop');
if (wallopEl) {
  var slider = new Wallop(wallopEl);
  window.setInterval(function () {
    slider.next();
  }, 3000)
}
//});



