"use strict";
(self["webpackChunktodo"] = self["webpackChunktodo"] || []).push([["task"],{

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Task = (title, date = "", desc = "", priority = 0) => {
  let taskTitle = title;
  let taskDate = date;
  let taskDesc = desc;
  let taskPriority = priority;

  getTitle = () => taskTitle;
  getDate = () => taskDate;
  getDescription = () => taskDesc;
  getPriority = () => taskPriority;

  setTitle = (newTitle) => {
    taskTitle = newTitle;
  };

  setDate = (newDate) => {
    taskDate = newDate;
  };

  setDescription = (newDesc) => {
    taskDesc = newDesc;
  };

  setPriority = (newPriority) => {
    taskPriority = newPriority;
  };

  return {
    getTitle,
    getDate,
    getDescription,
    getPriority,
    setTitle,
    setDate,
    setDescription,
    setPriority,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/task.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzay5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy90YXNrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFRhc2sgPSAodGl0bGUsIGRhdGUgPSBcIlwiLCBkZXNjID0gXCJcIiwgcHJpb3JpdHkgPSAwKSA9PiB7XG4gIGxldCB0YXNrVGl0bGUgPSB0aXRsZTtcbiAgbGV0IHRhc2tEYXRlID0gZGF0ZTtcbiAgbGV0IHRhc2tEZXNjID0gZGVzYztcbiAgbGV0IHRhc2tQcmlvcml0eSA9IHByaW9yaXR5O1xuXG4gIGdldFRpdGxlID0gKCkgPT4gdGFza1RpdGxlO1xuICBnZXREYXRlID0gKCkgPT4gdGFza0RhdGU7XG4gIGdldERlc2NyaXB0aW9uID0gKCkgPT4gdGFza0Rlc2M7XG4gIGdldFByaW9yaXR5ID0gKCkgPT4gdGFza1ByaW9yaXR5O1xuXG4gIHNldFRpdGxlID0gKG5ld1RpdGxlKSA9PiB7XG4gICAgdGFza1RpdGxlID0gbmV3VGl0bGU7XG4gIH07XG5cbiAgc2V0RGF0ZSA9IChuZXdEYXRlKSA9PiB7XG4gICAgdGFza0RhdGUgPSBuZXdEYXRlO1xuICB9O1xuXG4gIHNldERlc2NyaXB0aW9uID0gKG5ld0Rlc2MpID0+IHtcbiAgICB0YXNrRGVzYyA9IG5ld0Rlc2M7XG4gIH07XG5cbiAgc2V0UHJpb3JpdHkgPSAobmV3UHJpb3JpdHkpID0+IHtcbiAgICB0YXNrUHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldFRpdGxlLFxuICAgIGdldERhdGUsXG4gICAgZ2V0RGVzY3JpcHRpb24sXG4gICAgZ2V0UHJpb3JpdHksXG4gICAgc2V0VGl0bGUsXG4gICAgc2V0RGF0ZSxcbiAgICBzZXREZXNjcmlwdGlvbixcbiAgICBzZXRQcmlvcml0eSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2s7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=