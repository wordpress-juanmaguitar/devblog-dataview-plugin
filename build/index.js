/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/dataviews/build-module/components/dataviews-bulk-actions-toolbar/index.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/components/dataviews-bulk-actions-toolbar/index.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BulkActionsToolbar)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/close-small.js");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _dataviews_bulk_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dataviews-bulk-actions */ "./node_modules/@wordpress/dataviews/build-module/components/dataviews-bulk-actions/index.js");
/* harmony import */ var _dataviews_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dataviews-context */ "./node_modules/@wordpress/dataviews/build-module/components/dataviews-context/index.js");
/* harmony import */ var _dataviews_item_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dataviews-item-actions */ "./node_modules/@wordpress/dataviews/build-module/components/dataviews-item-actions/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../constants */ "./node_modules/@wordpress/dataviews/build-module/constants.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */







const SNACKBAR_VARIANTS = {
  init: {
    bottom: -48
  },
  open: {
    bottom: 24,
    transition: {
      bottom: {
        type: 'tween',
        duration: 0.2,
        ease: [0, 0, 0.2, 1]
      }
    }
  },
  exit: {
    opacity: 0,
    bottom: 24,
    transition: {
      opacity: {
        type: 'tween',
        duration: 0.2,
        ease: [0, 0, 0.2, 1]
      }
    }
  }
};
function ActionTrigger({
  action,
  onClick,
  isBusy,
  items
}) {
  const label = typeof action.label === 'string' ? action.label : action.label(items);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ToolbarButton, {
    disabled: isBusy,
    label: label,
    icon: action.icon,
    isDestructive: action.isDestructive,
    size: "compact",
    onClick: onClick,
    isBusy: isBusy,
    tooltipPosition: "top"
  });
}
const EMPTY_ARRAY = [];
function ActionButton({
  action,
  selectedItems,
  actionInProgress,
  setActionInProgress
}) {
  const registry = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useRegistry)();
  const selectedEligibleItems = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    return selectedItems.filter(item => {
      return !action.isEligible || action.isEligible(item);
    });
  }, [action, selectedItems]);
  if ('RenderModal' in action) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_dataviews_item_actions__WEBPACK_IMPORTED_MODULE_6__.ActionWithModal, {
      action: action,
      items: selectedEligibleItems,
      ActionTrigger: ActionTrigger
    }, action.id);
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(ActionTrigger, {
    action: action,
    onClick: () => {
      setActionInProgress(action.id);
      action.callback(selectedItems, {
        registry
      });
    },
    items: selectedEligibleItems,
    isBusy: actionInProgress === action.id
  }, action.id);
}
function renderToolbarContent(selection, actionsToShow, selectedItems, actionInProgress, setActionInProgress, onChangeSelection) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ToolbarGroup, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "dataviews-bulk-actions-toolbar__selection-count",
        children: selection.length === 1 ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('1 item selected') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)(
        // translators: %s: Total number of selected items.
        (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._n)('%s item selected', '%s items selected', selection.length), selection.length)
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ToolbarGroup, {
      children: actionsToShow.map(action => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(ActionButton, {
          action: action,
          selectedItems: selectedItems,
          actionInProgress: actionInProgress,
          setActionInProgress: setActionInProgress
        }, action.id);
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ToolbarGroup, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ToolbarButton, {
        icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__["default"],
        showTooltip: true,
        tooltipPosition: "top",
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Cancel'),
        disabled: !!actionInProgress,
        onClick: () => {
          onChangeSelection(EMPTY_ARRAY);
        }
      })
    })]
  });
}
function ToolbarContent({
  selection,
  actionsToShow,
  selectedItems,
  onChangeSelection
}) {
  const [actionInProgress, setActionInProgress] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const buttons = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  if (!actionInProgress) {
    if (buttons.current) {
      buttons.current = null;
    }
    return renderToolbarContent(selection, actionsToShow, selectedItems, actionInProgress, setActionInProgress, onChangeSelection);
  } else if (!buttons.current) {
    buttons.current = renderToolbarContent(selection, actionsToShow, selectedItems, actionInProgress, setActionInProgress, onChangeSelection);
  }
  return buttons.current;
}
function _BulkActionsToolbar() {
  const {
    data,
    selection,
    actions = EMPTY_ARRAY,
    onChangeSelection,
    getItemId
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(_dataviews_context__WEBPACK_IMPORTED_MODULE_8__["default"]);
  const isReducedMotion = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.useReducedMotion)();
  const selectedItems = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    return data.filter(item => selection.includes(getItemId(item)));
  }, [selection, data, getItemId]);
  const actionsToShow = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => actions.filter(action => {
    return action.supportsBulk && action.icon && selectedItems.some(item => !action.isEligible || action.isEligible(item));
  }), [actions, selectedItems]);
  if (selection && selection.length === 0 || actionsToShow.length === 0) {
    return null;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__unstableAnimatePresence, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__unstableMotion.div, {
      layout: !isReducedMotion // See https://www.framer.com/docs/animation/#layout-animations
      ,
      initial: "init",
      animate: "open",
      exit: "exit",
      variants: isReducedMotion ? undefined : SNACKBAR_VARIANTS,
      className: "dataviews-bulk-actions-toolbar",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Toolbar, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Bulk actions'),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "dataviews-bulk-actions-toolbar__wrapper",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(ToolbarContent, {
            selection: selection,
            actionsToShow: actionsToShow,
            selectedItems: selectedItems,
            onChangeSelection: onChangeSelection
          })
        })
      })
    })
  });
}
function BulkActionsToolbar() {
  const {
    data,
    actions = [],
    view
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(_dataviews_context__WEBPACK_IMPORTED_MODULE_8__["default"]);
  const hasPossibleBulkAction = (0,_dataviews_bulk_actions__WEBPACK_IMPORTED_MODULE_9__.useSomeItemHasAPossibleBulkAction)(actions, data);
  if (![_constants__WEBPACK_IMPORTED_MODULE_10__.LAYOUT_TABLE, _constants__WEBPACK_IMPORTED_MODULE_10__.LAYOUT_GRID].includes(view.type) || !hasPossibleBulkAction) {
    return null;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_BulkActionsToolbar, {});
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/components/dataviews-bulk-actions/index.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/components/dataviews-bulk-actions/index.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BulkActions),
/* harmony export */   useHasAPossibleBulkAction: () => (/* binding */ useHasAPossibleBulkAction),
/* harmony export */   useSomeItemHasAPossibleBulkAction: () => (/* binding */ useSomeItemHasAPossibleBulkAction)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _dataviews_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dataviews-context */ "./node_modules/@wordpress/dataviews/build-module/components/dataviews-context/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants */ "./node_modules/@wordpress/dataviews/build-module/constants.js");
/* harmony import */ var _lock_unlock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lock-unlock */ "./node_modules/@wordpress/dataviews/build-module/lock-unlock.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */






const {
  DropdownMenuV2: DropdownMenu,
  DropdownMenuGroupV2: DropdownMenuGroup,
  DropdownMenuItemV2: DropdownMenuItem,
  DropdownMenuSeparatorV2: DropdownMenuSeparator
} = (0,_lock_unlock__WEBPACK_IMPORTED_MODULE_5__.unlock)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.privateApis);
function useHasAPossibleBulkAction(actions, item) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    return actions.some(action => {
      return action.supportsBulk && (!action.isEligible || action.isEligible(item));
    });
  }, [actions, item]);
}
function useSomeItemHasAPossibleBulkAction(actions, data) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    return data.some(item => {
      return actions.some(action => {
        return action.supportsBulk && (!action.isEligible || action.isEligible(item));
      });
    });
  }, [actions, data]);
}
function ActionWithModal({
  action,
  selectedItems,
  setActionWithModal,
  onMenuOpenChange
}) {
  const eligibleItems = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    return selectedItems.filter(item => !action.isEligible || action.isEligible(item));
  }, [action, selectedItems]);
  const {
    RenderModal,
    hideModalHeader
  } = action;
  const onCloseModal = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    setActionWithModal(undefined);
  }, [setActionWithModal]);
  if (!eligibleItems.length) {
    return null;
  }
  const label = typeof action.label === 'string' ? action.label : action.label(selectedItems);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Modal, {
    title: !hideModalHeader ? label : undefined,
    __experimentalHideHeader: !!hideModalHeader,
    onRequestClose: onCloseModal,
    overlayClassName: "dataviews-bulk-actions__modal",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(RenderModal, {
      items: eligibleItems,
      closeModal: onCloseModal,
      onActionPerformed: () => onMenuOpenChange(false)
    })
  });
}
function BulkActionItem({
  action,
  selectedItems,
  setActionWithModal
}) {
  const registry = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useRegistry)();
  const eligibleItems = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    return selectedItems.filter(item => !action.isEligible || action.isEligible(item));
  }, [action, selectedItems]);
  const shouldShowModal = ('RenderModal' in action);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(DropdownMenuItem, {
    hideOnClick: !shouldShowModal,
    onClick: async () => {
      if (shouldShowModal) {
        setActionWithModal(action);
      } else {
        action.callback(eligibleItems, {
          registry
        });
      }
    },
    suffix: eligibleItems.length,
    children: action.label
  }, action.id);
}
function ActionsMenuGroup({
  actions,
  selectedItems,
  setActionWithModal
}) {
  const elligibleActions = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    return actions.filter(action => {
      return selectedItems.some(item => !action.isEligible || action.isEligible(item));
    });
  }, [actions, selectedItems]);
  if (!elligibleActions.length) {
    return null;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(DropdownMenuGroup, {
      children: elligibleActions.map(action => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(BulkActionItem, {
        action: action,
        selectedItems: selectedItems,
        setActionWithModal: setActionWithModal
      }, action.id))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(DropdownMenuSeparator, {})]
  });
}
function _BulkActions() {
  const {
    data,
    actions = [],
    selection,
    onChangeSelection,
    getItemId
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useContext)(_dataviews_context__WEBPACK_IMPORTED_MODULE_6__["default"]);
  const bulkActions = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => actions.filter(action => action.supportsBulk), [actions]);
  const [isMenuOpen, onMenuOpenChange] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [actionWithModal, setActionWithModal] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)();
  const selectableItems = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    return data.filter(item => {
      return bulkActions.some(action => !action.isEligible || action.isEligible(item));
    });
  }, [data, bulkActions]);
  const numberSelectableItems = selectableItems.length;
  const selectedItems = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    return data.filter(item => selection.includes(getItemId(item)) && selectableItems.includes(item));
  }, [selection, data, getItemId, selectableItems]);
  const areAllSelected = selectedItems.length === numberSelectableItems;
  if (bulkActions.length === 0) {
    return null;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(DropdownMenu, {
      open: isMenuOpen,
      onOpenChange: onMenuOpenChange,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Bulk actions'),
      style: {
        minWidth: '240px'
      },
      trigger: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
        className: "dataviews-bulk-actions__edit-button",
        __next40pxDefaultSize: true,
        variant: "tertiary",
        size: "compact",
        children: selectedItems.length ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)( /* translators: %d: Number of items. */
        (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._n)('Edit %d item', 'Edit %d items', selectedItems.length), selectedItems.length) : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Bulk edit')
      }),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ActionsMenuGroup, {
        actions: bulkActions,
        setActionWithModal: setActionWithModal,
        selectedItems: selectedItems
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(DropdownMenuGroup, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(DropdownMenuItem, {
          disabled: areAllSelected,
          hideOnClick: false,
          onClick: () => {
            onChangeSelection(selectableItems.map(item => getItemId(item)));
          },
          suffix: numberSelectableItems,
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select all')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(DropdownMenuItem, {
          disabled: selection.length === 0,
          hideOnClick: false,
          onClick: () => {
            onChangeSelection([]);
          },
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Deselect')
        })]
      })]
    }), actionWithModal && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ActionWithModal, {
      action: actionWithModal,
      selectedItems: selectedItems,
      setActionWithModal: setActionWithModal,
      onMenuOpenChange: onMenuOpenChange
    })]
  });
}
function BulkActions() {
  const {
    data,
    actions = [],
    view
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useContext)(_dataviews_context__WEBPACK_IMPORTED_MODULE_6__["default"]);
  const hasPossibleBulkAction = useSomeItemHasAPossibleBulkAction(actions, data);
  if (![_constants__WEBPACK_IMPORTED_MODULE_7__.LAYOUT_TABLE, _constants__WEBPACK_IMPORTED_MODULE_7__.LAYOUT_GRID].includes(view.type) || !hasPossibleBulkAction) {
    return null;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_BulkActions, {});
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/components/dataviews-context/index.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/components/dataviews-context/index.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./node_modules/@wordpress/dataviews/build-module/constants.js");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


const DataViewsContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  view: {
    type: _constants__WEBPACK_IMPORTED_MODULE_1__.LAYOUT_TABLE
  },
  onChangeView: () => {},
  fields: [],
  data: [],
  paginationInfo: {
    totalItems: 0,
    totalPages: 0
  },
  selection: [],
  onChangeSelection: () => {},
  setOpenedFilter: () => {},
  openedFilter: null,
  getItemId: item => item.id,
  density: 0
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataViewsContext);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/components/dataviews-filters/add-filter.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/components/dataviews-filters/add-filter.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddFilterDropdownMenu: () => (/* binding */ AddFilterDropdownMenu),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lock_unlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lock-unlock */ "./node_modules/@wordpress/dataviews/build-module/lock-unlock.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


const {
  DropdownMenuV2: DropdownMenu,
  DropdownMenuItemV2: DropdownMenuItem,
  DropdownMenuItemLabelV2: DropdownMenuItemLabel
} = (0,_lock_unlock__WEBPACK_IMPORTED_MODULE_4__.unlock)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.privateApis);
function AddFilterDropdownMenu({
  filters,
  view,
  onChangeView,
  setOpenedFilter,
  trigger
}) {
  const inactiveFilters = filters.filter(filter => !filter.isVisible);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(DropdownMenu, {
    trigger: trigger,
    children: inactiveFilters.map(filter => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(DropdownMenuItem, {
        onClick: () => {
          setOpenedFilter(filter.field);
          onChangeView({
            ...view,
            page: 1,
            filters: [...(view.filters || []), {
              field: filter.field,
              value: undefined,
              operator: filter.operators[0]
            }]
          });
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(DropdownMenuItemLabel, {
          children: filter.name
        })
      }, filter.field);
    })
  });
}
function AddFilter({
  filters,
  view,
  onChangeView,
  setOpenedFilter
}, ref) {
  if (!filters.length || filters.every(({
    isPrimary
  }) => isPrimary)) {
    return null;
  }
  const inactiveFilters = filters.filter(filter => !filter.isVisible);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(AddFilterDropdownMenu, {
    trigger: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
      accessibleWhenDisabled: true,
      size: "compact",
      className: "dataviews-filters-button",
      variant: "tertiary",
      disabled: !inactiveFilters.length,
      ref: ref,
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add filter')
    }),
    filters,
    view,
    onChangeView,
    setOpenedFilter
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(AddFilter));
//# sourceMappingURL=add-filter.js.map

/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/components/dataviews-filters/filter-summary.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/components/dataviews-filters/filter-summary.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FilterSummary)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/close-small.js");
/* harmony import */ var _search_widget__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search-widget */ "./node_modules/@wordpress/dataviews/build-module/components/dataviews-filters/search-widget.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./node_modules/@wordpress/dataviews/build-module/constants.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




const ENTER = 'Enter';
const SPACE = ' ';

/**
 * Internal dependencies
 */




const FilterText = ({
  activeElements,
  filterInView,
  filter
}) => {
  if (activeElements === undefined || activeElements.length === 0) {
    return filter.name;
  }
  const filterTextWrappers = {
    Name: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
      className: "dataviews-filters__summary-filter-text-name"
    }),
    Value: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
      className: "dataviews-filters__summary-filter-text-value"
    })
  };
  if (filterInView?.operator === _constants__WEBPACK_IMPORTED_MODULE_5__.OPERATOR_IS_ANY) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createInterpolateElement)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)( /* translators: 1: Filter name. 3: Filter value. e.g.: "Author is any: Admin, Editor". */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('<Name>%1$s is any: </Name><Value>%2$s</Value>'), filter.name, activeElements.map(element => element.label).join(', ')), filterTextWrappers);
  }
  if (filterInView?.operator === _constants__WEBPACK_IMPORTED_MODULE_5__.OPERATOR_IS_NONE) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createInterpolateElement)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)( /* translators: 1: Filter name. 3: Filter value. e.g.: "Author is none: Admin, Editor". */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('<Name>%1$s is none: </Name><Value>%2$s</Value>'), filter.name, activeElements.map(element => element.label).join(', ')), filterTextWrappers);
  }
  if (filterInView?.operator === _constants__WEBPACK_IMPORTED_MODULE_5__.OPERATOR_IS_ALL) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createInterpolateElement)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)( /* translators: 1: Filter name. 3: Filter value. e.g.: "Author is all: Admin, Editor". */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('<Name>%1$s is all: </Name><Value>%2$s</Value>'), filter.name, activeElements.map(element => element.label).join(', ')), filterTextWrappers);
  }
  if (filterInView?.operator === _constants__WEBPACK_IMPORTED_MODULE_5__.OPERATOR_IS_NOT_ALL) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createInterpolateElement)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)( /* translators: 1: Filter name. 3: Filter value. e.g.: "Author is not all: Admin, Editor". */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('<Name>%1$s is not all: </Name><Value>%2$s</Value>'), filter.name, activeElements.map(element => element.label).join(', ')), filterTextWrappers);
  }
  if (filterInView?.operator === _constants__WEBPACK_IMPORTED_MODULE_5__.OPERATOR_IS) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createInterpolateElement)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)( /* translators: 1: Filter name. 3: Filter value. e.g.: "Author is: Admin". */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('<Name>%1$s is: </Name><Value>%2$s</Value>'), filter.name, activeElements[0].label), filterTextWrappers);
  }
  if (filterInView?.operator === _constants__WEBPACK_IMPORTED_MODULE_5__.OPERATOR_IS_NOT) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createInterpolateElement)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)( /* translators: 1: Filter name. 3: Filter value. e.g.: "Author is not: Admin". */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('<Name>%1$s is not: </Name><Value>%2$s</Value>'), filter.name, activeElements[0].label), filterTextWrappers);
  }
  return (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)( /* translators: 1: Filter name e.g.: "Unknown status for Author". */
  (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Unknown status for %1$s'), filter.name);
};
function OperatorSelector({
  filter,
  view,
  onChangeView
}) {
  const operatorOptions = filter.operators?.map(operator => ({
    value: operator,
    label: _constants__WEBPACK_IMPORTED_MODULE_5__.OPERATORS[operator]?.label
  }));
  const currentFilter = view.filters?.find(_filter => _filter.field === filter.field);
  const value = currentFilter?.operator || filter.operators[0];
  return operatorOptions.length > 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalHStack, {
    spacing: 2,
    justify: "flex-start",
    className: "dataviews-filters__summary-operators-container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FlexItem, {
      className: "dataviews-filters__summary-operators-filter-name",
      children: filter.name
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Conditions'),
      value: value,
      options: operatorOptions,
      onChange: newValue => {
        var _view$filters, _view$filters2;
        const operator = newValue;
        const newFilters = currentFilter ? [...((_view$filters = view.filters) !== null && _view$filters !== void 0 ? _view$filters : []).map(_filter => {
          if (_filter.field === filter.field) {
            return {
              ..._filter,
              operator
            };
          }
          return _filter;
        })] : [...((_view$filters2 = view.filters) !== null && _view$filters2 !== void 0 ? _view$filters2 : []), {
          field: filter.field,
          operator,
          value: undefined
        }];
        onChangeView({
          ...view,
          page: 1,
          filters: newFilters
        });
      },
      size: "small",
      __nextHasNoMarginBottom: true,
      hideLabelFromVision: true
    })]
  });
}
function FilterSummary({
  addFilterRef,
  openedFilter,
  ...commonProps
}) {
  const toggleRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
  const {
    filter,
    view,
    onChangeView
  } = commonProps;
  const filterInView = view.filters?.find(f => f.field === filter.field);
  const activeElements = filter.elements.filter(element => {
    if (filter.singleSelection) {
      return element.value === filterInView?.value;
    }
    return filterInView?.value?.includes(element.value);
  });
  const isPrimary = filter.isPrimary;
  const hasValues = filterInView?.value !== undefined;
  const canResetOrRemove = !isPrimary || hasValues;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dropdown, {
    defaultOpen: openedFilter === filter.field,
    contentClassName: "dataviews-filters__summary-popover",
    popoverProps: {
      placement: 'bottom-start',
      role: 'dialog'
    },
    onClose: () => {
      toggleRef.current?.focus();
    },
    renderToggle: ({
      isOpen,
      onToggle
    }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "dataviews-filters__summary-chip-container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
        text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)( /* translators: 1: Filter name. */
        (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Filter by: %1$s'), filter.name.toLowerCase()),
        placement: "top",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: (0,clsx__WEBPACK_IMPORTED_MODULE_0__["default"])('dataviews-filters__summary-chip', {
            'has-reset': canResetOrRemove,
            'has-values': hasValues
          }),
          role: "button",
          tabIndex: 0,
          onClick: onToggle,
          onKeyDown: event => {
            if ([ENTER, SPACE].includes(event.key)) {
              onToggle();
              event.preventDefault();
            }
          },
          "aria-pressed": isOpen,
          "aria-expanded": isOpen,
          ref: toggleRef,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(FilterText, {
            activeElements: activeElements,
            filterInView: filterInView,
            filter: filter
          })
        })
      }), canResetOrRemove && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
        text: isPrimary ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Reset') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Remove'),
        placement: "top",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
          className: (0,clsx__WEBPACK_IMPORTED_MODULE_0__["default"])('dataviews-filters__summary-chip-remove', {
            'has-values': hasValues
          }),
          onClick: () => {
            onChangeView({
              ...view,
              page: 1,
              filters: view.filters?.filter(_filter => _filter.field !== filter.field)
            });
            // If the filter is not primary and can be removed, it will be added
            // back to the available filters from `Add filter` component.
            if (!isPrimary) {
              addFilterRef.current?.focus();
            } else {
              // If is primary, focus the toggle button.
              toggleRef.current?.focus();
            }
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {
            icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"]
          })
        })
      })]
    }),
    renderContent: () => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalVStack, {
        spacing: 0,
        justify: "flex-start",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(OperatorSelector, {
          ...commonProps
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_search_widget__WEBPACK_IMPORTED_MODULE_7__["default"], {
          ...commonProps
        })]
      });
    }
  });
}
//# sourceMappingURL=filter-summary.js.map

/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/components/dataviews-filters/index.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/components/dataviews-filters/index.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterVisibilityToggle: () => (/* binding */ FilterVisibilityToggle),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   useFilters: () => (/* binding */ useFilters)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/funnel.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _filter_summary__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./filter-summary */ "./node_modules/@wordpress/dataviews/build-module/components/dataviews-filters/filter-summary.js");
/* harmony import */ var _add_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-filter */ "./node_modules/@wordpress/dataviews/build-module/components/dataviews-filters/add-filter.js");
/* harmony import */ var _reset_filters__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reset-filters */ "./node_modules/@wordpress/dataviews/build-module/components/dataviews-filters/reset-filters.js");
/* harmony import */ var _dataviews_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dataviews-context */ "./node_modules/@wordpress/dataviews/build-module/components/dataviews-context/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./node_modules/@wordpress/dataviews/build-module/utils.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./node_modules/@wordpress/dataviews/build-module/constants.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */








function useFilters(fields, view) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const filters = [];
    fields.forEach(field => {
      if (!field.elements?.length) {
        return;
      }
      const operators = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.sanitizeOperators)(field);
      if (operators.length === 0) {
        return;
      }
      const isPrimary = !!field.filterBy?.isPrimary;
      filters.push({
        field: field.id,
        name: field.label,
        elements: field.elements,
        singleSelection: operators.some(op => [_constants__WEBPACK_IMPORTED_MODULE_5__.OPERATOR_IS, _constants__WEBPACK_IMPORTED_MODULE_5__.OPERATOR_IS_NOT].includes(op)),
        operators,
        isVisible: isPrimary || !!view.filters?.some(f => f.field === field.id && _constants__WEBPACK_IMPORTED_MODULE_5__.ALL_OPERATORS.includes(f.operator)),
        isPrimary
      });
    });
    // Sort filters by primary property. We need the primary filters to be first.
    // Then we sort by name.
    filters.sort((a, b) => {
      if (a.isPrimary && !b.isPrimary) {
        return -1;
      }
      if (!a.isPrimary && b.isPrimary) {
        return 1;
      }
      return a.name.localeCompare(b.name);
    });
    return filters;
  }, [fields, view]);
}
function FilterVisibilityToggle({
  filters,
  view,
  onChangeView,
  setOpenedFilter,
  isShowingFilter,
  setIsShowingFilter
}) {
  const onChangeViewWithFilterVisibility = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(_view => {
    onChangeView(_view);
    setIsShowingFilter(true);
  }, [onChangeView, setIsShowingFilter]);
  const visibleFilters = filters.filter(filter => filter.isVisible);
  const hasVisibleFilters = !!visibleFilters.length;
  if (!hasVisibleFilters) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_add_filter__WEBPACK_IMPORTED_MODULE_6__.AddFilterDropdownMenu, {
      filters: filters,
      view: view,
      onChangeView: onChangeViewWithFilterVisibility,
      setOpenedFilter: setOpenedFilter,
      trigger: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
        className: "dataviews-filters__visibility-toggle",
        size: "compact",
        icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__["default"],
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add filter'),
        isPressed: false,
        "aria-expanded": false
      })
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "dataviews-filters__container-visibility-toggle",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      className: "dataviews-filters__visibility-toggle",
      size: "compact",
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__["default"],
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Toggle filter display'),
      onClick: () => {
        if (!isShowingFilter) {
          setOpenedFilter(null);
        }
        setIsShowingFilter(!isShowingFilter);
      },
      isPressed: isShowingFilter,
      "aria-expanded": isShowingFilter
    }), hasVisibleFilters && !!view.filters?.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
      className: "dataviews-filters-toggle__count",
      children: view.filters?.length
    })]
  });
}
function Filters() {
  const {
    fields,
    view,
    onChangeView,
    openedFilter,
    setOpenedFilter
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(_dataviews_context__WEBPACK_IMPORTED_MODULE_8__["default"]);
  const addFilterRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const filters = useFilters(fields, view);
  const addFilter = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_add_filter__WEBPACK_IMPORTED_MODULE_6__["default"], {
    filters: filters,
    view: view,
    onChangeView: onChangeView,
    ref: addFilterRef,
    setOpenedFilter: setOpenedFilter
  }, "add-filter");
  const visibleFilters = filters.filter(filter => filter.isVisible);
  if (visibleFilters.length === 0) {
    return null;
  }
  const filterComponents = [...visibleFilters.map(filter => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_filter_summary__WEBPACK_IMPORTED_MODULE_9__["default"], {
      filter: filter,
      view: view,
      onChangeView: onChangeView,
      addFilterRef: addFilterRef,
      openedFilter: openedFilter
    }, filter.field);
  }), addFilter];
  filterComponents.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_reset_filters__WEBPACK_IMPORTED_MODULE_10__["default"], {
    filters: filters,
    view: view,
    onChangeView: onChangeView
  }, "reset-filters"));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalHStack, {
    justify: "flex-start",
    style: {
      width: 'fit-content'
    },
    className: "dataviews-filters__container",
    wrap: true,
    children: filterComponents
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.memo)(Filters));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/components/dataviews-filters/reset-filters.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/components/dataviews-filters/reset-filters.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResetFilter)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */

function ResetFilter({
  filters,
  view,
  onChangeView
}) {
  const isPrimary = field => filters.some(_filter => _filter.field === field && _filter.isPrimary);
  const isDisabled = !view.search && !view.filters?.some(_filter => _filter.value !== undefined || !isPrimary(_filter.field));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
    disabled: isDisabled,
    accessibleWhenDisabled: true,
    size: "compact",
    variant: "tertiary",
    className: "dataviews-filters__reset-button",
    onClick: () => {
      onChangeView({
        ...view,
        page: 1,
        search: '',
        filters: []
      });
    },
    children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Reset')
  });
}
//# sourceMappingURL=reset-filters.js.map

/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/components/dataviews-filters/search-widget.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/components/dataviews-filters/search-widget.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SearchWidget)
/* harmony export */ });
/* harmony import */ var _ariakit_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ariakit/react */ "./node_modules/@ariakit/react-core/esm/__chunks/4DJ5UIED.js");
/* harmony import */ var _ariakit_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ariakit/react */ "./node_modules/@ariakit/react-core/esm/__chunks/PMFZK2Z4.js");
/* harmony import */ var _ariakit_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ariakit/react */ "./node_modules/@ariakit/react-core/esm/combobox/combobox-provider.js");
/* harmony import */ var _ariakit_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ariakit/react */ "./node_modules/@ariakit/react-core/esm/combobox/combobox-label.js");
/* harmony import */ var _ariakit_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ariakit/react */ "./node_modules/@ariakit/react-core/esm/combobox/combobox.js");
/* harmony import */ var _ariakit_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ariakit/react */ "./node_modules/@ariakit/react-core/esm/__chunks/AMQNTLCG.js");
/* harmony import */ var _ariakit_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ariakit/react */ "./node_modules/@ariakit/react-core/esm/combobox/combobox-item.js");
/* harmony import */ var _ariakit_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ariakit/react */ "./node_modules/@ariakit/react-core/esm/combobox/combobox-item-value.js");
/* harmony import */ var remove_accents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! remove-accents */ "./node_modules/remove-accents/index.js");
/* harmony import */ var remove_accents__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(remove_accents__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/check.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/search.js");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lock_unlock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lock-unlock */ "./node_modules/@wordpress/dataviews/build-module/lock-unlock.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
/**
 * External dependencies
 */
// eslint-disable-next-line no-restricted-imports



/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */



const {
  CompositeV2: Composite,
  CompositeItemV2: CompositeItem,
  useCompositeStoreV2: useCompositeStore
} = (0,_lock_unlock__WEBPACK_IMPORTED_MODULE_6__.unlock)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.privateApis);
const radioCheck = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_4__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_4__.Circle, {
    cx: 12,
    cy: 12,
    r: 3
  })
});
function normalizeSearchInput(input = '') {
  return remove_accents__WEBPACK_IMPORTED_MODULE_0___default()(input.trim().toLowerCase());
}
const EMPTY_ARRAY = [];
const getCurrentValue = (filterDefinition, currentFilter) => {
  if (filterDefinition.singleSelection) {
    return currentFilter?.value;
  }
  if (Array.isArray(currentFilter?.value)) {
    return currentFilter.value;
  }
  if (!Array.isArray(currentFilter?.value) && !!currentFilter?.value) {
    return [currentFilter.value];
  }
  return EMPTY_ARRAY;
};
const getNewValue = (filterDefinition, currentFilter, value) => {
  if (filterDefinition.singleSelection) {
    return value;
  }
  if (Array.isArray(currentFilter?.value)) {
    return currentFilter.value.includes(value) ? currentFilter.value.filter(v => v !== value) : [...currentFilter.value, value];
  }
  return [value];
};
function ListBox({
  view,
  filter,
  onChangeView
}) {
  const compositeStore = useCompositeStore({
    virtualFocus: true,
    focusLoop: true,
    // When we have no or just one operator, we can set the first item as active.
    // We do that by passing `undefined` to `defaultActiveId`. Otherwise, we set it to `null`,
    // so the first item is not selected, since the focus is on the operators control.
    defaultActiveId: filter.operators?.length === 1 ? undefined : null
  });
  const currentFilter = view.filters?.find(f => f.field === filter.field);
  const currentValue = getCurrentValue(filter, currentFilter);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Composite, {
    store: compositeStore,
    role: "listbox",
    className: "dataviews-filters__search-widget-listbox",
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)( /* translators: List of items for a filter. 1: Filter name. e.g.: "List of: Author". */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('List of: %1$s'), filter.name),
    onFocusVisible: () => {
      if (!compositeStore.getState().activeId) {
        compositeStore.move(compositeStore.first());
      }
    },
    render: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ariakit_react__WEBPACK_IMPORTED_MODULE_7__.CompositeTypeahead, {
      store: compositeStore
    }),
    children: filter.elements.map(element => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_ariakit_react__WEBPACK_IMPORTED_MODULE_8__.CompositeHover, {
      store: compositeStore,
      render: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(CompositeItem, {
        render: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          "aria-label": element.label,
          role: "option",
          className: "dataviews-filters__search-widget-listitem"
        }),
        onClick: () => {
          var _view$filters, _view$filters2;
          const newFilters = currentFilter ? [...((_view$filters = view.filters) !== null && _view$filters !== void 0 ? _view$filters : []).map(_filter => {
            if (_filter.field === filter.field) {
              return {
                ..._filter,
                operator: currentFilter.operator || filter.operators[0],
                value: getNewValue(filter, currentFilter, element.value)
              };
            }
            return _filter;
          })] : [...((_view$filters2 = view.filters) !== null && _view$filters2 !== void 0 ? _view$filters2 : []), {
            field: filter.field,
            operator: filter.operators[0],
            value: getNewValue(filter, currentFilter, element.value)
          }];
          onChangeView({
            ...view,
            page: 1,
            filters: newFilters
          });
        }
      }),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
        className: "dataviews-filters__search-widget-listitem-check",
        children: [filter.singleSelection && currentValue === element.value && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
          icon: radioCheck
        }), !filter.singleSelection && currentValue.includes(element.value) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
          icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__["default"]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
        children: [element.label, !!element.description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "dataviews-filters__search-widget-listitem-description",
          children: element.description
        })]
      })]
    }, element.value))
  });
}
function ComboboxList({
  view,
  filter,
  onChangeView
}) {
  const [searchValue, setSearchValue] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)('');
  const deferredSearchValue = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useDeferredValue)(searchValue);
  const currentFilter = view.filters?.find(_filter => _filter.field === filter.field);
  const currentValue = getCurrentValue(filter, currentFilter);
  const matches = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    const normalizedSearch = normalizeSearchInput(deferredSearchValue);
    return filter.elements.filter(item => normalizeSearchInput(item.label).includes(normalizedSearch));
  }, [filter.elements, deferredSearchValue]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_ariakit_react__WEBPACK_IMPORTED_MODULE_10__.ComboboxProvider, {
    resetValueOnSelect: false,
    selectedValue: currentValue,
    setSelectedValue: value => {
      var _view$filters3, _view$filters4;
      const newFilters = currentFilter ? [...((_view$filters3 = view.filters) !== null && _view$filters3 !== void 0 ? _view$filters3 : []).map(_filter => {
        if (_filter.field === filter.field) {
          return {
            ..._filter,
            operator: currentFilter.operator || filter.operators[0],
            value
          };
        }
        return _filter;
      })] : [...((_view$filters4 = view.filters) !== null && _view$filters4 !== void 0 ? _view$filters4 : []), {
        field: filter.field,
        operator: filter.operators[0],
        value
      }];
      onChangeView({
        ...view,
        page: 1,
        filters: newFilters
      });
    },
    setValue: setSearchValue,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "dataviews-filters__search-widget-filter-combobox__wrapper",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ariakit_react__WEBPACK_IMPORTED_MODULE_11__.ComboboxLabel, {
        render: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.VisuallyHidden, {
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Search items')
        }),
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Search items')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ariakit_react__WEBPACK_IMPORTED_MODULE_12__.Combobox, {
        autoSelect: "always",
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Search'),
        className: "dataviews-filters__search-widget-filter-combobox__input"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "dataviews-filters__search-widget-filter-combobox__icon",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
          icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_13__["default"]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_ariakit_react__WEBPACK_IMPORTED_MODULE_14__.ComboboxList, {
      className: "dataviews-filters__search-widget-filter-combobox-list",
      alwaysVisible: true,
      children: [matches.map(element => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_ariakit_react__WEBPACK_IMPORTED_MODULE_15__.ComboboxItem, {
          value: element.value,
          className: "dataviews-filters__search-widget-listitem",
          hideOnClick: false,
          setValueOnClick: false,
          focusOnHover: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
            className: "dataviews-filters__search-widget-listitem-check",
            children: [filter.singleSelection && currentValue === element.value && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
              icon: radioCheck
            }), !filter.singleSelection && currentValue.includes(element.value) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
              icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__["default"]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ariakit_react__WEBPACK_IMPORTED_MODULE_16__.ComboboxItemValue, {
              className: "dataviews-filters__search-widget-filter-combobox-item-value",
              value: element.label
            }), !!element.description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "dataviews-filters__search-widget-listitem-description",
              children: element.description
            })]
          })]
        }, element.value);
      }), !matches.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('No results found')
      })]
    })]
  });
}
function SearchWidget(props) {
  const Widget = props.filter.elements.length > 10 ? ComboboxList : ListBox;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Widget, {
    ...props
  });
}
//# sourceMappingURL=search-widget.js.map

/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/components/dataviews-item-actions/index.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/components/dataviews-item-actions/index.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionModal: () => (/* binding */ ActionModal),
/* harmony export */   ActionWithModal: () => (/* binding */ ActionWithModal),
/* harmony export */   ActionsDropdownMenuGroup: () => (/* binding */ ActionsDropdownMenuGroup),
/* harmony export */   "default": () => (/* binding */ ItemActions)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/more-vertical.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lock_unlock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lock-unlock */ "./node_modules/@wordpress/dataviews/build-module/lock-unlock.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */




const {
  DropdownMenuV2: DropdownMenu,
  DropdownMenuGroupV2: DropdownMenuGroup,
  DropdownMenuItemV2: DropdownMenuItem,
  DropdownMenuItemLabelV2: DropdownMenuItemLabel,
  kebabCase
} = (0,_lock_unlock__WEBPACK_IMPORTED_MODULE_5__.unlock)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.privateApis);
function ButtonTrigger({
  action,
  onClick,
  items
}) {
  const label = typeof action.label === 'string' ? action.label : action.label(items);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
    label: label,
    icon: action.icon,
    isDestructive: action.isDestructive,
    size: "compact",
    onClick: onClick
  });
}
function DropdownMenuItemTrigger({
  action,
  onClick,
  items
}) {
  const label = typeof action.label === 'string' ? action.label : action.label(items);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(DropdownMenuItem, {
    onClick: onClick,
    hideOnClick: !('RenderModal' in action),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(DropdownMenuItemLabel, {
      children: label
    })
  });
}
function ActionModal({
  action,
  items,
  closeModal
}) {
  const label = typeof action.label === 'string' ? action.label : action.label(items);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Modal, {
    title: action.modalHeader || label,
    __experimentalHideHeader: !!action.hideModalHeader,
    onRequestClose: closeModal !== null && closeModal !== void 0 ? closeModal : () => {},
    focusOnMount: "firstContentElement",
    size: "small",
    overlayClassName: `dataviews-action-modal dataviews-action-modal__${kebabCase(action.id)}`,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(action.RenderModal, {
      items: items,
      closeModal: closeModal
    })
  });
}
function ActionWithModal({
  action,
  items,
  ActionTrigger,
  isBusy
}) {
  const [isModalOpen, setIsModalOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const actionTriggerProps = {
    action,
    onClick: () => {
      setIsModalOpen(true);
    },
    items,
    isBusy
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ActionTrigger, {
      ...actionTriggerProps
    }), isModalOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ActionModal, {
      action: action,
      items: items,
      closeModal: () => setIsModalOpen(false)
    })]
  });
}
function ActionsDropdownMenuGroup({
  actions,
  item
}) {
  const registry = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useRegistry)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(DropdownMenuGroup, {
    children: actions.map(action => {
      if ('RenderModal' in action) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ActionWithModal, {
          action: action,
          items: [item],
          ActionTrigger: DropdownMenuItemTrigger
        }, action.id);
      }
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(DropdownMenuItemTrigger, {
        action: action,
        onClick: () => {
          action.callback([item], {
            registry
          });
        },
        items: [item]
      }, action.id);
    })
  });
}
function ItemActions({
  item,
  actions,
  isCompact
}) {
  const registry = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useRegistry)();
  const {
    primaryActions,
    eligibleActions
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    // If an action is eligible for all items, doesn't need
    // to provide the `isEligible` function.
    const _eligibleActions = actions.filter(action => !action.isEligible || action.isEligible(item));
    const _primaryActions = _eligibleActions.filter(action => action.isPrimary && !!action.icon);
    return {
      primaryActions: _primaryActions,
      eligibleActions: _eligibleActions
    };
  }, [actions, item]);
  if (isCompact) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(CompactItemActions, {
      item: item,
      actions: eligibleActions
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalHStack, {
    spacing: 1,
    justify: "flex-end",
    className: "dataviews-item-actions",
    style: {
      flexShrink: '0',
      width: 'auto'
    },
    children: [!!primaryActions.length && primaryActions.map(action => {
      if ('RenderModal' in action) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ActionWithModal, {
          action: action,
          items: [item],
          ActionTrigger: ButtonTrigger
        }, action.id);
      }
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ButtonTrigger, {
        action: action,
        onClick: () => {
          action.callback([item], {
            registry
          });
        },
        items: [item]
      }, action.id);
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(CompactItemActions, {
      item: item,
      actions: eligibleActions
    })]
  });
}
function CompactItemActions({
  item,
  actions
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(DropdownMenu, {
    trigger: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
      size: "compact",
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"],
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Actions'),
      accessibleWhenDisabled: true,
      disabled: !actions.length,
      className: "dataviews-all-actions-button"
    }),
    placement: "bottom-end",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ActionsDropdownMenuGroup, {
      actions: actions,
      item: item
    })
  });
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/components/dataviews-layout/index.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/components/dataviews-layout/index.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DataViewsLayout)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dataviews_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dataviews-context */ "./node_modules/@wordpress/dataviews/build-module/components/dataviews-context/index.js");
/* harmony import */ var _dataviews_layouts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dataviews-layouts */ "./node_modules/@wordpress/dataviews/build-module/dataviews-layouts/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



function DataViewsLayout() {
  const {
    actions = [],
    data,
    fields,
    getItemId,
    isLoading,
    view,
    onChangeView,
    selection,
    onChangeSelection,
    setOpenedFilter,
    density
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(_dataviews_context__WEBPACK_IMPORTED_MODULE_2__["default"]);
  const ViewComponent = _dataviews_layouts__WEBPACK_IMPORTED_MODULE_3__.VIEW_LAYOUTS.find(v => v.type === view.type)?.component;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ViewComponent, {
    actions: actions,
    data: data,
    fields: fields,
    getItemId: getItemId,
    isLoading: isLoading,
    onChangeView: onChangeView,
    onChangeSelection: onChangeSelection,
    selection: selection,
    setOpenedFilter: setOpenedFilter,
    view: view,
    density: density
  });
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/components/dataviews-pagination/index.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/components/dataviews-pagination/index.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/previous.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/next.js");
/* harmony import */ var _dataviews_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dataviews-context */ "./node_modules/@wordpress/dataviews/build-module/components/dataviews-context/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */



function DataViewsPagination() {
  var _view$page;
  const {
    view,
    onChangeView,
    paginationInfo: {
      totalItems = 0,
      totalPages
    }
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(_dataviews_context__WEBPACK_IMPORTED_MODULE_4__["default"]);
  if (!totalItems || !totalPages) {
    return null;
  }
  const currentPage = (_view$page = view.page) !== null && _view$page !== void 0 ? _view$page : 1;
  return !!totalItems && totalPages !== 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalHStack, {
    expanded: false,
    spacing: 6,
    justify: "end",
    className: "dataviews-pagination",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalHStack, {
      justify: "flex-start",
      expanded: false,
      spacing: 2,
      className: "dataviews-pagination__page-selection",
      children: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createInterpolateElement)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)(
      // translators: %s: Total number of pages.
      (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('Page <CurrentPageControl /> of %s', 'paging'), totalPages), {
        CurrentPageControl: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
          "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Current page'),
          value: view.page?.toString(),
          options: Array.from(Array(totalPages)).map((_, i) => {
            const page = i + 1;
            return {
              value: page.toString(),
              label: page.toString()
            };
          }),
          onChange: newValue => {
            onChangeView({
              ...view,
              page: +newValue
            });
          },
          size: "compact",
          __nextHasNoMarginBottom: true
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalHStack, {
      expanded: false,
      spacing: 1,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
        onClick: () => onChangeView({
          ...view,
          page: currentPage - 1
        }),
        disabled: currentPage === 1,
        accessibleWhenDisabled: true,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Previous page'),
        icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"],
        showTooltip: true,
        size: "compact",
        tooltipPosition: "top"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
        onClick: () => onChangeView({
          ...view,
          page: currentPage + 1
        }),
        disabled: currentPage >= totalPages,
        accessibleWhenDisabled: true,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Next page'),
        icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"],
        showTooltip: true,
        size: "compact",
        tooltipPosition: "top"
      })]
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.memo)(DataViewsPagination));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/components/dataviews-search/index.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/components/dataviews-search/index.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _dataviews_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dataviews-context */ "./node_modules/@wordpress/dataviews/build-module/components/dataviews-context/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


const DataViewsSearch = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.memo)(function Search({
  label
}) {
  const {
    view,
    onChangeView
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(_dataviews_context__WEBPACK_IMPORTED_MODULE_5__["default"]);
  const [search, setSearch, debouncedSearch] = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.useDebouncedInput)(view.search);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    var _view$search;
    setSearch((_view$search = view.search) !== null && _view$search !== void 0 ? _view$search : '');
  }, [view.search, setSearch]);
  const onChangeViewRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(onChangeView);
  const viewRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(view);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    onChangeViewRef.current = onChangeView;
    viewRef.current = view;
  }, [onChangeView, view]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (debouncedSearch !== viewRef.current?.search) {
      onChangeViewRef.current({
        ...viewRef.current,
        page: 1,
        search: debouncedSearch
      });
    }
  }, [debouncedSearch]);
  const searchLabel = label || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Search');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SearchControl, {
    className: "dataviews-search",
    __nextHasNoMarginBottom: true,
    onChange: setSearch,
    value: search,
    label: searchLabel,
    placeholder: searchLabel,
    size: "compact"
  });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataViewsSearch);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/components/dataviews-selection-checkbox/index.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/components/dataviews-selection-checkbox/index.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DataViewsSelectionCheckbox)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */

function DataViewsSelectionCheckbox({
  selection,
  onChangeSelection,
  item,
  getItemId,
  primaryField,
  disabled
}) {
  const id = getItemId(item);
  const checked = !disabled && selection.includes(id);
  let selectionLabel;
  if (primaryField?.getValue && item) {
    // eslint-disable-next-line @wordpress/valid-sprintf
    selectionLabel = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.sprintf)( /* translators: %s: item title. */
    checked ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Deselect item: %s') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Select item: %s'), primaryField.getValue({
      item
    }));
  } else {
    selectionLabel = checked ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Select a new item') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Deselect item');
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CheckboxControl, {
    className: "dataviews-selection-checkbox",
    __nextHasNoMarginBottom: true,
    "aria-label": selectionLabel,
    "aria-disabled": disabled,
    checked: checked,
    onChange: () => {
      if (disabled) {
        return;
      }
      onChangeSelection(selection.includes(id) ? selection.filter(itemId => id !== itemId) : [...selection, id]);
    }
  });
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/components/dataviews-view-config/index.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/components/dataviews-view-config/index.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/seen.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/unseen.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/cog.js");
/* harmony import */ var _wordpress_warning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/warning */ "@wordpress/warning");
/* harmony import */ var _wordpress_warning__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_warning__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants */ "./node_modules/@wordpress/dataviews/build-module/constants.js");
/* harmony import */ var _dataviews_layouts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../dataviews-layouts */ "./node_modules/@wordpress/dataviews/build-module/dataviews-layouts/index.js");
/* harmony import */ var _dataviews_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dataviews-context */ "./node_modules/@wordpress/dataviews/build-module/components/dataviews-context/index.js");
/* harmony import */ var _lock_unlock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lock-unlock */ "./node_modules/@wordpress/dataviews/build-module/lock-unlock.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */







const {
  DropdownMenuV2: DropdownMenu,
  DropdownMenuRadioItemV2: DropdownMenuRadioItem,
  DropdownMenuItemLabelV2: DropdownMenuItemLabel
} = (0,_lock_unlock__WEBPACK_IMPORTED_MODULE_5__.unlock)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.privateApis);
function ViewTypeMenu({
  defaultLayouts = {
    list: {},
    grid: {},
    table: {}
  }
}) {
  const {
    view,
    onChangeView
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useContext)(_dataviews_context__WEBPACK_IMPORTED_MODULE_6__["default"]);
  const availableLayouts = Object.keys(defaultLayouts);
  if (availableLayouts.length <= 1) {
    return null;
  }
  const activeView = _dataviews_layouts__WEBPACK_IMPORTED_MODULE_7__.VIEW_LAYOUTS.find(v => view.type === v.type);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(DropdownMenu, {
    trigger: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
      size: "compact",
      icon: activeView?.icon,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Layout')
    }),
    children: availableLayouts.map(layout => {
      const config = _dataviews_layouts__WEBPACK_IMPORTED_MODULE_7__.VIEW_LAYOUTS.find(v => v.type === layout);
      if (!config) {
        return null;
      }
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(DropdownMenuRadioItem, {
        value: layout,
        name: "view-actions-available-view",
        checked: layout === view.type,
        hideOnClick: true,
        onChange: e => {
          switch (e.target.value) {
            case 'list':
            case 'grid':
            case 'table':
              return onChangeView({
                ...view,
                type: e.target.value,
                ...defaultLayouts[e.target.value]
              });
          }
           true ? _wordpress_warning__WEBPACK_IMPORTED_MODULE_3___default()('Invalid dataview') : 0;
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(DropdownMenuItemLabel, {
          children: config.label
        })
      }, layout);
    })
  });
}
function SortFieldControl() {
  const {
    view,
    fields,
    onChangeView
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useContext)(_dataviews_context__WEBPACK_IMPORTED_MODULE_6__["default"]);
  const orderOptions = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    const sortableFields = fields.filter(field => field.enableSorting !== false);
    return sortableFields.map(field => {
      return {
        label: field.label,
        value: field.id
      };
    });
  }, [fields]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
    __nextHasNoMarginBottom: true,
    __next40pxDefaultSize: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Sort by'),
    value: view.sort?.field,
    options: orderOptions,
    onChange: value => {
      onChangeView({
        ...view,
        sort: {
          direction: view?.sort?.direction || 'desc',
          field: value
        }
      });
    }
  });
}
function SortDirectionControl() {
  const {
    view,
    onChangeView
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useContext)(_dataviews_context__WEBPACK_IMPORTED_MODULE_6__["default"]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalToggleGroupControl, {
    className: "dataviews-view-config__sort-direction",
    __nextHasNoMarginBottom: true,
    __next40pxDefaultSize: true,
    isBlock: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Order'),
    value: view.sort?.direction || 'desc',
    disabled: !view?.sort?.field,
    onChange: newDirection => {
      if (!view?.sort?.field) {
        return;
      }
      if (newDirection === 'asc' || newDirection === 'desc') {
        onChangeView({
          ...view,
          sort: {
            direction: newDirection,
            field: view.sort.field
          }
        });
        return;
      }
       true ? _wordpress_warning__WEBPACK_IMPORTED_MODULE_3___default()('Invalid direction') : 0;
    },
    children: _constants__WEBPACK_IMPORTED_MODULE_8__.SORTING_DIRECTIONS.map(direction => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalToggleGroupControlOptionIcon, {
        value: direction,
        icon: _constants__WEBPACK_IMPORTED_MODULE_8__.sortIcons[direction],
        label: _constants__WEBPACK_IMPORTED_MODULE_8__.sortLabels[direction]
      }, direction);
    })
  });
}
const PAGE_SIZE_VALUES = [10, 20, 50, 100];
function ItemsPerPageControl() {
  const {
    view,
    onChangeView
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useContext)(_dataviews_context__WEBPACK_IMPORTED_MODULE_6__["default"]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalToggleGroupControl, {
    __nextHasNoMarginBottom: true,
    __next40pxDefaultSize: true,
    isBlock: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Items per page'),
    value: view.perPage || 10,
    disabled: !view?.sort?.field,
    onChange: newItemsPerPage => {
      const newItemsPerPageNumber = typeof newItemsPerPage === 'number' || newItemsPerPage === undefined ? newItemsPerPage : parseInt(newItemsPerPage, 10);
      onChangeView({
        ...view,
        perPage: newItemsPerPageNumber,
        page: 1
      });
    },
    children: PAGE_SIZE_VALUES.map(value => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalToggleGroupControlOption, {
        value: value,
        label: value.toString()
      }, value);
    })
  });
}
function FieldControl() {
  const {
    view,
    fields,
    onChangeView
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useContext)(_dataviews_context__WEBPACK_IMPORTED_MODULE_6__["default"]);
  const mandatoryFields = (0,_dataviews_layouts__WEBPACK_IMPORTED_MODULE_7__.getMandatoryFields)(view);
  const hidableFields = fields.filter(field => field.enableHiding !== false && !mandatoryFields.includes(field.id));
  const viewFields = view.fields || fields.map(field => field.id);
  if (!hidableFields?.length) {
    return null;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalItemGroup, {
    isBordered: true,
    isSeparated: true,
    children: hidableFields?.map(field => {
      const isVisible = viewFields.includes(field.id);
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalItem, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalHStack, {
          expanded: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            children: field.label
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
            className: "'dataviews-view-config__field-control-button",
            size: "compact",
            onClick: () => onChangeView({
              ...view,
              fields: isVisible ? viewFields.filter(id => id !== field.id) : [...viewFields, field.id]
            }),
            icon: isVisible ? _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__["default"] : _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__["default"],
            label: isVisible ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hide field') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show field')
          })]
        })
      }, field.id);
    })
  });
}
function SettingsSection({
  title,
  description,
  children
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalGrid, {
    columns: 12,
    className: "dataviews-settings-section",
    gap: 4,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "dataviews-settings-section__sidebar",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalHeading, {
        level: 2,
        className: "dataviews-settings-section__title",
        children: title
      }), description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalText, {
        variant: "muted",
        className: "dataviews-settings-section__description",
        children: description
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalGrid, {
      columns: 8,
      gap: 4,
      className: "dataviews-settings-section__content",
      children: children
    })]
  });
}
function DataviewsViewConfigContent() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalVStack, {
    className: "dataviews-view-config",
    spacing: 6,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(SettingsSection, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Appearance'),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalHStack, {
        expanded: true,
        className: "is-divided-in-two",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(SortFieldControl, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(SortDirectionControl, {})]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ItemsPerPageControl, {})]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(SettingsSection, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Properties'),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(FieldControl, {})
    })]
  });
}
function _DataViewsViewConfig({
  defaultLayouts = {
    list: {},
    grid: {},
    table: {}
  }
}) {
  const [isShowingViewPopover, setIsShowingViewPopover] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ViewTypeMenu, {
      defaultLayouts: defaultLayouts
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
        size: "compact",
        icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_11__["default"],
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('View options', 'View is used as a noun'),
        onClick: () => setIsShowingViewPopover(true)
      }), isShowingViewPopover && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Popover, {
        placement: "bottom-end",
        onClose: () => {
          setIsShowingViewPopover(false);
        },
        focusOnMount: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(DataviewsViewConfigContent, {})
      })]
    })]
  });
}
const DataViewsViewConfig = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.memo)(_DataViewsViewConfig);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataViewsViewConfig);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/components/dataviews/index.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/components/dataviews/index.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DataViews)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dataviews_bulk_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dataviews-bulk-actions */ "./node_modules/@wordpress/dataviews/build-module/components/dataviews-bulk-actions/index.js");
/* harmony import */ var _dataviews_bulk_actions_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../dataviews-bulk-actions-toolbar */ "./node_modules/@wordpress/dataviews/build-module/components/dataviews-bulk-actions-toolbar/index.js");
/* harmony import */ var _dataviews_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dataviews-context */ "./node_modules/@wordpress/dataviews/build-module/components/dataviews-context/index.js");
/* harmony import */ var _dataviews_filters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dataviews-filters */ "./node_modules/@wordpress/dataviews/build-module/components/dataviews-filters/index.js");
/* harmony import */ var _dataviews_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../dataviews-layout */ "./node_modules/@wordpress/dataviews/build-module/components/dataviews-layout/index.js");
/* harmony import */ var _dataviews_pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../dataviews-pagination */ "./node_modules/@wordpress/dataviews/build-module/components/dataviews-pagination/index.js");
/* harmony import */ var _dataviews_search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dataviews-search */ "./node_modules/@wordpress/dataviews/build-module/components/dataviews-search/index.js");
/* harmony import */ var _dataviews_view_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../dataviews-view-config */ "./node_modules/@wordpress/dataviews/build-module/components/dataviews-view-config/index.js");
/* harmony import */ var _normalize_fields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../normalize-fields */ "./node_modules/@wordpress/dataviews/build-module/normalize-fields.js");
/* harmony import */ var _dataviews_layouts_grid_density_picker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../dataviews-layouts/grid/density-picker */ "./node_modules/@wordpress/dataviews/build-module/dataviews-layouts/grid/density-picker.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants */ "./node_modules/@wordpress/dataviews/build-module/constants.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */













const defaultGetItemId = item => item.id;
function DataViews({
  view,
  onChangeView,
  fields,
  search = true,
  searchLabel = undefined,
  actions = [],
  data,
  getItemId = defaultGetItemId,
  isLoading = false,
  paginationInfo,
  defaultLayouts,
  selection: selectionProperty,
  onChangeSelection,
  header
}) {
  const [selectionState, setSelectionState] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [density, setDensity] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const [isShowingFilter, setIsShowingFilter] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const isUncontrolled = selectionProperty === undefined || onChangeSelection === undefined;
  const selection = isUncontrolled ? selectionState : selectionProperty;
  const [openedFilter, setOpenedFilter] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  function setSelectionWithChange(value) {
    const newValue = typeof value === 'function' ? value(selection) : value;
    if (isUncontrolled) {
      setSelectionState(newValue);
    }
    if (onChangeSelection) {
      onChangeSelection(newValue);
    }
  }
  const _fields = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (0,_normalize_fields__WEBPACK_IMPORTED_MODULE_3__.normalizeFields)(fields), [fields]);
  const _selection = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    return selection.filter(id => data.some(item => getItemId(item) === id));
  }, [selection, data, getItemId]);
  const filters = (0,_dataviews_filters__WEBPACK_IMPORTED_MODULE_4__.useFilters)(_fields, view);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_dataviews_context__WEBPACK_IMPORTED_MODULE_5__["default"].Provider, {
    value: {
      view,
      onChangeView,
      fields: _fields,
      actions,
      data,
      isLoading,
      paginationInfo,
      selection: _selection,
      onChangeSelection: setSelectionWithChange,
      openedFilter,
      setOpenedFilter,
      getItemId,
      density
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "dataviews-wrapper",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalHStack, {
        alignment: "top",
        justify: "start",
        className: "dataviews__view-actions",
        spacing: 1,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalHStack, {
          justify: "start",
          wrap: true,
          children: [search && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_dataviews_search__WEBPACK_IMPORTED_MODULE_6__["default"], {
            label: searchLabel
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_dataviews_filters__WEBPACK_IMPORTED_MODULE_4__.FilterVisibilityToggle, {
            filters: filters,
            view: view,
            onChangeView: onChangeView,
            setOpenedFilter: setOpenedFilter,
            setIsShowingFilter: setIsShowingFilter,
            isShowingFilter: isShowingFilter
          })]
        }), view.type === _constants__WEBPACK_IMPORTED_MODULE_7__.LAYOUT_GRID && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_dataviews_layouts_grid_density_picker__WEBPACK_IMPORTED_MODULE_8__["default"], {
          density: density,
          setDensity: setDensity
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_dataviews_bulk_actions__WEBPACK_IMPORTED_MODULE_9__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalHStack, {
          spacing: 1,
          expanded: false,
          style: {
            flexShrink: 0
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_dataviews_view_config__WEBPACK_IMPORTED_MODULE_10__["default"], {
            defaultLayouts: defaultLayouts
          }), header]
        })]
      }), isShowingFilter && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_dataviews_filters__WEBPACK_IMPORTED_MODULE_4__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_dataviews_layout__WEBPACK_IMPORTED_MODULE_11__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_dataviews_pagination__WEBPACK_IMPORTED_MODULE_12__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_dataviews_bulk_actions_toolbar__WEBPACK_IMPORTED_MODULE_13__["default"], {})]
    })
  });
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/constants.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/constants.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ALL_OPERATORS: () => (/* binding */ ALL_OPERATORS),
/* harmony export */   LAYOUT_GRID: () => (/* binding */ LAYOUT_GRID),
/* harmony export */   LAYOUT_LIST: () => (/* binding */ LAYOUT_LIST),
/* harmony export */   LAYOUT_TABLE: () => (/* binding */ LAYOUT_TABLE),
/* harmony export */   OPERATORS: () => (/* binding */ OPERATORS),
/* harmony export */   OPERATOR_IS: () => (/* binding */ OPERATOR_IS),
/* harmony export */   OPERATOR_IS_ALL: () => (/* binding */ OPERATOR_IS_ALL),
/* harmony export */   OPERATOR_IS_ANY: () => (/* binding */ OPERATOR_IS_ANY),
/* harmony export */   OPERATOR_IS_NONE: () => (/* binding */ OPERATOR_IS_NONE),
/* harmony export */   OPERATOR_IS_NOT: () => (/* binding */ OPERATOR_IS_NOT),
/* harmony export */   OPERATOR_IS_NOT_ALL: () => (/* binding */ OPERATOR_IS_NOT_ALL),
/* harmony export */   SORTING_DIRECTIONS: () => (/* binding */ SORTING_DIRECTIONS),
/* harmony export */   sortArrows: () => (/* binding */ sortArrows),
/* harmony export */   sortIcons: () => (/* binding */ sortIcons),
/* harmony export */   sortLabels: () => (/* binding */ sortLabels),
/* harmony export */   sortValues: () => (/* binding */ sortValues)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/arrow-up.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/arrow-down.js");
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */

// Filter operators.
const OPERATOR_IS = 'is';
const OPERATOR_IS_NOT = 'isNot';
const OPERATOR_IS_ANY = 'isAny';
const OPERATOR_IS_NONE = 'isNone';
const OPERATOR_IS_ALL = 'isAll';
const OPERATOR_IS_NOT_ALL = 'isNotAll';
const ALL_OPERATORS = [OPERATOR_IS, OPERATOR_IS_NOT, OPERATOR_IS_ANY, OPERATOR_IS_NONE, OPERATOR_IS_ALL, OPERATOR_IS_NOT_ALL];
const OPERATORS = {
  [OPERATOR_IS]: {
    key: 'is-filter',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Is')
  },
  [OPERATOR_IS_NOT]: {
    key: 'is-not-filter',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Is not')
  },
  [OPERATOR_IS_ANY]: {
    key: 'is-any-filter',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Is any')
  },
  [OPERATOR_IS_NONE]: {
    key: 'is-none-filter',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Is none')
  },
  [OPERATOR_IS_ALL]: {
    key: 'is-all-filter',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Is all')
  },
  [OPERATOR_IS_NOT_ALL]: {
    key: 'is-not-all-filter',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Is not all')
  }
};
const SORTING_DIRECTIONS = ['asc', 'desc'];
const sortArrows = {
  asc: '↑',
  desc: '↓'
};
const sortValues = {
  asc: 'ascending',
  desc: 'descending'
};
const sortLabels = {
  asc: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Sort ascending'),
  desc: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Sort descending')
};
const sortIcons = {
  asc: _wordpress_icons__WEBPACK_IMPORTED_MODULE_1__["default"],
  desc: _wordpress_icons__WEBPACK_IMPORTED_MODULE_2__["default"]
};

// View layouts.
const LAYOUT_TABLE = 'table';
const LAYOUT_GRID = 'grid';
const LAYOUT_LIST = 'list';
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/dataviews-layouts/grid/density-picker.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/dataviews-layouts/grid/density-picker.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DensityPicker)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/reset.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/plus.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
/**
 * WordPress dependencies
 */








const viewportBreaks = {
  xhuge: {
    min: 3,
    max: 6,
    default: 5
  },
  huge: {
    min: 2,
    max: 4,
    default: 4
  },
  xlarge: {
    min: 2,
    max: 3,
    default: 3
  },
  large: {
    min: 1,
    max: 2,
    default: 2
  },
  mobile: {
    min: 1,
    max: 2,
    default: 2
  }
};
function useViewPortBreakpoint() {
  const isXHuge = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.useViewportMatch)('xhuge', '>=');
  const isHuge = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.useViewportMatch)('huge', '>=');
  const isXlarge = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.useViewportMatch)('xlarge', '>=');
  const isLarge = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.useViewportMatch)('large', '>=');
  const isMobile = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.useViewportMatch)('mobile', '>=');
  if (isXHuge) {
    return 'xhuge';
  }
  if (isHuge) {
    return 'huge';
  }
  if (isXlarge) {
    return 'xlarge';
  }
  if (isLarge) {
    return 'large';
  }
  if (isMobile) {
    return 'mobile';
  }
  return null;
}

// Value is number from 0 to 100 representing how big an item is in the grid
// 100 being the biggest and 0 being the smallest.
// The size is relative to the viewport size, if one a given viewport the
// number of allowed items in a grid is 3 to 6 a 0 ( the smallest ) will mean that the grid will
// have 6 items in a row, a 100 ( the biggest ) will mean that the grid will have 3 items in a row.
// A value of 75 will mean that the grid will have 4 items in a row.
function getRangeValue(density, breakValues) {
  const inverseDensity = breakValues.max - density;
  const max = breakValues.max - breakValues.min;
  return Math.round(inverseDensity * 100 / max);
}
function DensityPicker({
  density,
  setDensity
}) {
  const viewport = useViewPortBreakpoint();
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    setDensity(_density => {
      if (!viewport || !_density) {
        return 0;
      }
      const breakValues = viewportBreaks[viewport];
      if (_density < breakValues.min) {
        return breakValues.min;
      }
      if (_density > breakValues.max) {
        return breakValues.max;
      }
      return _density;
    });
  }, [setDensity, viewport]);
  if (!viewport) {
    return null;
  }
  const breakValues = viewportBreaks[viewport];
  const densityToUse = density || breakValues.default;
  const rangeValue = getRangeValue(densityToUse, breakValues);
  const step = 100 / (breakValues.max - breakValues.min + 1);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
      size: "compact",
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"],
      disabled: rangeValue <= 0,
      accessibleWhenDisabled: true,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Decrease size'),
      onClick: () => {
        setDensity(densityToUse + 1);
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
      __nextHasNoMarginBottom: true,
      showTooltip: false,
      className: "dataviews-density-picker__range-control",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Item size'),
      hideLabelFromVision: true,
      value: rangeValue,
      min: 0,
      max: 100,
      withInputField: false,
      onChange: (value = 0) => {
        const inverseValue = 100 - value;
        setDensity(Math.round(inverseValue * (breakValues.max - breakValues.min) / 100 + breakValues.min));
      },
      step: step
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
      size: "compact",
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"],
      disabled: rangeValue >= 100,
      accessibleWhenDisabled: true,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Increase size'),
      onClick: () => {
        setDensity(densityToUse - 1);
      }
    })]
  });
}
//# sourceMappingURL=density-picker.js.map

/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/dataviews-layouts/grid/index.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/dataviews-layouts/grid/index.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ViewGrid)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_dataviews_item_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/dataviews-item-actions */ "./node_modules/@wordpress/dataviews/build-module/components/dataviews-item-actions/index.js");
/* harmony import */ var _components_dataviews_selection_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/dataviews-selection-checkbox */ "./node_modules/@wordpress/dataviews/build-module/components/dataviews-selection-checkbox/index.js");
/* harmony import */ var _components_dataviews_bulk_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/dataviews-bulk-actions */ "./node_modules/@wordpress/dataviews/build-module/components/dataviews-bulk-actions/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */






function GridItem({
  selection,
  onChangeSelection,
  getItemId,
  item,
  actions,
  mediaField,
  primaryField,
  visibleFields,
  badgeFields,
  columnFields
}) {
  const hasBulkAction = (0,_components_dataviews_bulk_actions__WEBPACK_IMPORTED_MODULE_4__.useHasAPossibleBulkAction)(actions, item);
  const id = getItemId(item);
  const isSelected = selection.includes(id);
  const renderedMediaField = mediaField?.render ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(mediaField.render, {
    item: item
  }) : null;
  const renderedPrimaryField = primaryField?.render ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(primaryField.render, {
    item: item
  }) : null;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalVStack, {
    spacing: 0,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_0__["default"])('dataviews-view-grid__card', {
      'is-selected': hasBulkAction && isSelected
    }),
    onClickCapture: event => {
      if (event.ctrlKey || event.metaKey) {
        event.stopPropagation();
        event.preventDefault();
        if (!hasBulkAction) {
          return;
        }
        onChangeSelection(selection.includes(id) ? selection.filter(itemId => id !== itemId) : [...selection, id]);
      }
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "dataviews-view-grid__media",
      children: renderedMediaField
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_dataviews_selection_checkbox__WEBPACK_IMPORTED_MODULE_5__["default"], {
      item: item,
      selection: selection,
      onChangeSelection: onChangeSelection,
      getItemId: getItemId,
      primaryField: primaryField,
      disabled: !hasBulkAction
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalHStack, {
      justify: "space-between",
      className: "dataviews-view-grid__title-actions",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalHStack, {
        className: "dataviews-view-grid__primary-field",
        children: renderedPrimaryField
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_dataviews_item_actions__WEBPACK_IMPORTED_MODULE_6__["default"], {
        item: item,
        actions: actions,
        isCompact: true
      })]
    }), !!badgeFields?.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalHStack, {
      className: "dataviews-view-grid__badge-fields",
      spacing: 2,
      wrap: true,
      alignment: "top",
      justify: "flex-start",
      children: badgeFields.map(field => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FlexItem, {
          className: "dataviews-view-grid__field-value",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(field.render, {
            item: item
          })
        }, field.id);
      })
    }), !!visibleFields?.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalVStack, {
      className: "dataviews-view-grid__fields",
      spacing: 1,
      children: visibleFields.map(field => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Flex, {
          className: (0,clsx__WEBPACK_IMPORTED_MODULE_0__["default"])('dataviews-view-grid__field', columnFields?.includes(field.id) ? 'is-column' : 'is-row'),
          gap: 1,
          justify: "flex-start",
          expanded: true,
          style: {
            height: 'auto'
          },
          direction: columnFields?.includes(field.id) ? 'column' : 'row',
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FlexItem, {
              className: "dataviews-view-grid__field-name",
              children: field.label
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FlexItem, {
              className: "dataviews-view-grid__field-value",
              style: {
                maxHeight: 'none'
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(field.render, {
                item: item
              })
            })]
          })
        }, field.id);
      })
    })]
  }, id);
}
function ViewGrid({
  actions,
  data,
  fields,
  getItemId,
  isLoading,
  onChangeSelection,
  selection,
  view,
  density
}) {
  const mediaField = fields.find(field => field.id === view.layout?.mediaField);
  const primaryField = fields.find(field => field.id === view.layout?.primaryField);
  const viewFields = view.fields || fields.map(field => field.id);
  const {
    visibleFields,
    badgeFields
  } = fields.reduce((accumulator, field) => {
    if (!viewFields.includes(field.id) || [view.layout?.mediaField, view?.layout?.primaryField].includes(field.id)) {
      return accumulator;
    }
    // If the field is a badge field, add it to the badgeFields array
    // otherwise add it to the rest visibleFields array.
    const key = view.layout?.badgeFields?.includes(field.id) ? 'badgeFields' : 'visibleFields';
    accumulator[key].push(field);
    return accumulator;
  }, {
    visibleFields: [],
    badgeFields: []
  });
  const hasData = !!data?.length;
  const gridStyle = density ? {
    gridTemplateColumns: `repeat(${density}, minmax(0, 1fr))`
  } : {};
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [hasData && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalGrid, {
      gap: 8,
      columns: 2,
      alignment: "top",
      className: "dataviews-view-grid",
      style: gridStyle,
      "aria-busy": isLoading,
      children: data.map(item => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(GridItem, {
          selection: selection,
          onChangeSelection: onChangeSelection,
          getItemId: getItemId,
          item: item,
          actions: actions,
          mediaField: mediaField,
          primaryField: primaryField,
          visibleFields: visibleFields,
          badgeFields: badgeFields,
          columnFields: view.layout?.columnFields
        }, getItemId(item));
      })
    }), !hasData && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_0__["default"])({
        'dataviews-loading': isLoading,
        'dataviews-no-results': !isLoading
      }),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
        children: isLoading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, {}) : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('No results')
      })
    })]
  });
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/dataviews-layouts/index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/dataviews-layouts/index.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VIEW_LAYOUTS: () => (/* binding */ VIEW_LAYOUTS),
/* harmony export */   getMandatoryFields: () => (/* binding */ getMandatoryFields)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/block-table.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/category.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/format-list-bullets-rtl.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/format-list-bullets.js");
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table */ "./node_modules/@wordpress/dataviews/build-module/dataviews-layouts/table/index.js");
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./grid */ "./node_modules/@wordpress/dataviews/build-module/dataviews-layouts/grid/index.js");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list */ "./node_modules/@wordpress/dataviews/build-module/dataviews-layouts/list/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./node_modules/@wordpress/dataviews/build-module/constants.js");
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */




const VIEW_LAYOUTS = [{
  type: _constants__WEBPACK_IMPORTED_MODULE_1__.LAYOUT_TABLE,
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Table'),
  component: _table__WEBPACK_IMPORTED_MODULE_2__["default"],
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  type: _constants__WEBPACK_IMPORTED_MODULE_1__.LAYOUT_GRID,
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Grid'),
  component: _grid__WEBPACK_IMPORTED_MODULE_4__["default"],
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"]
}, {
  type: _constants__WEBPACK_IMPORTED_MODULE_1__.LAYOUT_LIST,
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('List'),
  component: _list__WEBPACK_IMPORTED_MODULE_6__["default"],
  icon: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.isRTL)() ? _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__["default"] : _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__["default"]
}];
function getMandatoryFields(view) {
  if (view.type === 'table') {
    var _view$layout$combined;
    return [view.layout?.primaryField].concat((_view$layout$combined = view.layout?.combinedFields?.flatMap(field => field.children)) !== null && _view$layout$combined !== void 0 ? _view$layout$combined : []).filter(item => !!item);
  }
  if (view.type === 'grid') {
    return [view.layout?.primaryField, view.layout?.mediaField].filter(item => !!item);
  }
  if (view.type === 'list') {
    return [view.layout?.primaryField, view.layout?.mediaField].filter(item => !!item);
  }
  return [];
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/dataviews-layouts/list/index.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/dataviews-layouts/list/index.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ViewList)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/more-vertical.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lock_unlock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lock-unlock */ "./node_modules/@wordpress/dataviews/build-module/lock-unlock.js");
/* harmony import */ var _components_dataviews_item_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/dataviews-item-actions */ "./node_modules/@wordpress/dataviews/build-module/components/dataviews-item-actions/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
/**
 * External dependencies
 */

// Import CompositeStore type, which is not exported from @wordpress/components.
// eslint-disable-next-line no-restricted-imports

/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */




const {
  useCompositeStoreV2: useCompositeStore,
  CompositeV2: Composite,
  CompositeItemV2: CompositeItem,
  CompositeRowV2: CompositeRow,
  DropdownMenuV2: DropdownMenu
} = (0,_lock_unlock__WEBPACK_IMPORTED_MODULE_7__.unlock)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.privateApis);
function ListItem({
  actions,
  id,
  isSelected,
  item,
  mediaField,
  onSelect,
  primaryField,
  store,
  visibleFields
}) {
  const registry = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useRegistry)();
  const itemRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
  const labelId = `${id}-label`;
  const descriptionId = `${id}-description`;
  const [isHovered, setIsHovered] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (isSelected) {
      itemRef.current?.scrollIntoView({
        behavior: 'auto',
        block: 'nearest',
        inline: 'nearest'
      });
    }
  }, [isSelected]);
  const {
    primaryAction,
    eligibleActions
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
    // If an action is eligible for all items, doesn't need
    // to provide the `isEligible` function.
    const _eligibleActions = actions.filter(action => !action.isEligible || action.isEligible(item));
    const _primaryActions = _eligibleActions.filter(action => action.isPrimary && !!action.icon);
    return {
      primaryAction: _primaryActions?.[0],
      eligibleActions: _eligibleActions
    };
  }, [actions, item]);
  const [isModalOpen, setIsModalOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const primaryActionLabel = primaryAction && (typeof primaryAction.label === 'string' ? primaryAction.label : primaryAction.label([item]));
  const renderedMediaField = mediaField?.render ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(mediaField.render, {
    item: item
  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
    className: "dataviews-view-list__media-placeholder"
  });
  const renderedPrimaryField = primaryField?.render ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(primaryField.render, {
    item: item
  }) : null;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(CompositeRow, {
    ref: itemRef,
    render: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("li", {}),
    role: "row",
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_0__["default"])({
      'is-selected': isSelected,
      'is-hovered': isHovered
    }),
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalHStack, {
      className: "dataviews-view-list__item-wrapper",
      alignment: "center",
      spacing: 0,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        role: "gridcell",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(CompositeItem, {
          store: store,
          render: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {}),
          role: "button",
          id: id,
          "aria-pressed": isSelected,
          "aria-labelledby": labelId,
          "aria-describedby": descriptionId,
          className: "dataviews-view-list__item",
          onClick: () => onSelect(item),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalHStack, {
            spacing: 3,
            justify: "start",
            alignment: "flex-start",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "dataviews-view-list__media-wrapper",
              children: renderedMediaField
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalVStack, {
              spacing: 1,
              className: "dataviews-view-list__field-wrapper",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                className: "dataviews-view-list__primary-field",
                id: labelId,
                children: renderedPrimaryField
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "dataviews-view-list__fields",
                id: descriptionId,
                children: visibleFields.map(field => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                  className: "dataviews-view-list__field",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.VisuallyHidden, {
                    as: "span",
                    className: "dataviews-view-list__field-label",
                    children: field.label
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                    className: "dataviews-view-list__field-value",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(field.render, {
                      item: item
                    })
                  })]
                }, field.id))
              })]
            })]
          })
        })
      }), eligibleActions?.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalHStack, {
        spacing: 3,
        justify: "flex-end",
        className: "dataviews-view-list__item-actions",
        style: {
          flexShrink: '0',
          width: 'auto'
        },
        children: [primaryAction && 'RenderModal' in primaryAction && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          role: "gridcell",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(CompositeItem, {
            store: store,
            render: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
              label: primaryActionLabel,
              icon: primaryAction.icon,
              isDestructive: primaryAction.isDestructive,
              size: "small",
              onClick: () => setIsModalOpen(true)
            }),
            children: isModalOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_dataviews_item_actions__WEBPACK_IMPORTED_MODULE_8__.ActionModal, {
              action: primaryAction,
              items: [item],
              closeModal: () => setIsModalOpen(false)
            })
          })
        }), primaryAction && !('RenderModal' in primaryAction) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          role: "gridcell",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(CompositeItem, {
            store: store,
            render: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
              label: primaryActionLabel,
              icon: primaryAction.icon,
              isDestructive: primaryAction.isDestructive,
              size: "small",
              onClick: () => {
                primaryAction.callback([item], {
                  registry
                });
              }
            })
          })
        }, primaryAction.id), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          role: "gridcell",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(DropdownMenu, {
            trigger: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(CompositeItem, {
              store: store,
              render: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                size: "small",
                icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__["default"],
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Actions'),
                accessibleWhenDisabled: true,
                disabled: !actions.length,
                onKeyDown: event => {
                  if (event.key === 'ArrowDown') {
                    // Prevent the default behaviour (open dropdown menu) and go down.
                    event.preventDefault();
                    store.move(store.down());
                  }
                  if (event.key === 'ArrowUp') {
                    // Prevent the default behavior (open dropdown menu) and go up.
                    event.preventDefault();
                    store.move(store.up());
                  }
                }
              })
            }),
            placement: "bottom-end",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_dataviews_item_actions__WEBPACK_IMPORTED_MODULE_8__.ActionsDropdownMenuGroup, {
              actions: eligibleActions,
              item: item
            })
          })
        })]
      })]
    })
  });
}
function ViewList(props) {
  const {
    actions,
    data,
    fields,
    getItemId,
    isLoading,
    onChangeSelection,
    selection,
    view
  } = props;
  const baseId = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.useInstanceId)(ViewList, 'view-list');
  const selectedItem = data?.findLast(item => selection.includes(getItemId(item)));
  const mediaField = fields.find(field => field.id === view.layout?.mediaField);
  const primaryField = fields.find(field => field.id === view.layout?.primaryField);
  const viewFields = view.fields || fields.map(field => field.id);
  const visibleFields = fields.filter(field => viewFields.includes(field.id) && ![view.layout?.primaryField, view.layout?.mediaField].includes(field.id));
  const onSelect = item => onChangeSelection([getItemId(item)]);
  const getItemDomId = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useCallback)(item => item ? `${baseId}-${getItemId(item)}` : undefined, [baseId, getItemId]);
  const store = useCompositeStore({
    defaultActiveId: getItemDomId(selectedItem)
  });

  // Manage focused item, when the active one is removed from the list.
  const isActiveIdInList = store.useState(state => state.items.some(item => item.id === state.activeId));
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (!isActiveIdInList) {
      // Prefer going down, except if there is no item below (last item), then go up (last item in list).
      if (store.down()) {
        store.move(store.down());
      } else if (store.up()) {
        store.move(store.up());
      }
    }
  }, [isActiveIdInList]);
  const hasData = data?.length;
  if (!hasData) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_0__["default"])({
        'dataviews-loading': isLoading,
        'dataviews-no-results': !hasData && !isLoading
      }),
      children: !hasData && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
        children: isLoading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Spinner, {}) : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('No results')
      })
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Composite, {
    id: baseId,
    render: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("ul", {}),
    className: "dataviews-view-list",
    role: "grid",
    store: store,
    children: data.map(item => {
      const id = getItemDomId(item);
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ListItem, {
        id: id,
        actions: actions,
        item: item,
        isSelected: item === selectedItem,
        onSelect: onSelect,
        mediaField: mediaField,
        primaryField: primaryField,
        store: store,
        visibleFields: visibleFields
      }, id);
    })
  });
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/dataviews-layouts/table/column-header-menu.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/dataviews-layouts/table/column-header-menu.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/funnel.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/arrow-left.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/arrow-right.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/unseen.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lock_unlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lock-unlock */ "./node_modules/@wordpress/dataviews/build-module/lock-unlock.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils */ "./node_modules/@wordpress/dataviews/build-module/utils.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants */ "./node_modules/@wordpress/dataviews/build-module/constants.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */





const {
  DropdownMenuV2: DropdownMenu,
  DropdownMenuGroupV2: DropdownMenuGroup,
  DropdownMenuItemV2: DropdownMenuItem,
  DropdownMenuRadioItemV2: DropdownMenuRadioItem,
  DropdownMenuItemLabelV2: DropdownMenuItemLabel,
  DropdownMenuSeparatorV2: DropdownMenuSeparator
} = (0,_lock_unlock__WEBPACK_IMPORTED_MODULE_4__.unlock)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.privateApis);
function WithDropDownMenuSeparators({
  children
}) {
  return _wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Children.toArray(children).filter(Boolean).map((child, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [i > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(DropdownMenuSeparator, {}), child]
  }, i));
}
const _HeaderMenu = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(function HeaderMenu({
  fieldId,
  view,
  fields,
  onChangeView,
  onHide,
  setOpenedFilter
}, ref) {
  const combinedField = view.layout?.combinedFields?.find(f => f.id === fieldId);
  const index = view.fields?.indexOf(fieldId);
  if (!!combinedField) {
    return combinedField.label;
  }
  const field = fields.find(f => f.id === fieldId);
  if (!field) {
    return null;
  }
  const isHidable = field.enableHiding !== false;
  const isSortable = field.enableSorting !== false;
  const isSorted = view.sort?.field === field.id;
  const operators = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.sanitizeOperators)(field);
  // Filter can be added:
  // 1. If the field is not already part of a view's filters.
  // 2. If the field meets the type and operator requirements.
  // 3. If it's not primary. If it is, it should be already visible.
  const canAddFilter = !view.filters?.some(_filter => field.id === _filter.field) && !!field.elements?.length && !!operators.length && !field.filterBy?.isPrimary;
  if (!isSortable && !isHidable && !canAddFilter) {
    return field.label;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(DropdownMenu, {
    align: "start",
    trigger: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      size: "compact",
      className: "dataviews-view-table-header-button",
      ref: ref,
      variant: "tertiary",
      children: [field.label, view.sort && isSorted && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
        "aria-hidden": "true",
        children: _constants__WEBPACK_IMPORTED_MODULE_6__.sortArrows[view.sort.direction]
      })]
    }),
    style: {
      minWidth: '240px'
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(WithDropDownMenuSeparators, {
      children: [isSortable && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(DropdownMenuGroup, {
        children: _constants__WEBPACK_IMPORTED_MODULE_6__.SORTING_DIRECTIONS.map(direction => {
          const isChecked = view.sort && isSorted && view.sort.direction === direction;
          const value = `${field.id}-${direction}`;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(DropdownMenuRadioItem, {
            // All sorting radio items share the same name, so that
            // selecting a sorting option automatically deselects the
            // previously selected one, even if it is displayed in
            // another submenu. The field and direction are passed via
            // the `value` prop.
            name: "view-table-sorting",
            value: value,
            checked: isChecked,
            onChange: () => {
              onChangeView({
                ...view,
                sort: {
                  field: field.id,
                  direction
                }
              });
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(DropdownMenuItemLabel, {
              children: _constants__WEBPACK_IMPORTED_MODULE_6__.sortLabels[direction]
            })
          }, value);
        })
      }), canAddFilter && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(DropdownMenuGroup, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(DropdownMenuItem, {
          prefix: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {
            icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__["default"]
          }),
          onClick: () => {
            setOpenedFilter(field.id);
            onChangeView({
              ...view,
              page: 1,
              filters: [...(view.filters || []), {
                field: field.id,
                value: undefined,
                operator: operators[0]
              }]
            });
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(DropdownMenuItemLabel, {
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add filter')
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(DropdownMenuGroup, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(DropdownMenuItem, {
          prefix: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {
            icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__["default"]
          }),
          disabled: index < 1,
          onClick: () => {
            var _view$fields$slice;
            if (!view.fields || index < 1) {
              return;
            }
            onChangeView({
              ...view,
              fields: [...((_view$fields$slice = view.fields.slice(0, index - 1)) !== null && _view$fields$slice !== void 0 ? _view$fields$slice : []), field.id, view.fields[index - 1], ...view.fields.slice(index + 1)]
            });
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(DropdownMenuItemLabel, {
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Move left')
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(DropdownMenuItem, {
          prefix: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {
            icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__["default"]
          }),
          disabled: !view.fields || index >= view.fields.length - 1,
          onClick: () => {
            var _view$fields$slice2;
            if (!view.fields || index >= view.fields.length - 1) {
              return;
            }
            onChangeView({
              ...view,
              fields: [...((_view$fields$slice2 = view.fields.slice(0, index)) !== null && _view$fields$slice2 !== void 0 ? _view$fields$slice2 : []), view.fields[index + 1], field.id, ...view.fields.slice(index + 2)]
            });
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(DropdownMenuItemLabel, {
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Move right')
          })
        }), isHidable && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(DropdownMenuItem, {
          prefix: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {
            icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__["default"]
          }),
          onClick: () => {
            const viewFields = view.fields || fields.map(f => f.id);
            onHide(field);
            onChangeView({
              ...view,
              fields: viewFields.filter(id => id !== field.id)
            });
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(DropdownMenuItemLabel, {
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hide column')
          })
        })]
      })]
    })
  });
});

// @ts-expect-error Lift the `Item` type argument through the forwardRef.
const ColumnHeaderMenu = _HeaderMenu;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColumnHeaderMenu);
//# sourceMappingURL=column-header-menu.js.map

/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/dataviews-layouts/table/index.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/dataviews-layouts/table/index.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_dataviews_selection_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/dataviews-selection-checkbox */ "./node_modules/@wordpress/dataviews/build-module/components/dataviews-selection-checkbox/index.js");
/* harmony import */ var _components_dataviews_item_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/dataviews-item-actions */ "./node_modules/@wordpress/dataviews/build-module/components/dataviews-item-actions/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants */ "./node_modules/@wordpress/dataviews/build-module/constants.js");
/* harmony import */ var _components_dataviews_bulk_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/dataviews-bulk-actions */ "./node_modules/@wordpress/dataviews/build-module/components/dataviews-bulk-actions/index.js");
/* harmony import */ var _column_header_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./column-header-menu */ "./node_modules/@wordpress/dataviews/build-module/dataviews-layouts/table/column-header-menu.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */








function BulkSelectionCheckbox({
  selection,
  onChangeSelection,
  data,
  actions,
  getItemId
}) {
  const selectableItems = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
    return data.filter(item => {
      return actions.some(action => action.supportsBulk && (!action.isEligible || action.isEligible(item)));
    });
  }, [data, actions]);
  const selectedItems = data.filter(item => selection.includes(getItemId(item)) && selectableItems.includes(item));
  const areAllSelected = selectedItems.length === selectableItems.length;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CheckboxControl, {
    className: "dataviews-view-table-selection-checkbox",
    __nextHasNoMarginBottom: true,
    checked: areAllSelected,
    indeterminate: !areAllSelected && !!selectedItems.length,
    onChange: () => {
      if (areAllSelected) {
        onChangeSelection([]);
      } else {
        onChangeSelection(selectableItems.map(item => getItemId(item)));
      }
    },
    "aria-label": areAllSelected ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Deselect all') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select all')
  });
}
function TableColumn({
  column,
  fields,
  view,
  ...props
}) {
  const field = fields.find(f => f.id === column);
  if (!!field) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(TableColumnField, {
      ...props,
      field: field
    });
  }
  const combinedField = view.layout?.combinedFields?.find(f => f.id === column);
  if (!!combinedField) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(TableColumnCombined, {
      ...props,
      fields: fields,
      view: view,
      field: combinedField
    });
  }
  return null;
}
function TableColumnField({
  primaryField,
  item,
  field
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_0__["default"])('dataviews-view-table__cell-content-wrapper', {
      'dataviews-view-table__primary-field': primaryField?.id === field.id
    }),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(field.render, {
      item
    })
  });
}
function TableColumnCombined({
  field,
  ...props
}) {
  const children = field.children.map(child => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(TableColumn, {
    ...props,
    column: child
  }, child));
  if (field.direction === 'horizontal') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalHStack, {
      spacing: 3,
      children: children
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalVStack, {
    spacing: 0,
    children: children
  });
}
function TableRow({
  hasBulkActions,
  item,
  actions,
  fields,
  id,
  view,
  primaryField,
  selection,
  getItemId,
  onChangeSelection
}) {
  const hasPossibleBulkAction = (0,_components_dataviews_bulk_actions__WEBPACK_IMPORTED_MODULE_5__.useHasAPossibleBulkAction)(actions, item);
  const isSelected = hasPossibleBulkAction && selection.includes(id);
  const [isHovered, setIsHovered] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Will be set to true if `onTouchStart` fires. This happens before
  // `onClick` and can be used to exclude touchscreen devices from certain
  // behaviours.
  const isTouchDevice = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useRef)(false);
  const columns = view.fields || fields.map(f => f.id);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_0__["default"])('dataviews-view-table__row', {
      'is-selected': hasPossibleBulkAction && isSelected,
      'is-hovered': isHovered,
      'has-bulk-actions': hasPossibleBulkAction
    }),
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onTouchStart: () => {
      isTouchDevice.current = true;
    },
    onClick: () => {
      if (!hasPossibleBulkAction) {
        return;
      }
      if (!isTouchDevice.current && document.getSelection()?.type !== 'Range') {
        onChangeSelection(selection.includes(id) ? selection.filter(itemId => id !== itemId) : [id]);
      }
    },
    children: [hasBulkActions && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
      className: "dataviews-view-table__checkbox-column",
      style: {
        width: '1%'
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "dataviews-view-table__cell-content-wrapper",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_dataviews_selection_checkbox__WEBPACK_IMPORTED_MODULE_6__["default"], {
          item: item,
          selection: selection,
          onChangeSelection: onChangeSelection,
          getItemId: getItemId,
          primaryField: primaryField,
          disabled: !hasPossibleBulkAction
        })
      })
    }), columns.map(column => {
      var _view$layout$styles$c;
      // Explicits picks the supported styles.
      const {
        width,
        maxWidth,
        minWidth
      } = (_view$layout$styles$c = view.layout?.styles?.[column]) !== null && _view$layout$styles$c !== void 0 ? _view$layout$styles$c : {};
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
        style: {
          width,
          maxWidth,
          minWidth
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(TableColumn, {
          primaryField: primaryField,
          fields: fields,
          item: item,
          column: column,
          view: view
        })
      }, column);
    }), !!actions?.length &&
    /*#__PURE__*/
    // Disable reason: we are not making the element interactive,
    // but preventing any click events from bubbling up to the
    // table row. This allows us to add a click handler to the row
    // itself (to toggle row selection) without erroneously
    // intercepting click events from ItemActions.
    /* eslint-disable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events */
    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
      className: "dataviews-view-table__actions-column",
      onClick: e => e.stopPropagation(),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_dataviews_item_actions__WEBPACK_IMPORTED_MODULE_7__["default"], {
        item: item,
        actions: actions
      })
    })
    /* eslint-enable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events */]
  });
}
function ViewTable({
  actions,
  data,
  fields,
  getItemId,
  isLoading = false,
  onChangeView,
  onChangeSelection,
  selection,
  setOpenedFilter,
  view
}) {
  const headerMenuRefs = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useRef)(new Map());
  const headerMenuToFocusRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useRef)();
  const [nextHeaderMenuToFocus, setNextHeaderMenuToFocus] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)();
  const hasBulkActions = (0,_components_dataviews_bulk_actions__WEBPACK_IMPORTED_MODULE_5__.useSomeItemHasAPossibleBulkAction)(actions, data);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (headerMenuToFocusRef.current) {
      headerMenuToFocusRef.current.focus();
      headerMenuToFocusRef.current = undefined;
    }
  });
  const tableNoticeId = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useId)();
  if (nextHeaderMenuToFocus) {
    // If we need to force focus, we short-circuit rendering here
    // to prevent any additional work while we handle that.
    // Clearing out the focus directive is necessary to make sure
    // future renders don't cause unexpected focus jumps.
    headerMenuToFocusRef.current = nextHeaderMenuToFocus;
    setNextHeaderMenuToFocus(undefined);
    return;
  }
  const onHide = field => {
    const hidden = headerMenuRefs.current.get(field.id);
    const fallback = hidden ? headerMenuRefs.current.get(hidden.fallback) : undefined;
    setNextHeaderMenuToFocus(fallback?.node);
  };
  const columns = view.fields || fields.map(f => f.id);
  const hasData = !!data?.length;
  const primaryField = fields.find(field => field.id === view.layout?.primaryField);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("table", {
      className: "dataviews-view-table",
      "aria-busy": isLoading,
      "aria-describedby": tableNoticeId,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("thead", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
          className: "dataviews-view-table__row",
          children: [hasBulkActions && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
            className: "dataviews-view-table__checkbox-column",
            style: {
              width: '1%'
            },
            scope: "col",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(BulkSelectionCheckbox, {
              selection: selection,
              onChangeSelection: onChangeSelection,
              data: data,
              actions: actions,
              getItemId: getItemId
            })
          }), columns.map((column, index) => {
            var _view$layout$styles$c2;
            // Explicits picks the supported styles.
            const {
              width,
              maxWidth,
              minWidth
            } = (_view$layout$styles$c2 = view.layout?.styles?.[column]) !== null && _view$layout$styles$c2 !== void 0 ? _view$layout$styles$c2 : {};
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
              style: {
                width,
                maxWidth,
                minWidth
              },
              "aria-sort": view.sort?.field === column ? _constants__WEBPACK_IMPORTED_MODULE_8__.sortValues[view.sort.direction] : undefined,
              scope: "col",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_column_header_menu__WEBPACK_IMPORTED_MODULE_9__["default"], {
                ref: node => {
                  if (node) {
                    headerMenuRefs.current.set(column, {
                      node,
                      fallback: columns[index > 0 ? index - 1 : 1]
                    });
                  } else {
                    headerMenuRefs.current.delete(column);
                  }
                },
                fieldId: column,
                view: view,
                fields: fields,
                onChangeView: onChangeView,
                onHide: onHide,
                setOpenedFilter: setOpenedFilter
              })
            }, column);
          }), !!actions?.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
            className: "dataviews-view-table__actions-column",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              className: "dataviews-view-table-header",
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Actions')
            })
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("tbody", {
        children: hasData && data.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(TableRow, {
          item: item,
          hasBulkActions: hasBulkActions,
          actions: actions,
          fields: fields,
          id: getItemId(item) || index.toString(),
          view: view,
          primaryField: primaryField,
          selection: selection,
          getItemId: getItemId,
          onChangeSelection: onChangeSelection
        }, getItemId(item)))
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_0__["default"])({
        'dataviews-loading': isLoading,
        'dataviews-no-results': !hasData && !isLoading
      }),
      id: tableNoticeId,
      children: !hasData && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
        children: isLoading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Spinner, {}) : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('No results')
      })
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ViewTable);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/field-types/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/field-types/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getFieldTypeDefinition)
/* harmony export */ });
/* harmony import */ var _integer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./integer */ "./node_modules/@wordpress/dataviews/build-module/field-types/integer.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text */ "./node_modules/@wordpress/dataviews/build-module/field-types/text.js");
/**
 * Internal dependencies
 */




/**
 *
 * @param {FieldType} type The field type definition to get.
 *
 * @return A field type definition.
 */
function getFieldTypeDefinition(type) {
  if ('integer' === type) {
    return _integer__WEBPACK_IMPORTED_MODULE_0__["default"];
  }
  if ('text' === type) {
    return _text__WEBPACK_IMPORTED_MODULE_1__["default"];
  }
  return {
    sort: (a, b, direction) => {
      if (typeof a === 'number' && typeof b === 'number') {
        return direction === 'asc' ? a - b : b - a;
      }
      return direction === 'asc' ? a.localeCompare(b) : b.localeCompare(a);
    },
    isValid: (value, context) => {
      if (context?.elements) {
        const validValues = context?.elements?.map(f => f.value);
        if (!validValues.includes(value)) {
          return false;
        }
      }
      return true;
    },
    Edit: () => null
  };
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/field-types/integer.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/field-types/integer.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */

function sort(a, b, direction) {
  return direction === 'asc' ? a - b : b - a;
}
function isValid(value, context) {
  // TODO: this implicitely means the value is required.
  if (value === '') {
    return false;
  }
  if (!Number.isInteger(Number(value))) {
    return false;
  }
  if (context?.elements) {
    const validValues = context?.elements.map(f => f.value);
    if (!validValues.includes(Number(value))) {
      return false;
    }
  }
  return true;
}
function Edit({
  data,
  field,
  onChange,
  hideLabelFromVision
}) {
  var _field$getValue;
  const {
    id,
    label,
    description
  } = field;
  const value = (_field$getValue = field.getValue({
    item: data
  })) !== null && _field$getValue !== void 0 ? _field$getValue : '';
  const onChangeControl = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(newValue => onChange(prevItem => ({
    ...prevItem,
    [id]: newValue
  })), [id, onChange]);
  if (field.elements) {
    const elements = [
    /*
     * Value can be undefined when:
     *
     * - the field is not required
     * - in bulk editing
     *
     */
    {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select item'),
      value: ''
    }, ...field.elements];
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
      label: label,
      value: value,
      options: elements,
      onChange: onChangeControl,
      __next40pxDefaultSize: true,
      __nextHasNoMarginBottom: true,
      hideLabelFromVision: hideLabelFromVision
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalNumberControl, {
    label: label,
    help: description,
    value: value,
    onChange: onChangeControl,
    __next40pxDefaultSize: true,
    hideLabelFromVision: hideLabelFromVision
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  sort,
  isValid,
  Edit
});
//# sourceMappingURL=integer.js.map

/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/field-types/text.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/field-types/text.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */

function sort(valueA, valueB, direction) {
  return direction === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
}
function isValid(value, context) {
  if (context?.elements) {
    const validValues = context?.elements?.map(f => f.value);
    if (!validValues.includes(value)) {
      return false;
    }
  }
  return true;
}
function Edit({
  data,
  field,
  onChange,
  hideLabelFromVision
}) {
  const {
    id,
    label,
    placeholder
  } = field;
  const value = field.getValue({
    item: data
  });
  const onChangeControl = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(newValue => onChange(prevItem => ({
    ...prevItem,
    [id]: newValue
  })), [id, onChange]);
  if (field.elements) {
    const elements = [
    /*
     * Value can be undefined when:
     *
     * - the field is not required
     * - in bulk editing
     *
     */
    {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select item'),
      value: ''
    }, ...field.elements];
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
      label: label,
      value: value,
      options: elements,
      onChange: onChangeControl,
      __next40pxDefaultSize: true,
      __nextHasNoMarginBottom: true,
      hideLabelFromVision: hideLabelFromVision
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
    label: label,
    placeholder: placeholder,
    value: value !== null && value !== void 0 ? value : '',
    onChange: onChangeControl,
    __next40pxDefaultSize: true,
    __nextHasNoMarginBottom: true,
    hideLabelFromVision: hideLabelFromVision
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  sort,
  isValid,
  Edit
});
//# sourceMappingURL=text.js.map

/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/filter-and-sort-data-view.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/filter-and-sort-data-view.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   filterSortAndPaginate: () => (/* binding */ filterSortAndPaginate)
/* harmony export */ });
/* harmony import */ var remove_accents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! remove-accents */ "./node_modules/remove-accents/index.js");
/* harmony import */ var remove_accents__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(remove_accents__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@wordpress/dataviews/build-module/constants.js");
/* harmony import */ var _normalize_fields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./normalize-fields */ "./node_modules/@wordpress/dataviews/build-module/normalize-fields.js");
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


function normalizeSearchInput(input = '') {
  return remove_accents__WEBPACK_IMPORTED_MODULE_0___default()(input.trim().toLowerCase());
}
const EMPTY_ARRAY = [];

/**
 * Applies the filtering, sorting and pagination to the raw data based on the view configuration.
 *
 * @param data   Raw data.
 * @param view   View config.
 * @param fields Fields config.
 *
 * @return Filtered, sorted and paginated data.
 */
function filterSortAndPaginate(data, view, fields) {
  if (!data) {
    return {
      data: EMPTY_ARRAY,
      paginationInfo: {
        totalItems: 0,
        totalPages: 0
      }
    };
  }
  const _fields = (0,_normalize_fields__WEBPACK_IMPORTED_MODULE_1__.normalizeFields)(fields);
  let filteredData = [...data];
  // Handle global search.
  if (view.search) {
    const normalizedSearch = normalizeSearchInput(view.search);
    filteredData = filteredData.filter(item => {
      return _fields.filter(field => field.enableGlobalSearch).map(field => {
        return normalizeSearchInput(field.getValue({
          item
        }));
      }).some(field => field.includes(normalizedSearch));
    });
  }
  if (view.filters && view.filters?.length > 0) {
    view.filters.forEach(filter => {
      const field = _fields.find(_field => _field.id === filter.field);
      if (field) {
        if (filter.operator === _constants__WEBPACK_IMPORTED_MODULE_2__.OPERATOR_IS_ANY && filter?.value?.length > 0) {
          filteredData = filteredData.filter(item => {
            const fieldValue = field.getValue({
              item
            });
            if (Array.isArray(fieldValue)) {
              return filter.value.some(filterValue => fieldValue.includes(filterValue));
            } else if (typeof fieldValue === 'string') {
              return filter.value.includes(fieldValue);
            }
            return false;
          });
        } else if (filter.operator === _constants__WEBPACK_IMPORTED_MODULE_2__.OPERATOR_IS_NONE && filter?.value?.length > 0) {
          filteredData = filteredData.filter(item => {
            const fieldValue = field.getValue({
              item
            });
            if (Array.isArray(fieldValue)) {
              return !filter.value.some(filterValue => fieldValue.includes(filterValue));
            } else if (typeof fieldValue === 'string') {
              return !filter.value.includes(fieldValue);
            }
            return false;
          });
        } else if (filter.operator === _constants__WEBPACK_IMPORTED_MODULE_2__.OPERATOR_IS_ALL && filter?.value?.length > 0) {
          filteredData = filteredData.filter(item => {
            return filter.value.every(value => {
              return field.getValue({
                item
              })?.includes(value);
            });
          });
        } else if (filter.operator === _constants__WEBPACK_IMPORTED_MODULE_2__.OPERATOR_IS_NOT_ALL && filter?.value?.length > 0) {
          filteredData = filteredData.filter(item => {
            return filter.value.every(value => {
              return !field.getValue({
                item
              })?.includes(value);
            });
          });
        } else if (filter.operator === _constants__WEBPACK_IMPORTED_MODULE_2__.OPERATOR_IS) {
          filteredData = filteredData.filter(item => {
            return filter.value === field.getValue({
              item
            });
          });
        } else if (filter.operator === _constants__WEBPACK_IMPORTED_MODULE_2__.OPERATOR_IS_NOT) {
          filteredData = filteredData.filter(item => {
            return filter.value !== field.getValue({
              item
            });
          });
        }
      }
    });
  }

  // Handle sorting.
  if (view.sort) {
    const fieldId = view.sort.field;
    const fieldToSort = _fields.find(field => {
      return field.id === fieldId;
    });
    if (fieldToSort) {
      filteredData.sort((a, b) => {
        var _view$sort$direction;
        return fieldToSort.sort(a, b, (_view$sort$direction = view.sort?.direction) !== null && _view$sort$direction !== void 0 ? _view$sort$direction : 'desc');
      });
    }
  }

  // Handle pagination.
  let totalItems = filteredData.length;
  let totalPages = 1;
  if (view.page !== undefined && view.perPage !== undefined) {
    const start = (view.page - 1) * view.perPage;
    totalItems = filteredData?.length || 0;
    totalPages = Math.ceil(totalItems / view.perPage);
    filteredData = filteredData?.slice(start, start + view.perPage);
  }
  return {
    data: filteredData,
    paginationInfo: {
      totalItems,
      totalPages
    }
  };
}
//# sourceMappingURL=filter-and-sort-data-view.js.map

/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/lock-unlock.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/lock-unlock.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lock: () => (/* binding */ lock),
/* harmony export */   unlock: () => (/* binding */ unlock)
/* harmony export */ });
/* harmony import */ var _wordpress_private_apis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/private-apis */ "@wordpress/private-apis");
/* harmony import */ var _wordpress_private_apis__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_private_apis__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

const {
  lock,
  unlock
} = (0,_wordpress_private_apis__WEBPACK_IMPORTED_MODULE_0__.__dangerousOptInToUnstableAPIsOnlyForCoreModules)('I acknowledge private features are not for use in themes or plugins and doing so will break in the next version of WordPress.', '@wordpress/dataviews');
//# sourceMappingURL=lock-unlock.js.map

/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/normalize-fields.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/normalize-fields.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   normalizeFields: () => (/* binding */ normalizeFields)
/* harmony export */ });
/* harmony import */ var _field_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./field-types */ "./node_modules/@wordpress/dataviews/build-module/field-types/index.js");
/**
 * Internal dependencies
 */

/**
 * Apply default values and normalize the fields config.
 *
 * @param fields Fields config.
 * @return Normalized fields config.
 */
function normalizeFields(fields) {
  return fields.map(field => {
    var _field$sort, _field$isValid;
    const fieldTypeDefinition = (0,_field_types__WEBPACK_IMPORTED_MODULE_0__["default"])(field.type);
    const getValue = field.getValue || (({
      item
    }) => item[field.id]);
    const sort = (_field$sort = field.sort) !== null && _field$sort !== void 0 ? _field$sort : function sort(a, b, direction) {
      return fieldTypeDefinition.sort(getValue({
        item: a
      }), getValue({
        item: b
      }), direction);
    };
    const isValid = (_field$isValid = field.isValid) !== null && _field$isValid !== void 0 ? _field$isValid : function isValid(item, context) {
      return fieldTypeDefinition.isValid(getValue({
        item
      }), context);
    };
    const Edit = field.Edit || fieldTypeDefinition.Edit;
    const renderFromElements = ({
      item
    }) => {
      const value = getValue({
        item
      });
      const label = field?.elements?.find(element => {
        // Intentionally using == here to allow for type coercion.
        // eslint-disable-next-line eqeqeq
        return element.value == value;
      })?.label;
      return label || value;
    };
    const render = field.render || (field.elements ? renderFromElements : getValue);
    return {
      ...field,
      label: field.label || field.id,
      getValue,
      render,
      sort,
      isValid,
      Edit
    };
  });
}
//# sourceMappingURL=normalize-fields.js.map

/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/utils.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/utils.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sanitizeOperators: () => (/* binding */ sanitizeOperators)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./node_modules/@wordpress/dataviews/build-module/constants.js");
/**
 * Internal dependencies
 */

function sanitizeOperators(field) {
  let operators = field.filterBy?.operators;

  // Assign default values.
  if (!operators || !Array.isArray(operators)) {
    operators = [_constants__WEBPACK_IMPORTED_MODULE_0__.OPERATOR_IS_ANY, _constants__WEBPACK_IMPORTED_MODULE_0__.OPERATOR_IS_NONE];
  }

  // Make sure only valid operators are used.
  operators = operators.filter(operator => _constants__WEBPACK_IMPORTED_MODULE_0__.ALL_OPERATORS.includes(operator));

  // Do not allow mixing single & multiselection operators.
  // Remove multiselection operators if any of the single selection ones is present.
  if (operators.includes(_constants__WEBPACK_IMPORTED_MODULE_0__.OPERATOR_IS) || operators.includes(_constants__WEBPACK_IMPORTED_MODULE_0__.OPERATOR_IS_NOT)) {
    operators = operators.filter(operator => [_constants__WEBPACK_IMPORTED_MODULE_0__.OPERATOR_IS, _constants__WEBPACK_IMPORTED_MODULE_0__.OPERATOR_IS_NOT].includes(operator));
  }
  return operators;
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/arrow-down.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/arrow-down.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const arrowDown = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "m16.5 13.5-3.7 3.7V4h-1.5v13.2l-3.8-3.7-1 1 5.5 5.6 5.5-5.6z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrowDown);
//# sourceMappingURL=arrow-down.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/arrow-left.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/arrow-left.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const arrowLeft = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "M20 11.2H6.8l3.7-3.7-1-1L3.9 12l5.6 5.5 1-1-3.7-3.7H20z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrowLeft);
//# sourceMappingURL=arrow-left.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/arrow-right.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/arrow-right.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const arrowRight = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "m14.5 6.5-1 1 3.7 3.7H4v1.6h13.2l-3.7 3.7 1 1 5.6-5.5z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrowRight);
//# sourceMappingURL=arrow-right.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/arrow-up.js":
/*!************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/arrow-up.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const arrowUp = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "M12 3.9 6.5 9.5l1 1 3.8-3.7V20h1.5V6.8l3.7 3.7 1-1z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrowUp);
//# sourceMappingURL=arrow-up.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/block-table.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/block-table.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const blockTable = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 4.5h14c.3 0 .5.2.5.5v3.5h-15V5c0-.3.2-.5.5-.5zm8 5.5h6.5v3.5H13V10zm-1.5 3.5h-7V10h7v3.5zm-7 5.5v-4h7v4.5H5c-.3 0-.5-.2-.5-.5zm14.5.5h-6V15h6.5v4c0 .3-.2.5-.5.5z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (blockTable);
//# sourceMappingURL=block-table.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/category.js":
/*!************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/category.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const category = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "M6 5.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5zM4 6a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm11-.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5zM13 6a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2h-3a2 2 0 01-2-2V6zm5 8.5h-3a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5zM15 13a2 2 0 00-2 2v3a2 2 0 002 2h3a2 2 0 002-2v-3a2 2 0 00-2-2h-3zm-9 1.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5zM4 15a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2v-3z",
    fillRule: "evenodd",
    clipRule: "evenodd"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (category);
//# sourceMappingURL=category.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/check.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/check.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const check = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (check);
//# sourceMappingURL=check.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/close-small.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/close-small.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const closeSmall = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (closeSmall);
//# sourceMappingURL=close-small.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/cog.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/cog.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const cog = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    fillRule: "evenodd",
    d: "M10.289 4.836A1 1 0 0111.275 4h1.306a1 1 0 01.987.836l.244 1.466c.787.26 1.503.679 2.108 1.218l1.393-.522a1 1 0 011.216.437l.653 1.13a1 1 0 01-.23 1.273l-1.148.944a6.025 6.025 0 010 2.435l1.149.946a1 1 0 01.23 1.272l-.653 1.13a1 1 0 01-1.216.437l-1.394-.522c-.605.54-1.32.958-2.108 1.218l-.244 1.466a1 1 0 01-.987.836h-1.306a1 1 0 01-.986-.836l-.244-1.466a5.995 5.995 0 01-2.108-1.218l-1.394.522a1 1 0 01-1.217-.436l-.653-1.131a1 1 0 01.23-1.272l1.149-.946a6.026 6.026 0 010-2.435l-1.148-.944a1 1 0 01-.23-1.272l.653-1.131a1 1 0 011.217-.437l1.393.522a5.994 5.994 0 012.108-1.218l.244-1.466zM14.929 12a3 3 0 11-6 0 3 3 0 016 0z",
    clipRule: "evenodd"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cog);
//# sourceMappingURL=cog.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/format-list-bullets-rtl.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/format-list-bullets-rtl.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const formatListBulletsRTL = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "M4 8.8h8.9V7.2H4v1.6zm0 7h8.9v-1.5H4v1.5zM18 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatListBulletsRTL);
//# sourceMappingURL=format-list-bullets-rtl.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/format-list-bullets.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/format-list-bullets.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const formatListBullets = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "M11.1 15.8H20v-1.5h-8.9v1.5zm0-8.6v1.5H20V7.2h-8.9zM6 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatListBullets);
//# sourceMappingURL=format-list-bullets.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/funnel.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/funnel.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const funnel = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "M10 17.5H14V16H10V17.5ZM6 6V7.5H18V6H6ZM8 12.5H16V11H8V12.5Z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (funnel);
//# sourceMappingURL=funnel.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/more-vertical.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/more-vertical.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const moreVertical = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "M13 19h-2v-2h2v2zm0-6h-2v-2h2v2zm0-6h-2V5h2v2z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (moreVertical);
//# sourceMappingURL=more-vertical.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/next.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/next.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const next = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "M6.6 6L5.4 7l4.5 5-4.5 5 1.1 1 5.5-6-5.4-6zm6 0l-1.1 1 4.5 5-4.5 5 1.1 1 5.5-6-5.5-6z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next);
//# sourceMappingURL=next.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/plus.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/plus.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const plus = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "M11 12.5V17.5H12.5V12.5H17.5V11H12.5V6H11V11H6V12.5H11Z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (plus);
//# sourceMappingURL=plus.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/previous.js":
/*!************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/previous.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const previous = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "M11.6 7l-1.1-1L5 12l5.5 6 1.1-1L7 12l4.6-5zm6 0l-1.1-1-5.5 6 5.5 6 1.1-1-4.6-5 4.6-5z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (previous);
//# sourceMappingURL=previous.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/reset.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/reset.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const reset = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "M7 11.5h10V13H7z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reset);
//# sourceMappingURL=reset.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/search.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/search.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const search = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "M13 5c-3.3 0-6 2.7-6 6 0 1.4.5 2.7 1.3 3.7l-3.8 3.8 1.1 1.1 3.8-3.8c1 .8 2.3 1.3 3.7 1.3 3.3 0 6-2.7 6-6S16.3 5 13 5zm0 10.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (search);
//# sourceMappingURL=search.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/seen.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/seen.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const seen = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "M3.99961 13C4.67043 13.3354 4.6703 13.3357 4.67017 13.3359L4.67298 13.3305C4.67621 13.3242 4.68184 13.3135 4.68988 13.2985C4.70595 13.2686 4.7316 13.2218 4.76695 13.1608C4.8377 13.0385 4.94692 12.8592 5.09541 12.6419C5.39312 12.2062 5.84436 11.624 6.45435 11.0431C7.67308 9.88241 9.49719 8.75 11.9996 8.75C14.502 8.75 16.3261 9.88241 17.5449 11.0431C18.1549 11.624 18.6061 12.2062 18.9038 12.6419C19.0523 12.8592 19.1615 13.0385 19.2323 13.1608C19.2676 13.2218 19.2933 13.2686 19.3093 13.2985C19.3174 13.3135 19.323 13.3242 19.3262 13.3305L19.3291 13.3359C19.3289 13.3357 19.3288 13.3354 19.9996 13C20.6704 12.6646 20.6703 12.6643 20.6701 12.664L20.6697 12.6632L20.6688 12.6614L20.6662 12.6563L20.6583 12.6408C20.6517 12.6282 20.6427 12.6108 20.631 12.5892C20.6078 12.5459 20.5744 12.4852 20.5306 12.4096C20.4432 12.2584 20.3141 12.0471 20.1423 11.7956C19.7994 11.2938 19.2819 10.626 18.5794 9.9569C17.1731 8.61759 14.9972 7.25 11.9996 7.25C9.00203 7.25 6.82614 8.61759 5.41987 9.9569C4.71736 10.626 4.19984 11.2938 3.85694 11.7956C3.68511 12.0471 3.55605 12.2584 3.4686 12.4096C3.42484 12.4852 3.39142 12.5459 3.36818 12.5892C3.35656 12.6108 3.34748 12.6282 3.34092 12.6408L3.33297 12.6563L3.33041 12.6614L3.32948 12.6632L3.32911 12.664C3.32894 12.6643 3.32879 12.6646 3.99961 13ZM11.9996 16C13.9326 16 15.4996 14.433 15.4996 12.5C15.4996 10.567 13.9326 9 11.9996 9C10.0666 9 8.49961 10.567 8.49961 12.5C8.49961 14.433 10.0666 16 11.9996 16Z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (seen);
//# sourceMappingURL=seen.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/unseen.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/unseen.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const unseen = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "M4.67 10.664s-2.09 1.11-2.917 1.582l.494.87 1.608-.914.002.002c.343.502.86 1.17 1.563 1.84.348.33.742.663 1.185.976L5.57 16.744l.858.515 1.02-1.701a9.1 9.1 0 0 0 4.051 1.18V19h1v-2.263a9.1 9.1 0 0 0 4.05-1.18l1.021 1.7.858-.514-1.034-1.723c.442-.313.837-.646 1.184-.977.703-.669 1.22-1.337 1.563-1.839l.002-.003 1.61.914.493-.87c-1.75-.994-2.918-1.58-2.918-1.58l-.003.005a8.29 8.29 0 0 1-.422.689 10.097 10.097 0 0 1-1.36 1.598c-1.218 1.16-3.042 2.293-5.544 2.293-2.503 0-4.327-1.132-5.546-2.293a10.099 10.099 0 0 1-1.359-1.599 8.267 8.267 0 0 1-.422-.689l-.003-.005Z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (unseen);
//# sourceMappingURL=unseen.js.map

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_dataviews__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/dataviews */ "./node_modules/@wordpress/dataviews/build-module/filter-and-sort-data-view.js");
/* harmony import */ var _wordpress_dataviews__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/dataviews */ "./node_modules/@wordpress/dataviews/build-module/components/dataviews/index.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data */ "./src/data.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);









const primaryField = "id";
const mediaField = "img_src";
const badgeFields = ["topics"];
const DEFAULT_LAYOUTS = {
  table: {
    layout: {
      primaryField
    }
  },
  grid: {
    layout: {
      primaryField,
      mediaField
      // badgeFields,
    }
  },
  list: {
    layout: {
      primaryField,
      mediaField
    }
  }
};
const FIELDS = [{
  label: "Image",
  id: "img_src",
  render: ({
    item
  }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
    alt: item.alt_description,
    src: item.urls.thumb
  }),
  enableSorting: false
}, {
  id: "id",
  label: "ID",
  enableGlobalSearch: true
}, {
  label: "Author",
  id: "author",
  getValue: ({
    item
  }) => `${item.user.first_name} ${item.user.last_name}`,
  render: ({
    item
  }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("a", {
    target: "_blank",
    href: item.user.url,
    children: [item.user.first_name, " ", item.user.last_name]
  }),
  enableGlobalSearch: true
}, {
  id: "alt_description",
  label: "Description",
  enableGlobalSearch: true
}, {
  id: "topics",
  label: "Topics",
  elements: _data__WEBPACK_IMPORTED_MODULE_5__.TOPICS,
  filterBy: {
    operators: ["isAny", "isNone", "isAll", "isNotAll"]
  },
  enableSorting: false
}, {
  id: "width",
  label: "Width",
  getValue: ({
    item
  }) => parseInt(item.width),
  enableSorting: true
}, {
  id: "height",
  label: "Height",
  getValue: ({
    item
  }) => parseInt(item.height),
  enableSorting: true
}];
const App = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.withNotices)(({
  noticeOperations,
  noticeUI
}) => {
  const {
    createNotice
  } = noticeOperations;
  const [isUploadingItems, setIsUploadingItems] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [view, setView] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)({
    type: "table",
    perPage: 10,
    layout: DEFAULT_LAYOUTS.table.layout,
    fields: ["img_src", "id", "alt_description", "author", "topics", "width", "height"]
  });
  const {
    data,
    paginationInfo
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return (0,_wordpress_dataviews__WEBPACK_IMPORTED_MODULE_7__.filterSortAndPaginate)(_data__WEBPACK_IMPORTED_MODULE_5__.PHOTOS, view, FIELDS);
  }, [_data__WEBPACK_IMPORTED_MODULE_5__.PHOTOS, view, FIELDS]);
  const onSuccessMediaUpload = ({
    title
  }) => {
    setIsUploadingItems(prevIsUploadingItems => prevIsUploadingItems.filter(slugLoading => slugLoading !== title));
    createNotice({
      status: "success",
      content: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(`${title}.jpg succesfully uploaded to Media Library!`),
      isDismissible: true
    });
  };
  const onErrorMediaUpload = error => {
    setIsUploadingItems([]);
    console.log(error);
    createNotice({
      status: "error",
      content: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("An error occurred!"),
      isDismissible: true
    });
  };
  const actions = [{
    id: "upload-media",
    label: "Upload Media",
    isPrimary: true,
    icon: "upload",
    supportsBulk: true,
    callback: images => {
      images.forEach(image => {
        setIsUploadingItems(prevIsUploadingItems => [...prevIsUploadingItems, image.slug]);
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.uploadToMediaLibrary)({
          image,
          onSuccessMediaUpload,
          onErrorMediaUpload
        });
      });
    }
  }, {
    id: "see-original",
    label: "See Original",
    callback: ([item]) => {
      const urlImage = item.urls.raw;
      window.open(urlImage, "_blank");
    }
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [!!isUploadingItems.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Spinner, {}), noticeUI, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_dataviews__WEBPACK_IMPORTED_MODULE_8__["default"], {
      data: data,
      fields: FIELDS,
      view: view,
      actions: actions,
      onChangeView: setView,
      defaultLayouts: DEFAULT_LAYOUTS,
      paginationInfo: paginationInfo
    })]
  });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CATEGORIES: () => (/* binding */ CATEGORIES),
/* harmony export */   PHOTOS: () => (/* binding */ PHOTOS),
/* harmony export */   TOPICS: () => (/* binding */ TOPICS)
/* harmony export */ });
/*
 * This dataset was created using https://unsplash.com/ API on August 2024 and manually tweaked after.
 */
const PHOTOS = [{
  id: "nwPxPBWY5JI",
  slug: "a-blue-bird-sitting-on-top-of-a-plant-covered-in-snow-nwPxPBWY5JI",
  width: 2818,
  color: "#c0c0d9",
  height: 4235,
  alt_description: "a blue bird sitting on top of a plant covered in snow",
  urls: {
    raw: "https://images.unsplash.com/photo-1710699915484-0b3541dc7265?ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1710699915484-0b3541dc7265?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=85",
    regular: "https://images.unsplash.com/photo-1710699915484-0b3541dc7265?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=80&w=1080",
    small: "https://images.unsplash.com/photo-1710699915484-0b3541dc7265?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=80&w=400",
    thumb: "https://images.unsplash.com/photo-1710699915484-0b3541dc7265?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=80&w=200",
    small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1710699915484-0b3541dc7265"
  },
  topics: ["animals"],
  user: {
    first_name: "Clayton",
    last_name: "Chase",
    url: "https://chasemade.com"
  }
}, {
  id: "tLRrSMCcdFQ",
  slug: "a-colorful-bird-perched-on-a-tree-branch-tLRrSMCcdFQ",
  width: 3368,
  color: "#26400c",
  height: 6000,
  alt_description: "A colorful bird perched on a tree branch",
  urls: {
    raw: "https://images.unsplash.com/photo-1723036123319-c47e12bb0f41?ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1723036123319-c47e12bb0f41?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=85",
    regular: "https://images.unsplash.com/photo-1723036123319-c47e12bb0f41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=80&w=1080",
    small: "https://images.unsplash.com/photo-1723036123319-c47e12bb0f41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=80&w=400",
    thumb: "https://images.unsplash.com/photo-1723036123319-c47e12bb0f41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=80&w=200",
    small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1723036123319-c47e12bb0f41"
  },
  topics: ["animals"],
  user: {
    first_name: "Michael",
    last_name: "van Gorkum",
    url: "https://michaelvg.dev"
  }
}, {
  id: "Uqi6geijgII",
  slug: "brown-crab-on-blue-textile-Uqi6geijgII",
  width: 3500,
  color: "#408ca6",
  height: 2333,
  alt_description: "brown crab on blue textile",
  urls: {
    raw: "https://images.unsplash.com/photo-1597261119513-ee51ac8e4f80?ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1597261119513-ee51ac8e4f80?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=85",
    regular: "https://images.unsplash.com/photo-1597261119513-ee51ac8e4f80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=80&w=1080",
    small: "https://images.unsplash.com/photo-1597261119513-ee51ac8e4f80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=80&w=400",
    thumb: "https://images.unsplash.com/photo-1597261119513-ee51ac8e4f80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=80&w=200",
    small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1597261119513-ee51ac8e4f80"
  },
  topics: ["animals"],
  user: {
    first_name: "Joshua J.",
    last_name: "Cotten",
    url: "http://instagram.com/longhornjosh"
  }
}, {
  id: "E_lIE17suKg",
  slug: "adult-greyhound-on-forest-during-daytime-E_lIE17suKg",
  width: 4288,
  color: "#262626",
  height: 2848,
  alt_description: "adult greyhound on forest during daytime",
  urls: {
    raw: "https://images.unsplash.com/photo-1478254475213-0bffd484f46c?ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1478254475213-0bffd484f46c?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=85",
    regular: "https://images.unsplash.com/photo-1478254475213-0bffd484f46c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=80&w=1080",
    small: "https://images.unsplash.com/photo-1478254475213-0bffd484f46c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=80&w=400",
    thumb: "https://images.unsplash.com/photo-1478254475213-0bffd484f46c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=80&w=200",
    small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1478254475213-0bffd484f46c"
  },
  topics: ["animals"],
  user: {
    first_name: "Atanas",
    last_name: "Teodosiev",
    url: "http://atanasteodosiev.com"
  }
}, {
  id: "NKN25UfGfkQ",
  slug: "close-up-photo-of-black-and-white-siberian-husky-dog-NKN25UfGfkQ",
  width: 4000,
  color: "#a6a6a6",
  height: 6000,
  alt_description: "close up photo of black and white Siberian husky dog",
  urls: {
    raw: "https://images.unsplash.com/photo-1491604612772-6853927639ef?ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1491604612772-6853927639ef?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=85",
    regular: "https://images.unsplash.com/photo-1491604612772-6853927639ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=80&w=1080",
    small: "https://images.unsplash.com/photo-1491604612772-6853927639ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=80&w=400",
    thumb: "https://images.unsplash.com/photo-1491604612772-6853927639ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=80&w=200",
    small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1491604612772-6853927639ef"
  },
  topics: ["animals"],
  user: {
    first_name: "Kieran",
    last_name: "White",
    url: "http://x.com/KieranCWhite"
  }
}, {
  id: "E3AE_2KI0tM",
  slug: "short-coated-white-dog-E3AE_2KI0tM",
  width: 5361,
  color: "#0c260c",
  height: 3574,
  alt_description: "short-coated white dog",
  urls: {
    raw: "https://images.unsplash.com/photo-1492235276442-80d2360d7faa?ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1492235276442-80d2360d7faa?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=85",
    regular: "https://images.unsplash.com/photo-1492235276442-80d2360d7faa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=80&w=1080",
    small: "https://images.unsplash.com/photo-1492235276442-80d2360d7faa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=80&w=400",
    thumb: "https://images.unsplash.com/photo-1492235276442-80d2360d7faa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=80&w=200",
    small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1492235276442-80d2360d7faa"
  },
  topics: ["animals"],
  user: {
    first_name: "Mitchell",
    last_name: "Orr",
    url: "https://mitchorr.darkroom.tech/"
  }
}, {
  id: "5rT7w5CJxQU",
  slug: "herd-of-sheep-on-green-grass-field-during-daytime-5rT7w5CJxQU",
  width: 5472,
  color: "#f3f3f3",
  height: 3648,
  alt_description: "herd of sheep on green grass field during daytime",
  urls: {
    raw: "https://images.unsplash.com/photo-1614183653441-b8cd6d7c516d?ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1614183653441-b8cd6d7c516d?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=85",
    regular: "https://images.unsplash.com/photo-1614183653441-b8cd6d7c516d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=80&w=1080",
    small: "https://images.unsplash.com/photo-1614183653441-b8cd6d7c516d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=80&w=400",
    thumb: "https://images.unsplash.com/photo-1614183653441-b8cd6d7c516d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=80&w=200",
    small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1614183653441-b8cd6d7c516d"
  },
  topics: ["animals"],
  user: {
    first_name: "Jonathan",
    last_name: "Borba",
    url: "https://jonathanborba.46graus.com/"
  }
}, {
  id: "__bngifbHWI",
  slug: "brown-and-white-bird-on-tree-branch-__bngifbHWI",
  width: 3888,
  color: "#262626",
  height: 2592,
  alt_description: "brown and white bird on tree branch",
  urls: {
    raw: "https://images.unsplash.com/photo-1509201179970-dbabd9071455?ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1509201179970-dbabd9071455?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=85",
    regular: "https://images.unsplash.com/photo-1509201179970-dbabd9071455?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=80&w=1080",
    small: "https://images.unsplash.com/photo-1509201179970-dbabd9071455?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=80&w=400",
    thumb: "https://images.unsplash.com/photo-1509201179970-dbabd9071455?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=80&w=200",
    small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1509201179970-dbabd9071455"
  },
  topics: ["animals"],
  user: {
    first_name: "Dev",
    last_name: "Leigh",
    url: "http://www.dlmiles.com"
  }
}, {
  id: "kjvnrYpM8Xo",
  slug: "a-black-and-white-photo-of-a-jellyfish-kjvnrYpM8Xo",
  width: 3654,
  color: "#737373",
  height: 5481,
  alt_description: "A black and white photo of a jellyfish",
  urls: {
    raw: "https://images.unsplash.com/photo-1722682351245-09a9f7faeea4?ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1722682351245-09a9f7faeea4?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=85",
    regular: "https://images.unsplash.com/photo-1722682351245-09a9f7faeea4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=80&w=1080",
    small: "https://images.unsplash.com/photo-1722682351245-09a9f7faeea4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=80&w=400",
    thumb: "https://images.unsplash.com/photo-1722682351245-09a9f7faeea4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=80&w=200",
    small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1722682351245-09a9f7faeea4"
  },
  topics: ["animals"],
  user: {
    first_name: "Dev",
    last_name: "Leigh",
    url: "http://www.dlmiles.com"
  }
}, {
  id: "BG3wndmHzt4",
  slug: "a-large-group-of-fish-swimming-in-the-ocean-BG3wndmHzt4",
  width: 6240,
  color: "#0c408c",
  height: 4160,
  alt_description: "A large group of fish swimming in the ocean",
  urls: {
    raw: "https://images.unsplash.com/photo-1722508771124-fdea3f59c786?ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1722508771124-fdea3f59c786?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=85",
    regular: "https://images.unsplash.com/photo-1722508771124-fdea3f59c786?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=80&w=1080",
    small: "https://images.unsplash.com/photo-1722508771124-fdea3f59c786?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=80&w=400",
    thumb: "https://images.unsplash.com/photo-1722508771124-fdea3f59c786?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=80&w=200",
    small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1722508771124-fdea3f59c786"
  },
  topics: ["animals"],
  user: {
    first_name: "Dev",
    last_name: "Leigh",
    url: "http://www.dlmiles.com"
  }
}, {
  id: "95F81paVJhU",
  slug: "a-couple-of-elk-standing-on-top-of-a-lush-green-hillside-95F81paVJhU",
  width: 4672,
  color: "#597340",
  height: 7008,
  alt_description: "A couple of elk standing on top of a lush green hillside",
  urls: {
    raw: "https://images.unsplash.com/photo-1722959240956-7919319c8c69?ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1722959240956-7919319c8c69?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=85",
    regular: "https://images.unsplash.com/photo-1722959240956-7919319c8c69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=80&w=1080",
    small: "https://images.unsplash.com/photo-1722959240956-7919319c8c69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=80&w=400",
    thumb: "https://images.unsplash.com/photo-1722959240956-7919319c8c69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=80&w=200",
    small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1722959240956-7919319c8c69"
  },
  topics: ["animals", "nature", "wallpapers"],
  user: {
    first_name: "Luke",
    last_name: "Scarpino",
    url: "http://lukescarpino.com"
  }
}, {
  id: "B0vZS4k8584",
  slug: "a-brown-horse-standing-on-top-of-a-dry-grass-field-B0vZS4k8584",
  width: 5865,
  color: "#a68c73",
  height: 3910,
  alt_description: "A brown horse standing on top of a dry grass field",
  urls: {
    raw: "https://images.unsplash.com/photo-1722951712289-fbc8844b9e59?ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1722951712289-fbc8844b9e59?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=85",
    regular: "https://images.unsplash.com/photo-1722951712289-fbc8844b9e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=80&w=1080",
    small: "https://images.unsplash.com/photo-1722951712289-fbc8844b9e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=80&w=400",
    thumb: "https://images.unsplash.com/photo-1722951712289-fbc8844b9e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=80&w=200",
    small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1722951712289-fbc8844b9e59"
  },
  topics: ["animals", "travel", "nature"],
  user: {
    first_name: "Wolfgang",
    last_name: "Hasselmann",
    url: "https://www.youtube.com/@wolfgang_hasselmann/videos"
  }
}, {
  id: "XuC_jTWMZ5Q",
  slug: "an-elephant-with-tusks-standing-in-a-field-XuC_jTWMZ5Q",
  width: 6000,
  color: "#f3f3f3",
  height: 4000,
  alt_description: "An elephant with tusks standing in a field",
  urls: {
    raw: "https://images.unsplash.com/photo-1722951805884-efaaa44fe487?ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1722951805884-efaaa44fe487?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=85",
    regular: "https://images.unsplash.com/photo-1722951805884-efaaa44fe487?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=80&w=1080",
    small: "https://images.unsplash.com/photo-1722951805884-efaaa44fe487?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=80&w=400",
    thumb: "https://images.unsplash.com/photo-1722951805884-efaaa44fe487?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=80&w=200",
    small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1722951805884-efaaa44fe487"
  },
  topics: ["animals", "travel", "nature"],
  user: {
    first_name: "Wolfgang",
    last_name: "Hasselmann",
    url: "https://www.youtube.com/@wolfgang_hasselmann/videos"
  }
}, {
  id: "f8jNhevTgIg",
  slug: "a-deer-in-the-middle-of-a-field-of-tall-grass-f8jNhevTgIg",
  width: 4500,
  color: "#d9c08c",
  height: 2834,
  alt_description: "A deer in the middle of a field of tall grass",
  urls: {
    raw: "https://images.unsplash.com/photo-1722695036569-c3438ccc2d82?ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1722695036569-c3438ccc2d82?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=85",
    regular: "https://images.unsplash.com/photo-1722695036569-c3438ccc2d82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=80&w=1080",
    small: "https://images.unsplash.com/photo-1722695036569-c3438ccc2d82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=80&w=400",
    thumb: "https://images.unsplash.com/photo-1722695036569-c3438ccc2d82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=80&w=200",
    small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1722695036569-c3438ccc2d82"
  },
  topics: ["animals", "nature"],
  user: {
    first_name: "Bob",
    last_name: "Brewer",
    url: "https://www.flickr.com/photos/brewbottle/albums"
  }
}, {
  id: "rrJ1I223UVE",
  slug: "a-group-of-sea-lions-laying-on-top-of-each-other-rrJ1I223UVE",
  width: 4866,
  color: "#d9d9d9",
  height: 2929,
  alt_description: "A group of sea lions laying on top of each other",
  urls: {
    raw: "https://images.unsplash.com/photo-1722695452219-3be4de0c5891?ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1722695452219-3be4de0c5891?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=85",
    regular: "https://images.unsplash.com/photo-1722695452219-3be4de0c5891?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=80&w=1080",
    small: "https://images.unsplash.com/photo-1722695452219-3be4de0c5891?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=80&w=400",
    thumb: "https://images.unsplash.com/photo-1722695452219-3be4de0c5891?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=80&w=200",
    small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1722695452219-3be4de0c5891"
  },
  topics: ["animals", "nature"],
  user: {
    first_name: "Bob",
    last_name: "Brewer",
    url: "https://www.flickr.com/photos/brewbottle/albums"
  }
}, {
  id: "Q3W6D31yKLc",
  slug: "a-small-animal-sitting-on-top-of-a-rock-Q3W6D31yKLc",
  width: 4100,
  color: "#8c7359",
  height: 6150,
  alt_description: "A small animal sitting on top of a rock",
  urls: {
    raw: "https://images.unsplash.com/photo-1722820754434-f61166c3d0c7?ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1722820754434-f61166c3d0c7?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=85",
    regular: "https://images.unsplash.com/photo-1722820754434-f61166c3d0c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=80&w=1080",
    small: "https://images.unsplash.com/photo-1722820754434-f61166c3d0c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=80&w=400",
    thumb: "https://images.unsplash.com/photo-1722820754434-f61166c3d0c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=80&w=200",
    small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1722820754434-f61166c3d0c7"
  },
  topics: ["animals", "nature"],
  user: {
    first_name: "Brandon",
    last_name: "Stoll",
    url: "https://brandonstoll.myportfolio.com/"
  }
}, {
  id: "5Yl6d0UX6dU",
  slug: "a-close-up-of-a-black-dog-looking-up-5Yl6d0UX6dU",
  width: 2738,
  color: "#262626",
  height: 4107,
  alt_description: "A close up of a black dog looking up",
  urls: {
    raw: "https://images.unsplash.com/photo-1722582349592-a5b92189509b?ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1722582349592-a5b92189509b?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=85",
    regular: "https://images.unsplash.com/photo-1722582349592-a5b92189509b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=80&w=1080",
    small: "https://images.unsplash.com/photo-1722582349592-a5b92189509b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=80&w=400",
    thumb: "https://images.unsplash.com/photo-1722582349592-a5b92189509b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=80&w=200",
    small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1722582349592-a5b92189509b"
  },
  topics: ["animals"],
  user: {
    first_name: "Anastassia",
    last_name: "Anufrieva",
    url: "http://instagram.com/ouroboros_pyrography"
  }
}, {
  id: "gjo9ad-8arA",
  slug: "a-colorful-bird-is-standing-on-the-ground-gjo9ad-8arA",
  width: 3211,
  color: "#26260c",
  height: 3071,
  alt_description: "A colorful bird is standing on the ground",
  urls: {
    raw: "https://images.unsplash.com/photo-1722378459520-6609d4e3ad81?ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1722378459520-6609d4e3ad81?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=85",
    regular: "https://images.unsplash.com/photo-1722378459520-6609d4e3ad81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=80&w=1080",
    small: "https://images.unsplash.com/photo-1722378459520-6609d4e3ad81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=80&w=400",
    thumb: "https://images.unsplash.com/photo-1722378459520-6609d4e3ad81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEpwZzZLaWRsLUhrfHx8fHx8fDE3MjMyNzUyOTV8&ixlib=rb-4.0.3&q=80&w=200",
    small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1722378459520-6609d4e3ad81"
  },
  topics: ["animals", "nature"],
  user: {
    first_name: "Alexander",
    last_name: "Kovalev",
    url: "https://unsplash.com/@alkomosh"
  }
}, {
  id: "DH_u2aV3nGM",
  slug: "coconut-tree-on-beach-DH_u2aV3nGM",
  width: 4016,
  color: "#d9f3f3",
  height: 5197,
  alt_description: "coconut tree on beach",
  urls: {
    raw: "https://images.unsplash.com/photo-1509233725247-49e657c54213?ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1509233725247-49e657c54213?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3&q=85",
    regular: "https://images.unsplash.com/photo-1509233725247-49e657c54213?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3&q=80&w=1080",
    small: "https://images.unsplash.com/photo-1509233725247-49e657c54213?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3&q=80&w=400",
    thumb: "https://images.unsplash.com/photo-1509233725247-49e657c54213?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3&q=80&w=200",
    small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1509233725247-49e657c54213"
  },
  topics: ["nature"],
  user: {
    first_name: "Matthew",
    last_name: "Brodeur",
    url: "https://www.brodeur.nyc/"
  }
}, {
  id: "BrGj9UJV1A8",
  slug: "white-and-yellow-flower-petals-BrGj9UJV1A8",
  width: 2686,
  color: "#a68c8c",
  height: 3582,
  alt_description: "white and yellow flower petals",
  urls: {
    raw: "https://images.unsplash.com/photo-1621270689907-71bef1d73ac3?ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1621270689907-71bef1d73ac3?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3&q=85",
    regular: "https://images.unsplash.com/photo-1621270689907-71bef1d73ac3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3&q=80&w=1080",
    small: "https://images.unsplash.com/photo-1621270689907-71bef1d73ac3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3&q=80&w=400",
    thumb: "https://images.unsplash.com/photo-1621270689907-71bef1d73ac3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3&q=80&w=200",
    small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1621270689907-71bef1d73ac3"
  },
  topics: ["nature"],
  user: {
    first_name: "Susan",
    last_name: "Wilkinson",
    url: "https://creativemarket.com/Susan_Wilkinson"
  }
}, {
  id: "ed01m0a8nbQ",
  slug: "a-group-of-trees-in-a-foggy-forest-ed01m0a8nbQ",
  width: 6240,
  color: "#a6a673",
  height: 4160,
  alt_description: "a group of trees in a foggy forest",
  urls: {
    raw: "https://images.unsplash.com/photo-1656772710810-677f691cc688?ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1656772710810-677f691cc688?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3&q=85",
    regular: "https://images.unsplash.com/photo-1656772710810-677f691cc688?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3&q=80&w=1080",
    small: "https://images.unsplash.com/photo-1656772710810-677f691cc688?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3&q=80&w=400",
    thumb: "https://images.unsplash.com/photo-1656772710810-677f691cc688?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3&q=80&w=200",
    small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1656772710810-677f691cc688"
  },
  topics: ["nature"],
  user: {
    first_name: "Hans",
    last_name: "Isaacson",
    url: "http://HansIsaacson.com"
  }
}, {
  id: "UFWz8_9uWX0",
  slug: "a-close-up-of-some-grass-in-the-sand-UFWz8_9uWX0",
  width: 4160,
  color: "#d9a673",
  height: 6240,
  alt_description: "a close up of some grass in the sand",
  urls: {
    raw: "https://images.unsplash.com/photo-1636579836886-a72170e0af8c?ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1636579836886-a72170e0af8c?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3&q=85",
    regular: "https://images.unsplash.com/photo-1636579836886-a72170e0af8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3&q=80&w=1080",
    small: "https://images.unsplash.com/photo-1636579836886-a72170e0af8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3&q=80&w=400",
    thumb: "https://images.unsplash.com/photo-1636579836886-a72170e0af8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3&q=80&w=200",
    small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1636579836886-a72170e0af8c"
  },
  topics: ["textures-patterns", "nature", "color-of-water", "wallpapers"],
  user: {
    first_name: "Hans",
    last_name: "Isaacson",
    url: "http://HansIsaacson.com"
  }
}, {
  id: "MtRmdlbKYVA",
  slug: "pink-petaled-flower-plants-MtRmdlbKYVA",
  width: 3648,
  color: "#26260c",
  height: 5472,
  alt_description: "pink petaled flower plants",
  urls: {
    raw: "https://images.unsplash.com/photo-1561594592-d4b0e1201a58?ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1561594592-d4b0e1201a58?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3&q=85",
    regular: "https://images.unsplash.com/photo-1561594592-d4b0e1201a58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3&q=80&w=1080",
    small: "https://images.unsplash.com/photo-1561594592-d4b0e1201a58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3&q=80&w=400",
    thumb: "https://images.unsplash.com/photo-1561594592-d4b0e1201a58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3&q=80&w=200",
    small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1561594592-d4b0e1201a58"
  },
  topics: ["nature", "macro-moments"],
  user: {
    first_name: "Alfred",
    last_name: "Schrock",
    url: "http://www.PureGeorgiaPhotography.com"
  }
}, {
  id: "mx-OsvPdyV0",
  slug: "a-path-through-a-forest-mx-OsvPdyV0",
  width: 3456,
  color: "#262626",
  height: 5184,
  alt_description: "a path through a forest",
  urls: {
    raw: "https://images.unsplash.com/photo-1665055651766-589f7d7216b2?ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1665055651766-589f7d7216b2?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3&q=85",
    regular: "https://images.unsplash.com/photo-1665055651766-589f7d7216b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3&q=80&w=1080",
    small: "https://images.unsplash.com/photo-1665055651766-589f7d7216b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3&q=80&w=400",
    thumb: "https://images.unsplash.com/photo-1665055651766-589f7d7216b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3&q=80&w=200",
    small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1665055651766-589f7d7216b2"
  },
  topics: ["nature"],
  user: {
    first_name: "Milana",
    last_name: "Jovanov",
    url: "http://instagram.com/milana_jovanov"
  }
}, {
  id: "LqvskIMsv3I",
  slug: "a-close-up-of-a-green-plant-with-lots-of-leaves-LqvskIMsv3I",
  width: 4000,
  color: "#26400c",
  height: 6000,
  alt_description: "a close up of a green plant with lots of leaves",
  urls: {
    raw: "https://images.unsplash.com/photo-1653833369590-a4b48b4a61c4?ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1653833369590-a4b48b4a61c4?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3&q=85",
    regular: "https://images.unsplash.com/photo-1653833369590-a4b48b4a61c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3&q=80&w=1080",
    small: "https://images.unsplash.com/photo-1653833369590-a4b48b4a61c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3&q=80&w=400",
    thumb: "https://images.unsplash.com/photo-1653833369590-a4b48b4a61c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3&q=80&w=200",
    small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1653833369590-a4b48b4a61c4"
  },
  topics: ["nature", "textures-patterns", "wallpapers"],
  user: {
    first_name: "Kevin",
    last_name: "Wang",
    url: "https://www.paypal.me/kw829"
  }
}, {
  id: "2FAzeq8AagU",
  slug: "a-giraffe-standing-in-a-field-of-tall-grass-2FAzeq8AagU",
  width: 3648,
  color: "#f3c08c",
  height: 5472,
  alt_description: "A giraffe standing in a field of tall grass",
  urls: {
    raw: "https://images.unsplash.com/photo-1721401919022-6c12feae074e?ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1721401919022-6c12feae074e?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3&q=85",
    regular: "https://images.unsplash.com/photo-1721401919022-6c12feae074e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3&q=80&w=1080",
    small: "https://images.unsplash.com/photo-1721401919022-6c12feae074e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3&q=80&w=400",
    thumb: "https://images.unsplash.com/photo-1721401919022-6c12feae074e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3&q=80&w=200",
    small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1721401919022-6c12feae074e"
  },
  topics: ["nature", "wallpapers"],
  user: {
    first_name: "Gaku",
    last_name: "Suyama",
    url: "http://x.com/PONPON_IKEDA"
  }
}, {
  id: "coM7mp3tQwA",
  slug: "a-mountain-range-is-reflected-in-the-still-water-of-a-lake-coM7mp3tQwA",
  width: 2160,
  color: "#d9f3f3",
  height: 3240,
  alt_description: "A mountain range is reflected in the still water of a lake",
  urls: {
    raw: "https://images.unsplash.com/photo-1723069438273-bc04863b620b?ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1723069438273-bc04863b620b?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3&q=85",
    regular: "https://images.unsplash.com/photo-1723069438273-bc04863b620b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3&q=80&w=1080",
    small: "https://images.unsplash.com/photo-1723069438273-bc04863b620b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3&q=80&w=400",
    thumb: "https://images.unsplash.com/photo-1723069438273-bc04863b620b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3&q=80&w=200",
    small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1723069438273-bc04863b620b"
  },
  topics: ["nature", "wallpapers"],
  user: {
    first_name: "benjamin",
    last_name: "chambon",
    url: "http://instagram.com/benriquo"
  }
}, {
  id: "R7_waYxH96Y",
  slug: "a-night-sky-filled-with-lots-of-stars-R7_waYxH96Y",
  width: 2160,
  color: "#0c2659",
  height: 2700,
  alt_description: "A night sky filled with lots of stars",
  urls: {
    raw: "https://images.unsplash.com/photo-1723069866032-69a98da922b8?ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1723069866032-69a98da922b8?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3&q=85",
    regular: "https://images.unsplash.com/photo-1723069866032-69a98da922b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3&q=80&w=1080",
    small: "https://images.unsplash.com/photo-1723069866032-69a98da922b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3&q=80&w=400",
    thumb: "https://images.unsplash.com/photo-1723069866032-69a98da922b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3&q=80&w=200",
    small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1723069866032-69a98da922b8"
  },
  topics: ["nature", "wallpapers"],
  user: {
    first_name: "benjamin",
    last_name: "chambon",
    url: "http://instagram.com/benriquo"
  }
}, {
  id: "mwHqSR4Lgyc",
  slug: "a-mountain-range-is-reflected-in-the-still-water-of-a-lake-mwHqSR4Lgyc",
  width: 2160,
  color: "#0c2640",
  height: 3240,
  alt_description: "A mountain range is reflected in the still water of a lake",
  urls: {
    raw: "https://images.unsplash.com/photo-1723069438473-f34d54c8ec2c?ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1723069438473-f34d54c8ec2c?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3&q=85",
    regular: "https://images.unsplash.com/photo-1723069438473-f34d54c8ec2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3&q=80&w=1080",
    small: "https://images.unsplash.com/photo-1723069438473-f34d54c8ec2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3&q=80&w=400",
    thumb: "https://images.unsplash.com/photo-1723069438473-f34d54c8ec2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3&q=80&w=200",
    small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1723069438473-f34d54c8ec2c"
  },
  topics: ["nature", "wallpapers"],
  user: {
    first_name: "benjamin",
    last_name: "chambon",
    url: "http://instagram.com/benriquo"
  }
}, {
  id: "K_jVStI1PjM",
  slug: "a-view-of-a-mountain-range-with-trees-in-the-foreground-K_jVStI1PjM",
  width: 3175,
  color: "#a6c0d9",
  height: 4763,
  alt_description: "A view of a mountain range with trees in the foreground",
  urls: {
    raw: "https://images.unsplash.com/photo-1723069407668-6991e6f54d83?ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1723069407668-6991e6f54d83?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3&q=85",
    regular: "https://images.unsplash.com/photo-1723069407668-6991e6f54d83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3&q=80&w=1080",
    small: "https://images.unsplash.com/photo-1723069407668-6991e6f54d83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3&q=80&w=400",
    thumb: "https://images.unsplash.com/photo-1723069407668-6991e6f54d83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3&q=80&w=200",
    small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1723069407668-6991e6f54d83"
  },
  topics: ["nature", "travel", "wallpapers"],
  user: {
    first_name: "Slava",
    last_name: "Auchynnikau",
    url: "http://instagram.com/auchynnikau"
  }
}, {
  id: "xejoOeiInZI",
  slug: "a-large-mountain-covered-in-snow-under-a-dark-sky-xejoOeiInZI",
  width: 3506,
  color: "#262626",
  height: 5259,
  alt_description: "A large mountain covered in snow under a dark sky",
  urls: {
    raw: "https://images.unsplash.com/photo-1723065456702-c4353e92e905?ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1723065456702-c4353e92e905?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3&q=85",
    regular: "https://images.unsplash.com/photo-1723065456702-c4353e92e905?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3&q=80&w=1080",
    small: "https://images.unsplash.com/photo-1723065456702-c4353e92e905?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3&q=80&w=400",
    thumb: "https://images.unsplash.com/photo-1723065456702-c4353e92e905?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3&q=80&w=200",
    small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1723065456702-c4353e92e905"
  },
  topics: ["experimental", "nature", "spirituality", "travel", "wallpapers"],
  user: {
    first_name: "Slava",
    last_name: "Auchynnikau",
    url: "http://instagram.com/auchynnikau"
  }
}, {
  id: "vJJ5PtWymSY",
  slug: "a-view-of-a-valley-with-a-mountain-in-the-background-vJJ5PtWymSY",
  width: 5472,
  color: "#595959",
  height: 3648,
  alt_description: "A view of a valley with a mountain in the background",
  urls: {
    raw: "https://images.unsplash.com/photo-1723011032817-3d047ef8665c?ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1723011032817-3d047ef8665c?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3&q=85",
    regular: "https://images.unsplash.com/photo-1723011032817-3d047ef8665c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3&q=80&w=1080",
    small: "https://images.unsplash.com/photo-1723011032817-3d047ef8665c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3&q=80&w=400",
    thumb: "https://images.unsplash.com/photo-1723011032817-3d047ef8665c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3&q=80&w=200",
    small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1723011032817-3d047ef8665c"
  },
  topics: ["nature", "wallpapers"],
  user: {
    first_name: "Alexey",
    last_name: "Elfimov",
    url: "http://instagram.com/ikocs"
  }
}, {
  id: "mY8Lt8cqOiI",
  slug: "a-lush-green-hillside-covered-in-lots-of-trees-mY8Lt8cqOiI",
  width: 5472,
  color: "#404026",
  height: 3648,
  alt_description: "A lush green hillside covered in lots of trees",
  urls: {
    raw: "https://images.unsplash.com/photo-1723011032825-4980449e6ed2?ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1723011032825-4980449e6ed2?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3&q=85",
    regular: "https://images.unsplash.com/photo-1723011032825-4980449e6ed2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3&q=80&w=1080",
    small: "https://images.unsplash.com/photo-1723011032825-4980449e6ed2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3&q=80&w=400",
    thumb: "https://images.unsplash.com/photo-1723011032825-4980449e6ed2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fDZzTVZqVExTa2VRfHx8fHx8fDE3MjMyNzQ5Mzd8&ixlib=rb-4.0.3&q=80&w=200",
    small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1723011032825-4980449e6ed2"
  },
  topics: ["nature"],
  user: {
    first_name: "Alexey",
    last_name: "Elfimov",
    url: "http://instagram.com/ikocs"
  }
}, {
  id: "-joBIdpX04s",
  slug: "time-lapse-photography-of-cars-on-road-during-night-time--joBIdpX04s",
  width: 6240,
  color: "#262626",
  height: 4160,
  alt_description: "time lapse photography of cars on road during night time",
  urls: {
    raw: "https://images.unsplash.com/photo-1623588751457-abc09c443963?ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1623588751457-abc09c443963?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=85",
    regular: "https://images.unsplash.com/photo-1623588751457-abc09c443963?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=80&w=1080",
    small: "https://images.unsplash.com/photo-1623588751457-abc09c443963?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=80&w=400",
    thumb: "https://images.unsplash.com/photo-1623588751457-abc09c443963?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=80&w=200",
    small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1623588751457-abc09c443963"
  },
  topics: ["street-photography"],
  user: {
    first_name: "Vadim",
    last_name: "Berg",
    url: "http://instagram.com/bergvadi"
  }
}, {
  id: "TGXbKfKnZT4",
  slug: "a-man-riding-a-bike-down-a-street-holding-an-umbrella-TGXbKfKnZT4",
  width: 6048,
  color: "#404040",
  height: 4024,
  alt_description: "a man riding a bike down a street holding an umbrella",
  urls: {
    raw: "https://images.unsplash.com/photo-1710198693960-b96873111966?ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1710198693960-b96873111966?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=85",
    regular: "https://images.unsplash.com/photo-1710198693960-b96873111966?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=80&w=1080",
    small: "https://images.unsplash.com/photo-1710198693960-b96873111966?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=80&w=400",
    thumb: "https://images.unsplash.com/photo-1710198693960-b96873111966?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=80&w=200",
    small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1710198693960-b96873111966"
  },
  topics: ["street-photography"],
  user: {
    first_name: "Leon",
    last_name: "Andov",
    url: "https://www.instagram.com/lando.gc25/"
  }
}, {
  id: "WIu1J88iHiw",
  slug: "a-street-lined-with-lots-of-trees-covered-in-white-flowers-WIu1J88iHiw",
  width: 5472,
  color: "#260c0c",
  height: 3648,
  alt_description: "A street lined with lots of trees covered in white flowers",
  urls: {
    raw: "https://images.unsplash.com/photo-1722973893238-b4de0300f4f0?ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1722973893238-b4de0300f4f0?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=85",
    regular: "https://images.unsplash.com/photo-1722973893238-b4de0300f4f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=80&w=1080",
    small: "https://images.unsplash.com/photo-1722973893238-b4de0300f4f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=80&w=400",
    thumb: "https://images.unsplash.com/photo-1722973893238-b4de0300f4f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=80&w=200",
    small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1722973893238-b4de0300f4f0"
  },
  topics: ["spirituality", "street-photography", "textures-patterns", "travel", "wallpapers"],
  user: {
    first_name: "Marek",
    last_name: "Piwnicki",
    url: "https://marpiwnicki.github.io"
  }
}, {
  id: "uZGIJYm-j7c",
  slug: "a-blurry-photo-of-a-city-street-at-night-uZGIJYm-j7c",
  width: 2160,
  color: "#262626",
  height: 2700,
  alt_description: "A blurry photo of a city street at night",
  urls: {
    raw: "https://images.unsplash.com/photo-1723101174263-34ecf3edde21?ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1723101174263-34ecf3edde21?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=85",
    regular: "https://images.unsplash.com/photo-1723101174263-34ecf3edde21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=80&w=1080",
    small: "https://images.unsplash.com/photo-1723101174263-34ecf3edde21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=80&w=400",
    thumb: "https://images.unsplash.com/photo-1723101174263-34ecf3edde21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=80&w=200",
    small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1723101174263-34ecf3edde21"
  },
  topics: ["experimental", "street-photography"],
  user: {
    first_name: "benjamin",
    last_name: "chambon",
    url: "http://instagram.com/benriquo"
  }
}, {
  id: "PW-f5Xlj90M",
  slug: "a-long-exposure-photo-of-a-city-at-night-PW-f5Xlj90M",
  width: 2160,
  color: "#262626",
  height: 2700,
  alt_description: "A long exposure photo of a city at night",
  urls: {
    raw: "https://images.unsplash.com/photo-1723101173796-fdd7de2a44f5?ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1723101173796-fdd7de2a44f5?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=85",
    regular: "https://images.unsplash.com/photo-1723101173796-fdd7de2a44f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=80&w=1080",
    small: "https://images.unsplash.com/photo-1723101173796-fdd7de2a44f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=80&w=400",
    thumb: "https://images.unsplash.com/photo-1723101173796-fdd7de2a44f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=80&w=200",
    small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1723101173796-fdd7de2a44f5"
  },
  topics: ["experimental", "street-photography"],
  user: {
    first_name: "benjamin",
    last_name: "chambon",
    url: "http://instagram.com/benriquo"
  }
}, {
  id: "PcI8S1uYZFM",
  slug: "a-large-building-with-a-clock-tower-at-night-PcI8S1uYZFM",
  width: 6000,
  color: "#260c0c",
  height: 4000,
  alt_description: "A large building with a clock tower at night",
  urls: {
    raw: "https://images.unsplash.com/photo-1723101173867-02c62064579f?ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1723101173867-02c62064579f?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=85",
    regular: "https://images.unsplash.com/photo-1723101173867-02c62064579f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=80&w=1080",
    small: "https://images.unsplash.com/photo-1723101173867-02c62064579f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=80&w=400",
    thumb: "https://images.unsplash.com/photo-1723101173867-02c62064579f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=80&w=200",
    small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1723101173867-02c62064579f"
  },
  topics: ["experimental", "street-photography"],
  user: {
    first_name: "benjamin",
    last_name: "chambon",
    url: "http://instagram.com/benriquo"
  }
}, {
  id: "PXWkkjufi-k",
  slug: "people-walking-in-front-of-a-building-at-night-PXWkkjufi-k",
  width: 4240,
  color: "#735940",
  height: 2832,
  alt_description: "People walking in front of a building at night",
  urls: {
    raw: "https://images.unsplash.com/photo-1723078865094-a7cb69944d06?ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1723078865094-a7cb69944d06?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=85",
    regular: "https://images.unsplash.com/photo-1723078865094-a7cb69944d06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=80&w=1080",
    small: "https://images.unsplash.com/photo-1723078865094-a7cb69944d06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=80&w=400",
    thumb: "https://images.unsplash.com/photo-1723078865094-a7cb69944d06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=80&w=200",
    small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1723078865094-a7cb69944d06"
  },
  topics: ["architecture-interior", "business-work", "spirituality", "street-photography", "textures-patterns", "travel", "wallpapers"],
  user: {
    first_name: "Dominic Kurniawan",
    last_name: "Suryaputra",
    url: "http://instagram.com/dominicsuryaputra"
  }
}, {
  id: "x0EvEPpordo",
  slug: "a-person-is-walking-out-of-a-gated-entrance-x0EvEPpordo",
  width: 6507,
  color: "#404040",
  height: 4487,
  alt_description: "A person is walking out of a gated entrance",
  urls: {
    raw: "https://images.unsplash.com/photo-1723027094512-60b950f0d292?ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1723027094512-60b950f0d292?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=85",
    regular: "https://images.unsplash.com/photo-1723027094512-60b950f0d292?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=80&w=1080",
    small: "https://images.unsplash.com/photo-1723027094512-60b950f0d292?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=80&w=400",
    thumb: "https://images.unsplash.com/photo-1723027094512-60b950f0d292?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=80&w=200",
    small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1723027094512-60b950f0d292"
  },
  topics: ["people", "street-photography"],
  user: {
    first_name: "Evgeny",
    last_name: "Matveev",
    url: "http://instagram.com/eugene_rus"
  }
}, {
  id: "5INCCz5sczs",
  slug: "a-person-riding-a-bike-through-a-market-5INCCz5sczs",
  width: 6000,
  color: "#f3f3f3",
  height: 4000,
  alt_description: "A person riding a bike through a market",
  urls: {
    raw: "https://images.unsplash.com/photo-1722865166916-ce06576ee1ce?ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1722865166916-ce06576ee1ce?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=85",
    regular: "https://images.unsplash.com/photo-1722865166916-ce06576ee1ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=80&w=1080",
    small: "https://images.unsplash.com/photo-1722865166916-ce06576ee1ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=80&w=400",
    thumb: "https://images.unsplash.com/photo-1722865166916-ce06576ee1ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=80&w=200",
    small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1722865166916-ce06576ee1ce"
  },
  topics: ["street-photography"],
  user: {
    first_name: "Nguyen Phan",
    last_name: "Nam Anh",
    url: "http://instagram.com/dying.apricity"
  }
}, {
  id: "qM6lj4anPN0",
  slug: "a-woman-walking-down-a-flight-of-stairs-qM6lj4anPN0",
  width: 5361,
  color: "#f3f3f3",
  height: 3574,
  alt_description: "A woman walking down a flight of stairs",
  urls: {
    raw: "https://images.unsplash.com/photo-1722865167451-c51aff93b69b?ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1722865167451-c51aff93b69b?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=85",
    regular: "https://images.unsplash.com/photo-1722865167451-c51aff93b69b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=80&w=1080",
    small: "https://images.unsplash.com/photo-1722865167451-c51aff93b69b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=80&w=400",
    thumb: "https://images.unsplash.com/photo-1722865167451-c51aff93b69b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=80&w=200",
    small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1722865167451-c51aff93b69b"
  },
  topics: ["street-photography"],
  user: {
    first_name: "Nguyen Phan",
    last_name: "Nam Anh",
    url: "http://instagram.com/dying.apricity"
  }
}, {
  id: "g0tFd1oB2sM",
  slug: "a-group-of-people-riding-on-a-subway-train-g0tFd1oB2sM",
  width: 6000,
  color: "#a6a6a6",
  height: 4000,
  alt_description: "A group of people riding on a subway train",
  urls: {
    raw: "https://images.unsplash.com/photo-1722865167113-7a03e9f032c8?ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1722865167113-7a03e9f032c8?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=85",
    regular: "https://images.unsplash.com/photo-1722865167113-7a03e9f032c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=80&w=1080",
    small: "https://images.unsplash.com/photo-1722865167113-7a03e9f032c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=80&w=400",
    thumb: "https://images.unsplash.com/photo-1722865167113-7a03e9f032c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=80&w=200",
    small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1722865167113-7a03e9f032c8"
  },
  topics: ["street-photography"],
  user: {
    first_name: "Nguyen Phan",
    last_name: "Nam Anh",
    url: "http://instagram.com/dying.apricity"
  }
}, {
  id: "bqccHJ6RdCs",
  slug: "an-aerial-view-of-a-city-at-night-bqccHJ6RdCs",
  width: 6000,
  color: "#404040",
  height: 4000,
  alt_description: "An aerial view of a city at night",
  urls: {
    raw: "https://images.unsplash.com/photo-1722865142814-2c0c3368a548?ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1722865142814-2c0c3368a548?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=85",
    regular: "https://images.unsplash.com/photo-1722865142814-2c0c3368a548?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=80&w=1080",
    small: "https://images.unsplash.com/photo-1722865142814-2c0c3368a548?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=80&w=400",
    thumb: "https://images.unsplash.com/photo-1722865142814-2c0c3368a548?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=80&w=200",
    small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1722865142814-2c0c3368a548"
  },
  topics: ["street-photography"],
  user: {
    first_name: "Nguyen Phan",
    last_name: "Nam Anh",
    url: "http://instagram.com/dying.apricity"
  }
}, {
  id: "ZmXB3D5Aey0",
  slug: "a-person-riding-a-bike-on-a-city-street-ZmXB3D5Aey0",
  width: 2074,
  color: "#f3f3f3",
  height: 3129,
  alt_description: "a person riding a bike on a city street",
  urls: {
    raw: "https://images.unsplash.com/photo-1715691884702-e58024615493?ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1715691884702-e58024615493?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=85",
    regular: "https://images.unsplash.com/photo-1715691884702-e58024615493?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=80&w=1080",
    small: "https://images.unsplash.com/photo-1715691884702-e58024615493?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=80&w=400",
    thumb: "https://images.unsplash.com/photo-1715691884702-e58024615493?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=80&w=200",
    small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1715691884702-e58024615493"
  },
  topics: ["street-photography", "sports", "film"],
  user: {
    first_name: "Nina",
    last_name: "Boshoven",
    url: "http://instagram.com/ninaboshoven"
  }
}, {
  id: "sEulLK7Z4fY",
  slug: "a-woman-walking-down-a-street-next-to-tall-buildings-sEulLK7Z4fY",
  width: 4112,
  color: "#d9d9d9",
  height: 5881,
  alt_description: "A woman walking down a street next to tall buildings",
  urls: {
    raw: "https://images.unsplash.com/photo-1720127470427-aee737d831d0?ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1720127470427-aee737d831d0?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=85",
    regular: "https://images.unsplash.com/photo-1720127470427-aee737d831d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=80&w=1080",
    small: "https://images.unsplash.com/photo-1720127470427-aee737d831d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=80&w=400",
    thumb: "https://images.unsplash.com/photo-1720127470427-aee737d831d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=80&w=200",
    small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1720127470427-aee737d831d0"
  },
  topics: ["street-photography"],
  user: {
    first_name: "Chu",
    last_name: "CHU",
    url: "http://instagram.com/chu_sin_chau"
  }
}, {
  id: "f9FzXgbT81M",
  slug: "a-group-of-people-walking-around-a-city-square-f9FzXgbT81M",
  width: 3840,
  color: "#c0d9f3",
  height: 5760,
  alt_description: "A group of people walking around a city square",
  urls: {
    raw: "https://images.unsplash.com/photo-1723041456019-3074f1431cf2?ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1723041456019-3074f1431cf2?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=85",
    regular: "https://images.unsplash.com/photo-1723041456019-3074f1431cf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=80&w=1080",
    small: "https://images.unsplash.com/photo-1723041456019-3074f1431cf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=80&w=400",
    thumb: "https://images.unsplash.com/photo-1723041456019-3074f1431cf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=80&w=200",
    small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1723041456019-3074f1431cf2"
  },
  topics: ["street-photography"],
  user: {
    first_name: "HANVIN",
    last_name: "CHEONG",
    url: "https://instagram.com/hkt311_"
  }
}, {
  id: "yToAgLYV71Q",
  slug: "a-couple-of-people-standing-on-top-of-a-hill-yToAgLYV71Q",
  width: 2000,
  color: "#0c260c",
  height: 3016,
  alt_description: "A couple of people standing on top of a hill",
  urls: {
    raw: "https://images.unsplash.com/photo-1722928852010-5ebdd0ed568f?ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1722928852010-5ebdd0ed568f?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=85",
    regular: "https://images.unsplash.com/photo-1722928852010-5ebdd0ed568f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=80&w=1080",
    small: "https://images.unsplash.com/photo-1722928852010-5ebdd0ed568f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=80&w=400",
    thumb: "https://images.unsplash.com/photo-1722928852010-5ebdd0ed568f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=80&w=200",
    small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1722928852010-5ebdd0ed568f"
  },
  topics: ["film", "people", "spirituality", "street-photography", "travel"],
  user: {
    first_name: "Haotian",
    last_name: "Zheng",
    url: "https://haotianzheng.com/"
  }
}, {
  id: "6_4MVJadrhk",
  slug: "a-man-riding-a-skateboard-down-a-set-of-stairs-6_4MVJadrhk",
  width: 3740,
  color: "#8c8c8c",
  height: 5610,
  alt_description: "A man riding a skateboard down a set of stairs",
  urls: {
    raw: "https://images.unsplash.com/photo-1723013082698-9401b84c2ab6?ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1723013082698-9401b84c2ab6?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=85",
    regular: "https://images.unsplash.com/photo-1723013082698-9401b84c2ab6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=80&w=1080",
    small: "https://images.unsplash.com/photo-1723013082698-9401b84c2ab6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=80&w=400",
    thumb: "https://images.unsplash.com/photo-1723013082698-9401b84c2ab6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=80&w=200",
    small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1723013082698-9401b84c2ab6"
  },
  topics: ["architecture-interior", "street-photography"],
  user: {
    first_name: "Ryunosuke",
    last_name: "Kikuno",
    url: "https://www.ryunosukekikuno.com/"
  }
}, {
  id: "nb9iaqGA-9c",
  slug: "a-person-crossing-a-street-in-front-of-a-building-nb9iaqGA-9c",
  width: 5715,
  color: "#737373",
  height: 4215,
  alt_description: "A person crossing a street in front of a building",
  urls: {
    raw: "https://images.unsplash.com/photo-1723027201403-b6345db41166?ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1723027201403-b6345db41166?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=85",
    regular: "https://images.unsplash.com/photo-1723027201403-b6345db41166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=80&w=1080",
    small: "https://images.unsplash.com/photo-1723027201403-b6345db41166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=80&w=400",
    thumb: "https://images.unsplash.com/photo-1723027201403-b6345db41166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=80&w=200",
    small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1723027201403-b6345db41166"
  },
  topics: ["architecture-interior", "people", "street-photography", "travel"],
  user: {
    first_name: "Evgeny",
    last_name: "Matveev",
    url: "http://instagram.com/eugene_rus"
  }
}, {
  id: "mwi9XQ7zET0",
  slug: "a-woman-walking-down-a-street-past-a-tree-mwi9XQ7zET0",
  width: 4492,
  color: "#c0c0a6",
  height: 6774,
  alt_description: "a woman walking down a street past a tree",
  urls: {
    raw: "https://images.unsplash.com/photo-1717014501220-e44e1e2d72c8?ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1717014501220-e44e1e2d72c8?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=85",
    regular: "https://images.unsplash.com/photo-1717014501220-e44e1e2d72c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=80&w=1080",
    small: "https://images.unsplash.com/photo-1717014501220-e44e1e2d72c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=80&w=400",
    thumb: "https://images.unsplash.com/photo-1717014501220-e44e1e2d72c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fHhIeFlUTUhMZ09jfHx8fHx8fDE3MjMyNzUyNTZ8&ixlib=rb-4.0.3&q=80&w=200",
    small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1717014501220-e44e1e2d72c8"
  },
  topics: ["travel", "film", "street-photography"],
  user: {
    first_name: "Mathilde",
    last_name: "Hugdal",
    url: "https://gmathilde.myportfolio.com/"
  }
}, {
  id: "X_xw9qFG1PU",
  slug: "a-person-on-a-surfboard-in-the-middle-of-the-ocean-X_xw9qFG1PU",
  width: 2886,
  color: "#a6a6d9",
  height: 4040,
  alt_description: "A person on a surfboard in the middle of the ocean",
  urls: {
    raw: "https://images.unsplash.com/photo-1722958025185-14f07b55d613?ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1722958025185-14f07b55d613?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3&q=85",
    regular: "https://images.unsplash.com/photo-1722958025185-14f07b55d613?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3&q=80&w=1080",
    small: "https://images.unsplash.com/photo-1722958025185-14f07b55d613?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3&q=80&w=400",
    thumb: "https://images.unsplash.com/photo-1722958025185-14f07b55d613?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3&q=80&w=200",
    small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1722958025185-14f07b55d613"
  },
  topics: ["sports", "travel"],
  user: {
    first_name: "Yuliya",
    last_name: "Matuzava",
    url: "http://matuzava.photos"
  }
}, {
  id: "r8wHlAHwtx0",
  slug: "a-group-of-people-standing-in-front-of-a-building-r8wHlAHwtx0",
  width: 3675,
  color: "#262626",
  height: 5513,
  alt_description: "A group of people standing in front of a building",
  urls: {
    raw: "https://images.unsplash.com/photo-1722218530961-10d93f8a5cff?ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1722218530961-10d93f8a5cff?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3&q=85",
    regular: "https://images.unsplash.com/photo-1722218530961-10d93f8a5cff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3&q=80&w=1080",
    small: "https://images.unsplash.com/photo-1722218530961-10d93f8a5cff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3&q=80&w=400",
    thumb: "https://images.unsplash.com/photo-1722218530961-10d93f8a5cff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3&q=80&w=200",
    small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1722218530961-10d93f8a5cff"
  },
  topics: ["travel"],
  user: {
    first_name: "Jose",
    last_name: "Figueroa",
    url: "https://www.behance.net/josefigueroa29"
  }
}, {
  id: "RM1LyHAhKI0",
  slug: "a-tall-white-building-sitting-on-top-of-a-lush-green-forest-RM1LyHAhKI0",
  width: 3648,
  color: "#26260c",
  height: 5472,
  alt_description: "A tall white building sitting on top of a lush green forest",
  urls: {
    raw: "https://images.unsplash.com/photo-1723042292152-00a9b10a44d0?ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1723042292152-00a9b10a44d0?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3&q=85",
    regular: "https://images.unsplash.com/photo-1723042292152-00a9b10a44d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3&q=80&w=1080",
    small: "https://images.unsplash.com/photo-1723042292152-00a9b10a44d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3&q=80&w=400",
    thumb: "https://images.unsplash.com/photo-1723042292152-00a9b10a44d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3&q=80&w=200",
    small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1723042292152-00a9b10a44d0"
  },
  topics: ["architecture-interior", "travel"],
  user: {
    first_name: "Gaku",
    last_name: "Suyama",
    url: "http://x.com/PONPON_IKEDA"
  }
}, {
  id: "MtZYeKxwREE",
  slug: "a-boat-sitting-on-top-of-a-sandy-beach-MtZYeKxwREE",
  width: 4160,
  color: "#0c4059",
  height: 6240,
  alt_description: "A boat sitting on top of a sandy beach",
  urls: {
    raw: "https://images.unsplash.com/photo-1723121245386-b2137fced28f?ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1723121245386-b2137fced28f?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3&q=85",
    regular: "https://images.unsplash.com/photo-1723121245386-b2137fced28f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3&q=80&w=1080",
    small: "https://images.unsplash.com/photo-1723121245386-b2137fced28f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3&q=80&w=400",
    thumb: "https://images.unsplash.com/photo-1723121245386-b2137fced28f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3&q=80&w=200",
    small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1723121245386-b2137fced28f"
  },
  topics: ["travel"],
  user: {
    first_name: "Francesco",
    last_name: "Ungaro",
    url: "http://www.francescoungaro.it"
  }
}, {
  id: "I15VDbkxIeo",
  slug: "a-couple-of-tall-buildings-sitting-next-to-each-other-I15VDbkxIeo",
  width: 4016,
  color: "#262626",
  height: 6016,
  alt_description: "A couple of tall buildings sitting next to each other",
  urls: {
    raw: "https://images.unsplash.com/photo-1723097132733-29023a8f19f8?ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1723097132733-29023a8f19f8?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3&q=85",
    regular: "https://images.unsplash.com/photo-1723097132733-29023a8f19f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3&q=80&w=1080",
    small: "https://images.unsplash.com/photo-1723097132733-29023a8f19f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3&q=80&w=400",
    thumb: "https://images.unsplash.com/photo-1723097132733-29023a8f19f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3&q=80&w=200",
    small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1723097132733-29023a8f19f8"
  },
  topics: ["architecture-interior", "street-photography", "travel"],
  user: {
    first_name: "Takashi",
    last_name: "Miyazaki",
    url: "https://miyatankun.wixsite.com/miyatankun-photograp"
  }
}, {
  id: "y4L_EWpz4P8",
  slug: "a-large-glass-building-surrounded-by-lots-of-trees-y4L_EWpz4P8",
  width: 3913,
  color: "#c0d9d9",
  height: 5870,
  alt_description: "A large glass building surrounded by lots of trees",
  urls: {
    raw: "https://images.unsplash.com/photo-1722707740626-57be242ede9b?ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1722707740626-57be242ede9b?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3&q=85",
    regular: "https://images.unsplash.com/photo-1722707740626-57be242ede9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3&q=80&w=1080",
    small: "https://images.unsplash.com/photo-1722707740626-57be242ede9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3&q=80&w=400",
    thumb: "https://images.unsplash.com/photo-1722707740626-57be242ede9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3&q=80&w=200",
    small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1722707740626-57be242ede9b"
  },
  topics: ["travel", "architecture-interior", "wallpapers"],
  user: {
    first_name: "Tuan",
    last_name: "P.",
    url: "http://instagram.com/tuanzzzz"
  }
}, {
  id: "iDoqpWNMjlw",
  slug: "an-airplane-is-flying-in-the-sky-at-night-iDoqpWNMjlw",
  width: 4000,
  color: "#0c2626",
  height: 6000,
  alt_description: "An airplane is flying in the sky at night",
  urls: {
    raw: "https://images.unsplash.com/photo-1723020495814-dc3f52a67ad6?ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1723020495814-dc3f52a67ad6?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3&q=85",
    regular: "https://images.unsplash.com/photo-1723020495814-dc3f52a67ad6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3&q=80&w=1080",
    small: "https://images.unsplash.com/photo-1723020495814-dc3f52a67ad6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3&q=80&w=400",
    thumb: "https://images.unsplash.com/photo-1723020495814-dc3f52a67ad6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3&q=80&w=200",
    small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1723020495814-dc3f52a67ad6"
  },
  topics: ["travel"],
  user: {
    first_name: "benjamin",
    last_name: "chambon",
    url: "http://instagram.com/benriquo"
  }
}, {
  id: "Rxo1lGGptyM",
  slug: "a-building-with-a-statue-on-top-of-it-Rxo1lGGptyM",
  width: 2832,
  color: "#402626",
  height: 4240,
  alt_description: "A building with a statue on top of it",
  urls: {
    raw: "https://images.unsplash.com/photo-1723078746948-33e8e2d018eb?ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1723078746948-33e8e2d018eb?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3&q=85",
    regular: "https://images.unsplash.com/photo-1723078746948-33e8e2d018eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3&q=80&w=1080",
    small: "https://images.unsplash.com/photo-1723078746948-33e8e2d018eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3&q=80&w=400",
    thumb: "https://images.unsplash.com/photo-1723078746948-33e8e2d018eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3&q=80&w=200",
    small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1723078746948-33e8e2d018eb"
  },
  topics: ["architecture-interior", "archival", "spirituality", "street-photography", "textures-patterns", "travel", "wallpapers"],
  user: {
    first_name: "Dominic Kurniawan",
    last_name: "Suryaputra",
    url: "http://instagram.com/dominicsuryaputra"
  }
}, {
  id: "7P23-H_W5_8",
  slug: "a-snow-covered-mountain-at-night-with-the-moon-in-the-sky-7P23-H_W5_8",
  width: 4909,
  color: "#262626",
  height: 3273,
  alt_description: "A snow covered mountain at night with the moon in the sky",
  urls: {
    raw: "https://images.unsplash.com/photo-1723065456699-dcbf1f55c974?ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1723065456699-dcbf1f55c974?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3&q=85",
    regular: "https://images.unsplash.com/photo-1723065456699-dcbf1f55c974?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3&q=80&w=1080",
    small: "https://images.unsplash.com/photo-1723065456699-dcbf1f55c974?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3&q=80&w=400",
    thumb: "https://images.unsplash.com/photo-1723065456699-dcbf1f55c974?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3&q=80&w=200",
    small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1723065456699-dcbf1f55c974"
  },
  topics: ["experimental", "nature", "spirituality", "travel", "wallpapers"],
  user: {
    first_name: "Slava",
    last_name: "Auchynnikau",
    url: "http://instagram.com/auchynnikau"
  }
}, {
  id: "t51VWizdGqY",
  slug: "the-sun-is-setting-over-the-mountains-in-the-desert-t51VWizdGqY",
  width: 5142,
  color: "#260c0c",
  height: 2892,
  alt_description: "The sun is setting over the mountains in the desert",
  urls: {
    raw: "https://images.unsplash.com/photo-1722973893256-85f1e22dc770?ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1722973893256-85f1e22dc770?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3&q=85",
    regular: "https://images.unsplash.com/photo-1722973893256-85f1e22dc770?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3&q=80&w=1080",
    small: "https://images.unsplash.com/photo-1722973893256-85f1e22dc770?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3&q=80&w=400",
    thumb: "https://images.unsplash.com/photo-1722973893256-85f1e22dc770?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3&q=80&w=200",
    small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1722973893256-85f1e22dc770"
  },
  topics: ["spirituality", "travel", "nature", "wallpapers"],
  user: {
    first_name: "Marek",
    last_name: "Piwnicki",
    url: "https://marpiwnicki.github.io"
  }
}, {
  id: "ohUHbC5X_iU",
  slug: "a-tall-brick-building-with-three-pillars-in-front-of-it-ohUHbC5X_iU",
  width: 3233,
  color: "#c0d9d9",
  height: 4839,
  alt_description: "A tall brick building with three pillars in front of it",
  urls: {
    raw: "https://images.unsplash.com/photo-1723031821045-4387f65e5251?ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1723031821045-4387f65e5251?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3&q=85",
    regular: "https://images.unsplash.com/photo-1723031821045-4387f65e5251?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3&q=80&w=1080",
    small: "https://images.unsplash.com/photo-1723031821045-4387f65e5251?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3&q=80&w=400",
    thumb: "https://images.unsplash.com/photo-1723031821045-4387f65e5251?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3&q=80&w=200",
    small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1723031821045-4387f65e5251"
  },
  topics: ["architecture-interior", "film", "spirituality", "street-photography", "travel"],
  user: {
    first_name: "Artists",
    last_name: "Eyes",
    url: "http://artistseyes.nl"
  }
}, {
  id: "k5DG1cCtCFo",
  slug: "a-group-of-people-standing-in-front-of-a-building-k5DG1cCtCFo",
  width: 5028,
  color: "#c0d9d9",
  height: 3355,
  alt_description: "A group of people standing in front of a building",
  urls: {
    raw: "https://images.unsplash.com/photo-1723031822873-c5e21a878cbd?ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1723031822873-c5e21a878cbd?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3&q=85",
    regular: "https://images.unsplash.com/photo-1723031822873-c5e21a878cbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3&q=80&w=1080",
    small: "https://images.unsplash.com/photo-1723031822873-c5e21a878cbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3&q=80&w=400",
    thumb: "https://images.unsplash.com/photo-1723031822873-c5e21a878cbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3&q=80&w=200",
    small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1723031822873-c5e21a878cbd"
  },
  topics: ["people", "travel", "architecture-interior", "film"],
  user: {
    first_name: "Artists",
    last_name: "Eyes",
    url: "http://artistseyes.nl"
  }
}, {
  id: "qz5Fww4nzfU",
  slug: "a-swimming-pool-with-palm-trees-in-the-background-qz5Fww4nzfU",
  width: 6044,
  color: "#0c73a6",
  height: 8059,
  alt_description: "A swimming pool with palm trees in the background",
  urls: {
    raw: "https://images.unsplash.com/photo-1723029799103-b97ebbb796a9?ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1723029799103-b97ebbb796a9?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3&q=85",
    regular: "https://images.unsplash.com/photo-1723029799103-b97ebbb796a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3&q=80&w=1080",
    small: "https://images.unsplash.com/photo-1723029799103-b97ebbb796a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3&q=80&w=400",
    thumb: "https://images.unsplash.com/photo-1723029799103-b97ebbb796a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3&q=80&w=200",
    small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1723029799103-b97ebbb796a9"
  },
  topics: ["travel"],
  user: {
    first_name: "Junior",
    last_name: null,
    url: "https://www.instagram.com/daybydayjunior"
  }
}, {
  id: "EeqgaNTbHeQ",
  slug: "an-aerial-view-of-a-winding-road-surrounded-by-trees-EeqgaNTbHeQ",
  width: 7008,
  color: "#737340",
  height: 4672,
  alt_description: "An aerial view of a winding road surrounded by trees",
  urls: {
    raw: "https://images.unsplash.com/photo-1723008496138-16c36176e038?ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1723008496138-16c36176e038?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3&q=85",
    regular: "https://images.unsplash.com/photo-1723008496138-16c36176e038?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3&q=80&w=1080",
    small: "https://images.unsplash.com/photo-1723008496138-16c36176e038?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3&q=80&w=400",
    thumb: "https://images.unsplash.com/photo-1723008496138-16c36176e038?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3&q=80&w=200",
    small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1723008496138-16c36176e038"
  },
  topics: ["travel"],
  user: {
    first_name: "JinHui",
    last_name: "CHEN",
    url: "https://www.yuque.com/jimmydaddy"
  }
}, {
  id: "lRq0kAQ_qr4",
  slug: "coconut-palm-tree-and-hammock-by-the-sea-during-daytime-lRq0kAQ_qr4",
  width: 4000,
  color: "#d9d9f3",
  height: 6000,
  alt_description: "coconut palm tree and hammock by the sea during daytime",
  urls: {
    raw: "https://images.unsplash.com/photo-1540280369237-dea08361593a?ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1540280369237-dea08361593a?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3&q=85",
    regular: "https://images.unsplash.com/photo-1540280369237-dea08361593a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3&q=80&w=1080",
    small: "https://images.unsplash.com/photo-1540280369237-dea08361593a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3&q=80&w=400",
    thumb: "https://images.unsplash.com/photo-1540280369237-dea08361593a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3&q=80&w=200",
    small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1540280369237-dea08361593a"
  },
  topics: ["travel", "nature"],
  user: {
    first_name: "Sidhra",
    last_name: "Ibrahim",
    url: "http://instagram.com/Sidhra.mv"
  }
}, {
  id: "-3WBPZgp9dQ",
  slug: "topless-man-over-body-of-water--3WBPZgp9dQ",
  width: 4000,
  color: "#0c2626",
  height: 6000,
  alt_description: "topless man over body of water",
  urls: {
    raw: "https://images.unsplash.com/photo-1526631011044-3fae1501ec7c?ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1526631011044-3fae1501ec7c?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3&q=85",
    regular: "https://images.unsplash.com/photo-1526631011044-3fae1501ec7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3&q=80&w=1080",
    small: "https://images.unsplash.com/photo-1526631011044-3fae1501ec7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3&q=80&w=400",
    thumb: "https://images.unsplash.com/photo-1526631011044-3fae1501ec7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3&q=80&w=200",
    small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1526631011044-3fae1501ec7c"
  },
  topics: ["health", "travel"],
  user: {
    first_name: "Oliver",
    last_name: "Sjöström",
    url: "https://ollivves.com"
  }
}, {
  id: "4VJtrLIi5_c",
  slug: "woman-lying-on-seashore-4VJtrLIi5_c",
  width: 5459,
  color: "#d9a68c",
  height: 3637,
  alt_description: "woman lying on seashore",
  urls: {
    raw: "https://images.unsplash.com/photo-1567115702188-ea12a355f14a?ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1567115702188-ea12a355f14a?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3&q=85",
    regular: "https://images.unsplash.com/photo-1567115702188-ea12a355f14a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3&q=80&w=1080",
    small: "https://images.unsplash.com/photo-1567115702188-ea12a355f14a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3&q=80&w=400",
    thumb: "https://images.unsplash.com/photo-1567115702188-ea12a355f14a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNjgzM3wwfDF8dG9waWN8fEZ6bzN6dU9ITjZ3fHx8fHx8fDE3MjMyNzUzMzh8&ixlib=rb-4.0.3&q=80&w=200",
    small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1567115702188-ea12a355f14a"
  },
  topics: ["travel"],
  user: {
    first_name: "Alonso",
    last_name: "Reyes",
    url: "http://alonsoreyesphotography.com"
  }
}];
const TOPICS = [{
  value: "travel",
  label: "Travel"
}, {
  value: "health",
  label: "Health"
}, {
  value: "nature",
  label: "Nature"
}, {
  value: "people",
  label: "People"
}, {
  value: "architecture-interior",
  label: "Architecture interior"
}, {
  value: "film",
  label: "Film"
}, {
  value: "spirituality",
  label: "Spirituality"
}, {
  value: "street-photography",
  label: "Street photography"
}, {
  value: "wallpapers",
  label: "Wallpapers"
}, {
  value: "experimental",
  label: "Experimental"
}, {
  value: "archival",
  label: "Archival"
}, {
  value: "textures-patterns",
  label: "Textures patterns"
}, {
  value: "sports",
  label: "Sports"
}, {
  value: "business-work",
  label: "Business work"
}, {
  value: "macro-moments",
  label: "Macro moments"
}, {
  value: "color-of-water",
  label: "Color of-water"
}, {
  value: "animals",
  label: "Animals"
}];
const CATEGORIES = [{
  value: "travel",
  label: "Travel"
}, {
  value: "nature",
  label: "Nature"
}, {
  value: "street-photography",
  label: "Street photography"
}, {
  value: "animals",
  label: "Animals"
}];

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0___default()(() => {
  const root = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createRoot)(document.getElementById("add-media-from-third-party-service"));
  root.render( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {}));
});

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   uploadToMediaLibrary: () => (/* binding */ uploadToMediaLibrary)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_media_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/media-utils */ "@wordpress/media-utils");
/* harmony import */ var _wordpress_media_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_media_utils__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */

// https://developer.wordpress.org/block-editor/reference-guides/packages/packages-media-utils/#uploadmedia


/**
 * Helper function to convert image URL to File object
 * @param {*} url
 * @param {*} name
 * @returns
 */
const urlToFileObject = async image => {
  const urlImage = image.urls.raw;
  const name = `${image.slug}.jpg`;
  const response = await fetch(urlImage);
  // here image is url/location of image
  const blob = await response.blob();
  const file = new File([blob], name, {
    type: blob.type
  });
  return file;
};
const isBlobURL = url => {
  if (!url || !url.indexOf) {
    return false;
  }
  return url.indexOf("blob:") === 0;
};
const goToTop = () => {
  window.scrollTo(0, 0);
};
const uploadToMediaLibrary = async ({
  image,
  onSuccessMediaUpload,
  onErrorMediaUpload
}) => {
  const fileImage = await urlToFileObject(image);
  (0,_wordpress_media_utils__WEBPACK_IMPORTED_MODULE_1__.uploadMedia)({
    filesList: [fileImage],
    onFileChange: async ([fileObj]) => {
      if (isBlobURL(fileObj?.url)) {
        return;
      }
      onSuccessMediaUpload(fileObj);
    },
    onError: error => {
      onErrorMediaUpload(error);
    }
  });
  goToTop();
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/remove-accents/index.js":
/*!**********************************************!*\
  !*** ./node_modules/remove-accents/index.js ***!
  \**********************************************/
/***/ ((module) => {

var characterMap = {
	"À": "A",
	"Á": "A",
	"Â": "A",
	"Ã": "A",
	"Ä": "A",
	"Å": "A",
	"Ấ": "A",
	"Ắ": "A",
	"Ẳ": "A",
	"Ẵ": "A",
	"Ặ": "A",
	"Æ": "AE",
	"Ầ": "A",
	"Ằ": "A",
	"Ȃ": "A",
	"Ả": "A",
	"Ạ": "A",
	"Ẩ": "A",
	"Ẫ": "A",
	"Ậ": "A",
	"Ç": "C",
	"Ḉ": "C",
	"È": "E",
	"É": "E",
	"Ê": "E",
	"Ë": "E",
	"Ế": "E",
	"Ḗ": "E",
	"Ề": "E",
	"Ḕ": "E",
	"Ḝ": "E",
	"Ȇ": "E",
	"Ẻ": "E",
	"Ẽ": "E",
	"Ẹ": "E",
	"Ể": "E",
	"Ễ": "E",
	"Ệ": "E",
	"Ì": "I",
	"Í": "I",
	"Î": "I",
	"Ï": "I",
	"Ḯ": "I",
	"Ȋ": "I",
	"Ỉ": "I",
	"Ị": "I",
	"Ð": "D",
	"Ñ": "N",
	"Ò": "O",
	"Ó": "O",
	"Ô": "O",
	"Õ": "O",
	"Ö": "O",
	"Ø": "O",
	"Ố": "O",
	"Ṍ": "O",
	"Ṓ": "O",
	"Ȏ": "O",
	"Ỏ": "O",
	"Ọ": "O",
	"Ổ": "O",
	"Ỗ": "O",
	"Ộ": "O",
	"Ờ": "O",
	"Ở": "O",
	"Ỡ": "O",
	"Ớ": "O",
	"Ợ": "O",
	"Ù": "U",
	"Ú": "U",
	"Û": "U",
	"Ü": "U",
	"Ủ": "U",
	"Ụ": "U",
	"Ử": "U",
	"Ữ": "U",
	"Ự": "U",
	"Ý": "Y",
	"à": "a",
	"á": "a",
	"â": "a",
	"ã": "a",
	"ä": "a",
	"å": "a",
	"ấ": "a",
	"ắ": "a",
	"ẳ": "a",
	"ẵ": "a",
	"ặ": "a",
	"æ": "ae",
	"ầ": "a",
	"ằ": "a",
	"ȃ": "a",
	"ả": "a",
	"ạ": "a",
	"ẩ": "a",
	"ẫ": "a",
	"ậ": "a",
	"ç": "c",
	"ḉ": "c",
	"è": "e",
	"é": "e",
	"ê": "e",
	"ë": "e",
	"ế": "e",
	"ḗ": "e",
	"ề": "e",
	"ḕ": "e",
	"ḝ": "e",
	"ȇ": "e",
	"ẻ": "e",
	"ẽ": "e",
	"ẹ": "e",
	"ể": "e",
	"ễ": "e",
	"ệ": "e",
	"ì": "i",
	"í": "i",
	"î": "i",
	"ï": "i",
	"ḯ": "i",
	"ȋ": "i",
	"ỉ": "i",
	"ị": "i",
	"ð": "d",
	"ñ": "n",
	"ò": "o",
	"ó": "o",
	"ô": "o",
	"õ": "o",
	"ö": "o",
	"ø": "o",
	"ố": "o",
	"ṍ": "o",
	"ṓ": "o",
	"ȏ": "o",
	"ỏ": "o",
	"ọ": "o",
	"ổ": "o",
	"ỗ": "o",
	"ộ": "o",
	"ờ": "o",
	"ở": "o",
	"ỡ": "o",
	"ớ": "o",
	"ợ": "o",
	"ù": "u",
	"ú": "u",
	"û": "u",
	"ü": "u",
	"ủ": "u",
	"ụ": "u",
	"ử": "u",
	"ữ": "u",
	"ự": "u",
	"ý": "y",
	"ÿ": "y",
	"Ā": "A",
	"ā": "a",
	"Ă": "A",
	"ă": "a",
	"Ą": "A",
	"ą": "a",
	"Ć": "C",
	"ć": "c",
	"Ĉ": "C",
	"ĉ": "c",
	"Ċ": "C",
	"ċ": "c",
	"Č": "C",
	"č": "c",
	"C̆": "C",
	"c̆": "c",
	"Ď": "D",
	"ď": "d",
	"Đ": "D",
	"đ": "d",
	"Ē": "E",
	"ē": "e",
	"Ĕ": "E",
	"ĕ": "e",
	"Ė": "E",
	"ė": "e",
	"Ę": "E",
	"ę": "e",
	"Ě": "E",
	"ě": "e",
	"Ĝ": "G",
	"Ǵ": "G",
	"ĝ": "g",
	"ǵ": "g",
	"Ğ": "G",
	"ğ": "g",
	"Ġ": "G",
	"ġ": "g",
	"Ģ": "G",
	"ģ": "g",
	"Ĥ": "H",
	"ĥ": "h",
	"Ħ": "H",
	"ħ": "h",
	"Ḫ": "H",
	"ḫ": "h",
	"Ĩ": "I",
	"ĩ": "i",
	"Ī": "I",
	"ī": "i",
	"Ĭ": "I",
	"ĭ": "i",
	"Į": "I",
	"į": "i",
	"İ": "I",
	"ı": "i",
	"Ĳ": "IJ",
	"ĳ": "ij",
	"Ĵ": "J",
	"ĵ": "j",
	"Ķ": "K",
	"ķ": "k",
	"Ḱ": "K",
	"ḱ": "k",
	"K̆": "K",
	"k̆": "k",
	"Ĺ": "L",
	"ĺ": "l",
	"Ļ": "L",
	"ļ": "l",
	"Ľ": "L",
	"ľ": "l",
	"Ŀ": "L",
	"ŀ": "l",
	"Ł": "l",
	"ł": "l",
	"Ḿ": "M",
	"ḿ": "m",
	"M̆": "M",
	"m̆": "m",
	"Ń": "N",
	"ń": "n",
	"Ņ": "N",
	"ņ": "n",
	"Ň": "N",
	"ň": "n",
	"ŉ": "n",
	"N̆": "N",
	"n̆": "n",
	"Ō": "O",
	"ō": "o",
	"Ŏ": "O",
	"ŏ": "o",
	"Ő": "O",
	"ő": "o",
	"Œ": "OE",
	"œ": "oe",
	"P̆": "P",
	"p̆": "p",
	"Ŕ": "R",
	"ŕ": "r",
	"Ŗ": "R",
	"ŗ": "r",
	"Ř": "R",
	"ř": "r",
	"R̆": "R",
	"r̆": "r",
	"Ȓ": "R",
	"ȓ": "r",
	"Ś": "S",
	"ś": "s",
	"Ŝ": "S",
	"ŝ": "s",
	"Ş": "S",
	"Ș": "S",
	"ș": "s",
	"ş": "s",
	"Š": "S",
	"š": "s",
	"Ţ": "T",
	"ţ": "t",
	"ț": "t",
	"Ț": "T",
	"Ť": "T",
	"ť": "t",
	"Ŧ": "T",
	"ŧ": "t",
	"T̆": "T",
	"t̆": "t",
	"Ũ": "U",
	"ũ": "u",
	"Ū": "U",
	"ū": "u",
	"Ŭ": "U",
	"ŭ": "u",
	"Ů": "U",
	"ů": "u",
	"Ű": "U",
	"ű": "u",
	"Ų": "U",
	"ų": "u",
	"Ȗ": "U",
	"ȗ": "u",
	"V̆": "V",
	"v̆": "v",
	"Ŵ": "W",
	"ŵ": "w",
	"Ẃ": "W",
	"ẃ": "w",
	"X̆": "X",
	"x̆": "x",
	"Ŷ": "Y",
	"ŷ": "y",
	"Ÿ": "Y",
	"Y̆": "Y",
	"y̆": "y",
	"Ź": "Z",
	"ź": "z",
	"Ż": "Z",
	"ż": "z",
	"Ž": "Z",
	"ž": "z",
	"ſ": "s",
	"ƒ": "f",
	"Ơ": "O",
	"ơ": "o",
	"Ư": "U",
	"ư": "u",
	"Ǎ": "A",
	"ǎ": "a",
	"Ǐ": "I",
	"ǐ": "i",
	"Ǒ": "O",
	"ǒ": "o",
	"Ǔ": "U",
	"ǔ": "u",
	"Ǖ": "U",
	"ǖ": "u",
	"Ǘ": "U",
	"ǘ": "u",
	"Ǚ": "U",
	"ǚ": "u",
	"Ǜ": "U",
	"ǜ": "u",
	"Ứ": "U",
	"ứ": "u",
	"Ṹ": "U",
	"ṹ": "u",
	"Ǻ": "A",
	"ǻ": "a",
	"Ǽ": "AE",
	"ǽ": "ae",
	"Ǿ": "O",
	"ǿ": "o",
	"Þ": "TH",
	"þ": "th",
	"Ṕ": "P",
	"ṕ": "p",
	"Ṥ": "S",
	"ṥ": "s",
	"X́": "X",
	"x́": "x",
	"Ѓ": "Г",
	"ѓ": "г",
	"Ќ": "К",
	"ќ": "к",
	"A̋": "A",
	"a̋": "a",
	"E̋": "E",
	"e̋": "e",
	"I̋": "I",
	"i̋": "i",
	"Ǹ": "N",
	"ǹ": "n",
	"Ồ": "O",
	"ồ": "o",
	"Ṑ": "O",
	"ṑ": "o",
	"Ừ": "U",
	"ừ": "u",
	"Ẁ": "W",
	"ẁ": "w",
	"Ỳ": "Y",
	"ỳ": "y",
	"Ȁ": "A",
	"ȁ": "a",
	"Ȅ": "E",
	"ȅ": "e",
	"Ȉ": "I",
	"ȉ": "i",
	"Ȍ": "O",
	"ȍ": "o",
	"Ȑ": "R",
	"ȑ": "r",
	"Ȕ": "U",
	"ȕ": "u",
	"B̌": "B",
	"b̌": "b",
	"Č̣": "C",
	"č̣": "c",
	"Ê̌": "E",
	"ê̌": "e",
	"F̌": "F",
	"f̌": "f",
	"Ǧ": "G",
	"ǧ": "g",
	"Ȟ": "H",
	"ȟ": "h",
	"J̌": "J",
	"ǰ": "j",
	"Ǩ": "K",
	"ǩ": "k",
	"M̌": "M",
	"m̌": "m",
	"P̌": "P",
	"p̌": "p",
	"Q̌": "Q",
	"q̌": "q",
	"Ř̩": "R",
	"ř̩": "r",
	"Ṧ": "S",
	"ṧ": "s",
	"V̌": "V",
	"v̌": "v",
	"W̌": "W",
	"w̌": "w",
	"X̌": "X",
	"x̌": "x",
	"Y̌": "Y",
	"y̌": "y",
	"A̧": "A",
	"a̧": "a",
	"B̧": "B",
	"b̧": "b",
	"Ḑ": "D",
	"ḑ": "d",
	"Ȩ": "E",
	"ȩ": "e",
	"Ɛ̧": "E",
	"ɛ̧": "e",
	"Ḩ": "H",
	"ḩ": "h",
	"I̧": "I",
	"i̧": "i",
	"Ɨ̧": "I",
	"ɨ̧": "i",
	"M̧": "M",
	"m̧": "m",
	"O̧": "O",
	"o̧": "o",
	"Q̧": "Q",
	"q̧": "q",
	"U̧": "U",
	"u̧": "u",
	"X̧": "X",
	"x̧": "x",
	"Z̧": "Z",
	"z̧": "z",
	"й":"и",
	"Й":"И",
	"ё":"е",
	"Ё":"Е",
};

var chars = Object.keys(characterMap).join('|');
var allAccents = new RegExp(chars, 'g');
var firstAccent = new RegExp(chars, '');

function matcher(match) {
	return characterMap[match];
}

var removeAccents = function(string) {
	return string.replace(allAccents, matcher);
};

var hasAccents = function(string) {
	return !!string.match(firstAccent);
};

module.exports = removeAccents;
module.exports.has = hasAccents;
module.exports.remove = removeAccents;


/***/ }),

/***/ "./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {

          'use strict';

/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
}
          var React = __webpack_require__(/*! react */ "react");

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      printWarning('error', format, args);
    }
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    } // eslint-disable-next-line react-internal/safe-string-coercion


    var argsWithFormat = args.map(function (item) {
      return String(item);
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
  ;
}

var objectIs = typeof Object.is === 'function' ? Object.is : is;

// dispatch for CommonJS interop named imports.

var useState = React.useState,
    useEffect = React.useEffect,
    useLayoutEffect = React.useLayoutEffect,
    useDebugValue = React.useDebugValue;
var didWarnOld18Alpha = false;
var didWarnUncachedGetSnapshot = false; // Disclaimer: This shim breaks many of the rules of React, and only works
// because of a very particular set of implementation details and assumptions
// -- change any one of them and it will break. The most important assumption
// is that updates are always synchronous, because concurrent rendering is
// only available in versions of React that also have a built-in
// useSyncExternalStore API. And we only use this shim when the built-in API
// does not exist.
//
// Do not assume that the clever hacks used by this hook also work in general.
// The point of this shim is to replace the need for hacks by other libraries.

function useSyncExternalStore(subscribe, getSnapshot, // Note: The shim does not use getServerSnapshot, because pre-18 versions of
// React do not expose a way to check if we're hydrating. So users of the shim
// will need to track that themselves and return the correct value
// from `getSnapshot`.
getServerSnapshot) {
  {
    if (!didWarnOld18Alpha) {
      if (React.startTransition !== undefined) {
        didWarnOld18Alpha = true;

        error('You are using an outdated, pre-release alpha of React 18 that ' + 'does not support useSyncExternalStore. The ' + 'use-sync-external-store shim will not work correctly. Upgrade ' + 'to a newer pre-release.');
      }
    }
  } // Read the current snapshot from the store on every render. Again, this
  // breaks the rules of React, and only works here because of specific
  // implementation details, most importantly that updates are
  // always synchronous.


  var value = getSnapshot();

  {
    if (!didWarnUncachedGetSnapshot) {
      var cachedValue = getSnapshot();

      if (!objectIs(value, cachedValue)) {
        error('The result of getSnapshot should be cached to avoid an infinite loop');

        didWarnUncachedGetSnapshot = true;
      }
    }
  } // Because updates are synchronous, we don't queue them. Instead we force a
  // re-render whenever the subscribed state changes by updating an some
  // arbitrary useState hook. Then, during render, we call getSnapshot to read
  // the current value.
  //
  // Because we don't actually use the state returned by the useState hook, we
  // can save a bit of memory by storing other stuff in that slot.
  //
  // To implement the early bailout, we need to track some things on a mutable
  // object. Usually, we would put that in a useRef hook, but we can stash it in
  // our useState hook instead.
  //
  // To force a re-render, we call forceUpdate({inst}). That works because the
  // new object always fails an equality check.


  var _useState = useState({
    inst: {
      value: value,
      getSnapshot: getSnapshot
    }
  }),
      inst = _useState[0].inst,
      forceUpdate = _useState[1]; // Track the latest getSnapshot function with a ref. This needs to be updated
  // in the layout phase so we can access it during the tearing check that
  // happens on subscribe.


  useLayoutEffect(function () {
    inst.value = value;
    inst.getSnapshot = getSnapshot; // Whenever getSnapshot or subscribe changes, we need to check in the
    // commit phase if there was an interleaved mutation. In concurrent mode
    // this can happen all the time, but even in synchronous mode, an earlier
    // effect may have mutated the store.

    if (checkIfSnapshotChanged(inst)) {
      // Force a re-render.
      forceUpdate({
        inst: inst
      });
    }
  }, [subscribe, value, getSnapshot]);
  useEffect(function () {
    // Check for changes right before subscribing. Subsequent changes will be
    // detected in the subscription handler.
    if (checkIfSnapshotChanged(inst)) {
      // Force a re-render.
      forceUpdate({
        inst: inst
      });
    }

    var handleStoreChange = function () {
      // TODO: Because there is no cross-renderer API for batching updates, it's
      // up to the consumer of this library to wrap their subscription event
      // with unstable_batchedUpdates. Should we try to detect when this isn't
      // the case and print a warning in development?
      // The store changed. Check if the snapshot changed since the last time we
      // read from the store.
      if (checkIfSnapshotChanged(inst)) {
        // Force a re-render.
        forceUpdate({
          inst: inst
        });
      }
    }; // Subscribe to the store and return a clean-up function.


    return subscribe(handleStoreChange);
  }, [subscribe]);
  useDebugValue(value);
  return value;
}

function checkIfSnapshotChanged(inst) {
  var latestGetSnapshot = inst.getSnapshot;
  var prevValue = inst.value;

  try {
    var nextValue = latestGetSnapshot();
    return !objectIs(prevValue, nextValue);
  } catch (error) {
    return true;
  }
}

function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
  // Note: The shim does not use getServerSnapshot, because pre-18 versions of
  // React do not expose a way to check if we're hydrating. So users of the shim
  // will need to track that themselves and return the correct value
  // from `getSnapshot`.
  return getSnapshot();
}

var canUseDOM = !!(typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined');

var isServerEnvironment = !canUseDOM;

var shim = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore;
var useSyncExternalStore$2 = React.useSyncExternalStore !== undefined ? React.useSyncExternalStore : shim;

exports.useSyncExternalStore = useSyncExternalStore$2;
          /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
}
        
  })();
}


/***/ }),

/***/ "./node_modules/use-sync-external-store/shim/index.js":
/*!************************************************************!*\
  !*** ./node_modules/use-sync-external-store/shim/index.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ../cjs/use-sync-external-store-shim.development.js */ "./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js");
}


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = window["ReactDOM"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["ReactJSXRuntime"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/dom-ready":
/*!**********************************!*\
  !*** external ["wp","domReady"] ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["domReady"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/media-utils":
/*!************************************!*\
  !*** external ["wp","mediaUtils"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["mediaUtils"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "@wordpress/private-apis":
/*!*************************************!*\
  !*** external ["wp","privateApis"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["privateApis"];

/***/ }),

/***/ "@wordpress/warning":
/*!*********************************!*\
  !*** external ["wp","warning"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["warning"];

/***/ }),

/***/ "./node_modules/@ariakit/core/esm/__chunks/3UYWTADI.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ariakit/core/esm/__chunks/3UYWTADI.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createPopoverStore: () => (/* binding */ createPopoverStore)
/* harmony export */ });
/* harmony import */ var _YOHCVXJB_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./YOHCVXJB.js */ "./node_modules/@ariakit/core/esm/__chunks/YOHCVXJB.js");
/* harmony import */ var _EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EQQLU3CG.js */ "./node_modules/@ariakit/core/esm/__chunks/EQQLU3CG.js");
/* harmony import */ var _PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PBFD2E7P.js */ "./node_modules/@ariakit/core/esm/__chunks/PBFD2E7P.js");
/* harmony import */ var _3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./3YLGPPWQ.js */ "./node_modules/@ariakit/core/esm/__chunks/3YLGPPWQ.js");
"use client";





// src/popover/popover-store.ts
function createPopoverStore(_a = {}) {
  var _b = _a, {
    popover: otherPopover
  } = _b, props = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_0__.__objRest)(_b, [
    "popover"
  ]);
  const store = (0,_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_1__.mergeStore)(
    props.store,
    (0,_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_1__.omit)(otherPopover, [
      "arrowElement",
      "anchorElement",
      "contentElement",
      "popoverElement",
      "disclosureElement"
    ])
  );
  (0,_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_1__.throwOnConflictingProps)(props, store);
  const syncState = store == null ? void 0 : store.getState();
  const dialog = (0,_YOHCVXJB_js__WEBPACK_IMPORTED_MODULE_2__.createDialogStore)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_0__.__spreadProps)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_0__.__spreadValues)({}, props), { store }));
  const placement = (0,_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_3__.defaultValue)(
    props.placement,
    syncState == null ? void 0 : syncState.placement,
    "bottom"
  );
  const initialState = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_0__.__spreadProps)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_0__.__spreadValues)({}, dialog.getState()), {
    placement,
    currentPlacement: placement,
    anchorElement: (0,_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_3__.defaultValue)(syncState == null ? void 0 : syncState.anchorElement, null),
    popoverElement: (0,_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_3__.defaultValue)(syncState == null ? void 0 : syncState.popoverElement, null),
    arrowElement: (0,_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_3__.defaultValue)(syncState == null ? void 0 : syncState.arrowElement, null),
    rendered: Symbol("rendered")
  });
  const popover = (0,_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_1__.createStore)(initialState, dialog, store);
  return (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_0__.__spreadProps)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_0__.__spreadValues)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_0__.__spreadValues)({}, dialog), popover), {
    setAnchorElement: (element) => popover.setState("anchorElement", element),
    setPopoverElement: (element) => popover.setState("popoverElement", element),
    setArrowElement: (element) => popover.setState("arrowElement", element),
    render: () => popover.setState("rendered", Symbol("rendered"))
  });
}




/***/ }),

/***/ "./node_modules/@ariakit/core/esm/__chunks/3YLGPPWQ.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ariakit/core/esm/__chunks/3YLGPPWQ.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __objRest: () => (/* binding */ __objRest),
/* harmony export */   __spreadProps: () => (/* binding */ __spreadProps),
/* harmony export */   __spreadValues: () => (/* binding */ __spreadValues)
/* harmony export */ });
"use client";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};




/***/ }),

/***/ "./node_modules/@ariakit/core/esm/__chunks/6DHTHWXD.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ariakit/core/esm/__chunks/6DHTHWXD.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCollectionStore: () => (/* binding */ createCollectionStore)
/* harmony export */ });
/* harmony import */ var _EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EQQLU3CG.js */ "./node_modules/@ariakit/core/esm/__chunks/EQQLU3CG.js");
/* harmony import */ var _PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PBFD2E7P.js */ "./node_modules/@ariakit/core/esm/__chunks/PBFD2E7P.js");
/* harmony import */ var _HWOIWM4O_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HWOIWM4O.js */ "./node_modules/@ariakit/core/esm/__chunks/HWOIWM4O.js");
/* harmony import */ var _3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./3YLGPPWQ.js */ "./node_modules/@ariakit/core/esm/__chunks/3YLGPPWQ.js");
"use client";





// src/collection/collection-store.ts
function isElementPreceding(a, b) {
  return Boolean(
    b.compareDocumentPosition(a) & Node.DOCUMENT_POSITION_PRECEDING
  );
}
function sortBasedOnDOMPosition(items) {
  const pairs = items.map((item, index) => [index, item]);
  let isOrderDifferent = false;
  pairs.sort(([indexA, a], [indexB, b]) => {
    const elementA = a.element;
    const elementB = b.element;
    if (elementA === elementB) return 0;
    if (!elementA || !elementB) return 0;
    if (isElementPreceding(elementA, elementB)) {
      if (indexA > indexB) {
        isOrderDifferent = true;
      }
      return -1;
    }
    if (indexA < indexB) {
      isOrderDifferent = true;
    }
    return 1;
  });
  if (isOrderDifferent) {
    return pairs.map(([_, item]) => item);
  }
  return items;
}
function getCommonParent(items) {
  var _a;
  const firstItem = items.find((item) => !!item.element);
  const lastItem = [...items].reverse().find((item) => !!item.element);
  let parentElement = (_a = firstItem == null ? void 0 : firstItem.element) == null ? void 0 : _a.parentElement;
  while (parentElement && (lastItem == null ? void 0 : lastItem.element)) {
    const parent = parentElement;
    if (lastItem && parent.contains(lastItem.element)) {
      return parentElement;
    }
    parentElement = parentElement.parentElement;
  }
  return (0,_HWOIWM4O_js__WEBPACK_IMPORTED_MODULE_0__.getDocument)(parentElement).body;
}
function getPrivateStore(store) {
  return store == null ? void 0 : store.__unstablePrivateStore;
}
function createCollectionStore(props = {}) {
  var _a;
  (0,_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_1__.throwOnConflictingProps)(props, props.store);
  const syncState = (_a = props.store) == null ? void 0 : _a.getState();
  const items = (0,_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_2__.defaultValue)(
    props.items,
    syncState == null ? void 0 : syncState.items,
    props.defaultItems,
    []
  );
  const itemsMap = new Map(items.map((item) => [item.id, item]));
  const initialState = {
    items,
    renderedItems: (0,_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_2__.defaultValue)(syncState == null ? void 0 : syncState.renderedItems, [])
  };
  const syncPrivateStore = getPrivateStore(props.store);
  const privateStore = (0,_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_1__.createStore)(
    { items, renderedItems: initialState.renderedItems },
    syncPrivateStore
  );
  const collection = (0,_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_1__.createStore)(initialState, props.store);
  const sortItems = (renderedItems) => {
    const sortedItems = sortBasedOnDOMPosition(renderedItems);
    privateStore.setState("renderedItems", sortedItems);
    collection.setState("renderedItems", sortedItems);
  };
  (0,_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_1__.setup)(collection, () => (0,_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_1__.init)(privateStore));
  (0,_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_1__.setup)(privateStore, () => {
    return (0,_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_1__.batch)(privateStore, ["items"], (state) => {
      collection.setState("items", state.items);
    });
  });
  (0,_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_1__.setup)(privateStore, () => {
    return (0,_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_1__.batch)(privateStore, ["renderedItems"], (state) => {
      let firstRun = true;
      let raf = requestAnimationFrame(() => {
        const { renderedItems } = collection.getState();
        if (state.renderedItems === renderedItems) return;
        sortItems(state.renderedItems);
      });
      if (typeof IntersectionObserver !== "function") {
        return () => cancelAnimationFrame(raf);
      }
      const ioCallback = () => {
        if (firstRun) {
          firstRun = false;
          return;
        }
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => sortItems(state.renderedItems));
      };
      const root = getCommonParent(state.renderedItems);
      const observer = new IntersectionObserver(ioCallback, { root });
      for (const item of state.renderedItems) {
        if (!item.element) continue;
        observer.observe(item.element);
      }
      return () => {
        cancelAnimationFrame(raf);
        observer.disconnect();
      };
    });
  });
  const mergeItem = (item, setItems, canDeleteFromMap = false) => {
    let prevItem;
    setItems((items2) => {
      const index = items2.findIndex(({ id }) => id === item.id);
      const nextItems = items2.slice();
      if (index !== -1) {
        prevItem = items2[index];
        const nextItem = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_3__.__spreadValues)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_3__.__spreadValues)({}, prevItem), item);
        nextItems[index] = nextItem;
        itemsMap.set(item.id, nextItem);
      } else {
        nextItems.push(item);
        itemsMap.set(item.id, item);
      }
      return nextItems;
    });
    const unmergeItem = () => {
      setItems((items2) => {
        if (!prevItem) {
          if (canDeleteFromMap) {
            itemsMap.delete(item.id);
          }
          return items2.filter(({ id }) => id !== item.id);
        }
        const index = items2.findIndex(({ id }) => id === item.id);
        if (index === -1) return items2;
        const nextItems = items2.slice();
        nextItems[index] = prevItem;
        itemsMap.set(item.id, prevItem);
        return nextItems;
      });
    };
    return unmergeItem;
  };
  const registerItem = (item) => mergeItem(
    item,
    (getItems) => privateStore.setState("items", getItems),
    true
  );
  return (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_3__.__spreadProps)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_3__.__spreadValues)({}, collection), {
    registerItem,
    renderItem: (item) => (0,_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_2__.chain)(
      registerItem(item),
      mergeItem(
        item,
        (getItems) => privateStore.setState("renderedItems", getItems)
      )
    ),
    item: (id) => {
      if (!id) return null;
      let item = itemsMap.get(id);
      if (!item) {
        const { items: items2 } = collection.getState();
        item = items2.find((item2) => item2.id === id);
        if (item) {
          itemsMap.set(id, item);
        }
      }
      return item || null;
    },
    // @ts-expect-error Internal
    __unstablePrivateStore: privateStore
  });
}




/***/ }),

/***/ "./node_modules/@ariakit/core/esm/__chunks/6E4KKOSB.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ariakit/core/esm/__chunks/6E4KKOSB.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDisclosureStore: () => (/* binding */ createDisclosureStore)
/* harmony export */ });
/* harmony import */ var _EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EQQLU3CG.js */ "./node_modules/@ariakit/core/esm/__chunks/EQQLU3CG.js");
/* harmony import */ var _PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PBFD2E7P.js */ "./node_modules/@ariakit/core/esm/__chunks/PBFD2E7P.js");
/* harmony import */ var _3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./3YLGPPWQ.js */ "./node_modules/@ariakit/core/esm/__chunks/3YLGPPWQ.js");
"use client";




// src/disclosure/disclosure-store.ts
function createDisclosureStore(props = {}) {
  const store = (0,_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_0__.mergeStore)(
    props.store,
    (0,_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_0__.omit)(props.disclosure, ["contentElement", "disclosureElement"])
  );
  (0,_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_0__.throwOnConflictingProps)(props, store);
  const syncState = store == null ? void 0 : store.getState();
  const open = (0,_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_1__.defaultValue)(
    props.open,
    syncState == null ? void 0 : syncState.open,
    props.defaultOpen,
    false
  );
  const animated = (0,_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_1__.defaultValue)(props.animated, syncState == null ? void 0 : syncState.animated, false);
  const initialState = {
    open,
    animated,
    animating: !!animated && open,
    mounted: open,
    contentElement: (0,_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_1__.defaultValue)(syncState == null ? void 0 : syncState.contentElement, null),
    disclosureElement: (0,_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_1__.defaultValue)(syncState == null ? void 0 : syncState.disclosureElement, null)
  };
  const disclosure = (0,_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_0__.createStore)(initialState, store);
  (0,_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_0__.setup)(
    disclosure,
    () => (0,_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_0__.sync)(disclosure, ["animated", "animating"], (state) => {
      if (state.animated) return;
      disclosure.setState("animating", false);
    })
  );
  (0,_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_0__.setup)(
    disclosure,
    () => (0,_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_0__.subscribe)(disclosure, ["open"], () => {
      if (!disclosure.getState().animated) return;
      disclosure.setState("animating", true);
    })
  );
  (0,_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_0__.setup)(
    disclosure,
    () => (0,_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_0__.sync)(disclosure, ["open", "animating"], (state) => {
      disclosure.setState("mounted", state.open || state.animating);
    })
  );
  return (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__.__spreadProps)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__.__spreadValues)({}, disclosure), {
    disclosure: props.disclosure,
    setOpen: (value) => disclosure.setState("open", value),
    show: () => disclosure.setState("open", true),
    hide: () => disclosure.setState("open", false),
    toggle: () => disclosure.setState("open", (open2) => !open2),
    stopAnimation: () => disclosure.setState("animating", false),
    setContentElement: (value) => disclosure.setState("contentElement", value),
    setDisclosureElement: (value) => disclosure.setState("disclosureElement", value)
  });
}




/***/ }),

/***/ "./node_modules/@ariakit/core/esm/__chunks/7PRQYBBV.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ariakit/core/esm/__chunks/7PRQYBBV.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addItemToArray: () => (/* binding */ addItemToArray),
/* harmony export */   flatten2DArray: () => (/* binding */ flatten2DArray),
/* harmony export */   reverseArray: () => (/* binding */ reverseArray),
/* harmony export */   toArray: () => (/* binding */ toArray)
/* harmony export */ });
"use client";

// src/utils/array.ts
function toArray(arg) {
  if (Array.isArray(arg)) {
    return arg;
  }
  return typeof arg !== "undefined" ? [arg] : [];
}
function addItemToArray(array, item, index = -1) {
  if (!(index in array)) {
    return [...array, item];
  }
  return [...array.slice(0, index), item, ...array.slice(index)];
}
function flatten2DArray(array) {
  const flattened = [];
  for (const row of array) {
    flattened.push(...row);
  }
  return flattened;
}
function reverseArray(array) {
  return array.slice().reverse();
}




/***/ }),

/***/ "./node_modules/@ariakit/core/esm/__chunks/D7EIQZAU.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ariakit/core/esm/__chunks/D7EIQZAU.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCompositeStore: () => (/* binding */ createCompositeStore)
/* harmony export */ });
/* harmony import */ var _6DHTHWXD_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./6DHTHWXD.js */ "./node_modules/@ariakit/core/esm/__chunks/6DHTHWXD.js");
/* harmony import */ var _7PRQYBBV_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./7PRQYBBV.js */ "./node_modules/@ariakit/core/esm/__chunks/7PRQYBBV.js");
/* harmony import */ var _EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EQQLU3CG.js */ "./node_modules/@ariakit/core/esm/__chunks/EQQLU3CG.js");
/* harmony import */ var _PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PBFD2E7P.js */ "./node_modules/@ariakit/core/esm/__chunks/PBFD2E7P.js");
/* harmony import */ var _3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./3YLGPPWQ.js */ "./node_modules/@ariakit/core/esm/__chunks/3YLGPPWQ.js");
"use client";






// src/composite/composite-store.ts
var NULL_ITEM = { id: null };
function findFirstEnabledItem(items, excludeId) {
  return items.find((item) => {
    if (excludeId) {
      return !item.disabled && item.id !== excludeId;
    }
    return !item.disabled;
  });
}
function getEnabledItems(items, excludeId) {
  return items.filter((item) => {
    if (excludeId) {
      return !item.disabled && item.id !== excludeId;
    }
    return !item.disabled;
  });
}
function getOppositeOrientation(orientation) {
  if (orientation === "vertical") return "horizontal";
  if (orientation === "horizontal") return "vertical";
  return;
}
function getItemsInRow(items, rowId) {
  return items.filter((item) => item.rowId === rowId);
}
function flipItems(items, activeId, shouldInsertNullItem = false) {
  const index = items.findIndex((item) => item.id === activeId);
  return [
    ...items.slice(index + 1),
    ...shouldInsertNullItem ? [NULL_ITEM] : [],
    ...items.slice(0, index)
  ];
}
function groupItemsByRows(items) {
  const rows = [];
  for (const item of items) {
    const row = rows.find((currentRow) => {
      var _a;
      return ((_a = currentRow[0]) == null ? void 0 : _a.rowId) === item.rowId;
    });
    if (row) {
      row.push(item);
    } else {
      rows.push([item]);
    }
  }
  return rows;
}
function getMaxRowLength(array) {
  let maxLength = 0;
  for (const { length } of array) {
    if (length > maxLength) {
      maxLength = length;
    }
  }
  return maxLength;
}
function createEmptyItem(rowId) {
  return {
    id: "__EMPTY_ITEM__",
    disabled: true,
    rowId
  };
}
function normalizeRows(rows, activeId, focusShift) {
  const maxLength = getMaxRowLength(rows);
  for (const row of rows) {
    for (let i = 0; i < maxLength; i += 1) {
      const item = row[i];
      if (!item || focusShift && item.disabled) {
        const isFirst = i === 0;
        const previousItem = isFirst && focusShift ? findFirstEnabledItem(row) : row[i - 1];
        row[i] = previousItem && activeId !== previousItem.id && focusShift ? previousItem : createEmptyItem(previousItem == null ? void 0 : previousItem.rowId);
      }
    }
  }
  return rows;
}
function verticalizeItems(items) {
  const rows = groupItemsByRows(items);
  const maxLength = getMaxRowLength(rows);
  const verticalized = [];
  for (let i = 0; i < maxLength; i += 1) {
    for (const row of rows) {
      const item = row[i];
      if (item) {
        verticalized.push((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_0__.__spreadProps)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_0__.__spreadValues)({}, item), {
          // If there's no rowId, it means that it's not a grid composite, but
          // a single row instead. So, instead of verticalizing it, that is,
          // assigning a different rowId based on the column index, we keep it
          // undefined so they will be part of the same row. This is useful
          // when using up/down on one-dimensional composites.
          rowId: item.rowId ? `${i}` : void 0
        }));
      }
    }
  }
  return verticalized;
}
function createCompositeStore(props = {}) {
  var _a;
  const syncState = (_a = props.store) == null ? void 0 : _a.getState();
  const collection = (0,_6DHTHWXD_js__WEBPACK_IMPORTED_MODULE_1__.createCollectionStore)(props);
  const activeId = (0,_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_2__.defaultValue)(
    props.activeId,
    syncState == null ? void 0 : syncState.activeId,
    props.defaultActiveId
  );
  const initialState = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_0__.__spreadProps)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_0__.__spreadValues)({}, collection.getState()), {
    activeId,
    baseElement: (0,_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_2__.defaultValue)(syncState == null ? void 0 : syncState.baseElement, null),
    includesBaseElement: (0,_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_2__.defaultValue)(
      props.includesBaseElement,
      syncState == null ? void 0 : syncState.includesBaseElement,
      activeId === null
    ),
    moves: (0,_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_2__.defaultValue)(syncState == null ? void 0 : syncState.moves, 0),
    orientation: (0,_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_2__.defaultValue)(
      props.orientation,
      syncState == null ? void 0 : syncState.orientation,
      "both"
    ),
    rtl: (0,_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_2__.defaultValue)(props.rtl, syncState == null ? void 0 : syncState.rtl, false),
    virtualFocus: (0,_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_2__.defaultValue)(
      props.virtualFocus,
      syncState == null ? void 0 : syncState.virtualFocus,
      false
    ),
    focusLoop: (0,_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_2__.defaultValue)(props.focusLoop, syncState == null ? void 0 : syncState.focusLoop, false),
    focusWrap: (0,_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_2__.defaultValue)(props.focusWrap, syncState == null ? void 0 : syncState.focusWrap, false),
    focusShift: (0,_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_2__.defaultValue)(props.focusShift, syncState == null ? void 0 : syncState.focusShift, false)
  });
  const composite = (0,_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_3__.createStore)(initialState, collection, props.store);
  (0,_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_3__.setup)(
    composite,
    () => (0,_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_3__.sync)(composite, ["renderedItems", "activeId"], (state) => {
      composite.setState("activeId", (activeId2) => {
        var _a2;
        if (activeId2 !== void 0) return activeId2;
        return (_a2 = findFirstEnabledItem(state.renderedItems)) == null ? void 0 : _a2.id;
      });
    })
  );
  const getNextId = (items, orientation, hasNullItem, skip) => {
    var _a2, _b;
    const { activeId: activeId2, rtl, focusLoop, focusWrap, includesBaseElement } = composite.getState();
    const isHorizontal = orientation !== "vertical";
    const isRTL = rtl && isHorizontal;
    const allItems = isRTL ? (0,_7PRQYBBV_js__WEBPACK_IMPORTED_MODULE_4__.reverseArray)(items) : items;
    if (activeId2 == null) {
      return (_a2 = findFirstEnabledItem(allItems)) == null ? void 0 : _a2.id;
    }
    const activeItem = allItems.find((item) => item.id === activeId2);
    if (!activeItem) {
      return (_b = findFirstEnabledItem(allItems)) == null ? void 0 : _b.id;
    }
    const isGrid = !!activeItem.rowId;
    const activeIndex = allItems.indexOf(activeItem);
    const nextItems = allItems.slice(activeIndex + 1);
    const nextItemsInRow = getItemsInRow(nextItems, activeItem.rowId);
    if (skip !== void 0) {
      const nextEnabledItemsInRow = getEnabledItems(nextItemsInRow, activeId2);
      const nextItem2 = nextEnabledItemsInRow.slice(skip)[0] || // If we can't find an item, just return the last one.
      nextEnabledItemsInRow[nextEnabledItemsInRow.length - 1];
      return nextItem2 == null ? void 0 : nextItem2.id;
    }
    const oppositeOrientation = getOppositeOrientation(
      // If it's a grid and orientation is not set, it's a next/previous call,
      // which is inherently horizontal. up/down will call next with orientation
      // set to vertical by default (see below on up/down methods).
      isGrid ? orientation || "horizontal" : orientation
    );
    const canLoop = focusLoop && focusLoop !== oppositeOrientation;
    const canWrap = isGrid && focusWrap && focusWrap !== oppositeOrientation;
    hasNullItem = hasNullItem || !isGrid && canLoop && includesBaseElement;
    if (canLoop) {
      const loopItems = canWrap && !hasNullItem ? allItems : getItemsInRow(allItems, activeItem.rowId);
      const sortedItems = flipItems(loopItems, activeId2, hasNullItem);
      const nextItem2 = findFirstEnabledItem(sortedItems, activeId2);
      return nextItem2 == null ? void 0 : nextItem2.id;
    }
    if (canWrap) {
      const nextItem2 = findFirstEnabledItem(
        // We can use nextItems, which contains all the next items, including
        // items from other rows, to wrap between rows. However, if there is a
        // null item (the composite container), we'll only use the next items in
        // the row. So moving next from the last item will focus on the
        // composite container. On grid composites, horizontal navigation never
        // focuses on the composite container, only vertical.
        hasNullItem ? nextItemsInRow : nextItems,
        activeId2
      );
      const nextId = hasNullItem ? (nextItem2 == null ? void 0 : nextItem2.id) || null : nextItem2 == null ? void 0 : nextItem2.id;
      return nextId;
    }
    const nextItem = findFirstEnabledItem(nextItemsInRow, activeId2);
    if (!nextItem && hasNullItem) {
      return null;
    }
    return nextItem == null ? void 0 : nextItem.id;
  };
  return (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_0__.__spreadProps)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_0__.__spreadValues)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_0__.__spreadValues)({}, collection), composite), {
    setBaseElement: (element) => composite.setState("baseElement", element),
    setActiveId: (id) => composite.setState("activeId", id),
    move: (id) => {
      if (id === void 0) return;
      composite.setState("activeId", id);
      composite.setState("moves", (moves) => moves + 1);
    },
    first: () => {
      var _a2;
      return (_a2 = findFirstEnabledItem(composite.getState().renderedItems)) == null ? void 0 : _a2.id;
    },
    last: () => {
      var _a2;
      return (_a2 = findFirstEnabledItem((0,_7PRQYBBV_js__WEBPACK_IMPORTED_MODULE_4__.reverseArray)(composite.getState().renderedItems))) == null ? void 0 : _a2.id;
    },
    next: (skip) => {
      const { renderedItems, orientation } = composite.getState();
      return getNextId(renderedItems, orientation, false, skip);
    },
    previous: (skip) => {
      var _a2;
      const { renderedItems, orientation, includesBaseElement } = composite.getState();
      const isGrid = !!((_a2 = findFirstEnabledItem(renderedItems)) == null ? void 0 : _a2.rowId);
      const hasNullItem = !isGrid && includesBaseElement;
      return getNextId(
        (0,_7PRQYBBV_js__WEBPACK_IMPORTED_MODULE_4__.reverseArray)(renderedItems),
        orientation,
        hasNullItem,
        skip
      );
    },
    down: (skip) => {
      const {
        activeId: activeId2,
        renderedItems,
        focusShift,
        focusLoop,
        includesBaseElement
      } = composite.getState();
      const shouldShift = focusShift && !skip;
      const verticalItems = verticalizeItems(
        (0,_7PRQYBBV_js__WEBPACK_IMPORTED_MODULE_4__.flatten2DArray)(
          normalizeRows(groupItemsByRows(renderedItems), activeId2, shouldShift)
        )
      );
      const canLoop = focusLoop && focusLoop !== "horizontal";
      const hasNullItem = canLoop && includesBaseElement;
      return getNextId(verticalItems, "vertical", hasNullItem, skip);
    },
    up: (skip) => {
      const { activeId: activeId2, renderedItems, focusShift, includesBaseElement } = composite.getState();
      const shouldShift = focusShift && !skip;
      const verticalItems = verticalizeItems(
        (0,_7PRQYBBV_js__WEBPACK_IMPORTED_MODULE_4__.reverseArray)(
          (0,_7PRQYBBV_js__WEBPACK_IMPORTED_MODULE_4__.flatten2DArray)(
            normalizeRows(
              groupItemsByRows(renderedItems),
              activeId2,
              shouldShift
            )
          )
        )
      );
      const hasNullItem = includesBaseElement;
      return getNextId(verticalItems, "vertical", hasNullItem, skip);
    }
  });
}




/***/ }),

/***/ "./node_modules/@ariakit/core/esm/__chunks/EQQLU3CG.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ariakit/core/esm/__chunks/EQQLU3CG.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   batch: () => (/* binding */ batch),
/* harmony export */   createStore: () => (/* binding */ createStore),
/* harmony export */   init: () => (/* binding */ init),
/* harmony export */   mergeStore: () => (/* binding */ mergeStore),
/* harmony export */   omit: () => (/* binding */ omit2),
/* harmony export */   pick: () => (/* binding */ pick2),
/* harmony export */   setup: () => (/* binding */ setup),
/* harmony export */   subscribe: () => (/* binding */ subscribe),
/* harmony export */   sync: () => (/* binding */ sync),
/* harmony export */   throwOnConflictingProps: () => (/* binding */ throwOnConflictingProps)
/* harmony export */ });
/* harmony import */ var _PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PBFD2E7P.js */ "./node_modules/@ariakit/core/esm/__chunks/PBFD2E7P.js");
/* harmony import */ var _3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./3YLGPPWQ.js */ "./node_modules/@ariakit/core/esm/__chunks/3YLGPPWQ.js");
"use client";



// src/utils/store.ts
function getInternal(store, key) {
  const internals = store.__unstableInternals;
  (0,_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(internals, "Invalid store");
  return internals[key];
}
function createStore(initialState, ...stores) {
  let state = initialState;
  let prevStateBatch = state;
  let lastUpdate = Symbol();
  let destroy = _PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_0__.noop;
  const instances = /* @__PURE__ */ new Set();
  const updatedKeys = /* @__PURE__ */ new Set();
  const setups = /* @__PURE__ */ new Set();
  const listeners = /* @__PURE__ */ new Set();
  const batchListeners = /* @__PURE__ */ new Set();
  const disposables = /* @__PURE__ */ new WeakMap();
  const listenerKeys = /* @__PURE__ */ new WeakMap();
  const storeSetup = (callback) => {
    setups.add(callback);
    return () => setups.delete(callback);
  };
  const storeInit = () => {
    const initialized = instances.size;
    const instance = Symbol();
    instances.add(instance);
    const maybeDestroy = () => {
      instances.delete(instance);
      if (instances.size) return;
      destroy();
    };
    if (initialized) return maybeDestroy;
    const desyncs = (0,_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_0__.getKeys)(state).map(
      (key) => (0,_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_0__.chain)(
        ...stores.map((store) => {
          var _a;
          const storeState = (_a = store == null ? void 0 : store.getState) == null ? void 0 : _a.call(store);
          if (!storeState) return;
          if (!(0,_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_0__.hasOwnProperty)(storeState, key)) return;
          return sync(store, [key], (state2) => {
            setState(
              key,
              state2[key],
              // @ts-expect-error - Not public API. This is just to prevent
              // infinite loops.
              true
            );
          });
        })
      )
    );
    const teardowns = [];
    for (const setup2 of setups) {
      teardowns.push(setup2());
    }
    const cleanups = stores.map(init);
    destroy = (0,_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_0__.chain)(...desyncs, ...teardowns, ...cleanups);
    return maybeDestroy;
  };
  const sub = (keys, listener, set = listeners) => {
    set.add(listener);
    listenerKeys.set(listener, keys);
    return () => {
      var _a;
      (_a = disposables.get(listener)) == null ? void 0 : _a();
      disposables.delete(listener);
      listenerKeys.delete(listener);
      set.delete(listener);
    };
  };
  const storeSubscribe = (keys, listener) => sub(keys, listener);
  const storeSync = (keys, listener) => {
    disposables.set(listener, listener(state, state));
    return sub(keys, listener);
  };
  const storeBatch = (keys, listener) => {
    disposables.set(listener, listener(state, prevStateBatch));
    return sub(keys, listener, batchListeners);
  };
  const storePick = (keys) => createStore((0,_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_0__.pick)(state, keys), finalStore);
  const storeOmit = (keys) => createStore((0,_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_0__.omit)(state, keys), finalStore);
  const getState = () => state;
  const setState = (key, value, fromStores = false) => {
    var _a;
    if (!(0,_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_0__.hasOwnProperty)(state, key)) return;
    const nextValue = (0,_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_0__.applyState)(value, state[key]);
    if (nextValue === state[key]) return;
    if (!fromStores) {
      for (const store of stores) {
        (_a = store == null ? void 0 : store.setState) == null ? void 0 : _a.call(store, key, nextValue);
      }
    }
    const prevState = state;
    state = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_1__.__spreadProps)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_1__.__spreadValues)({}, state), { [key]: nextValue });
    const thisUpdate = Symbol();
    lastUpdate = thisUpdate;
    updatedKeys.add(key);
    const run = (listener, prev, uKeys) => {
      var _a2;
      const keys = listenerKeys.get(listener);
      const updated = (k) => uKeys ? uKeys.has(k) : k === key;
      if (!keys || keys.some(updated)) {
        (_a2 = disposables.get(listener)) == null ? void 0 : _a2();
        disposables.set(listener, listener(state, prev));
      }
    };
    for (const listener of listeners) {
      run(listener, prevState);
    }
    queueMicrotask(() => {
      if (lastUpdate !== thisUpdate) return;
      const snapshot = state;
      for (const listener of batchListeners) {
        run(listener, prevStateBatch, updatedKeys);
      }
      prevStateBatch = snapshot;
      updatedKeys.clear();
    });
  };
  const finalStore = {
    getState,
    setState,
    __unstableInternals: {
      setup: storeSetup,
      init: storeInit,
      subscribe: storeSubscribe,
      sync: storeSync,
      batch: storeBatch,
      pick: storePick,
      omit: storeOmit
    }
  };
  return finalStore;
}
function setup(store, ...args) {
  if (!store) return;
  return getInternal(store, "setup")(...args);
}
function init(store, ...args) {
  if (!store) return;
  return getInternal(store, "init")(...args);
}
function subscribe(store, ...args) {
  if (!store) return;
  return getInternal(store, "subscribe")(...args);
}
function sync(store, ...args) {
  if (!store) return;
  return getInternal(store, "sync")(...args);
}
function batch(store, ...args) {
  if (!store) return;
  return getInternal(store, "batch")(...args);
}
function omit2(store, ...args) {
  if (!store) return;
  return getInternal(store, "omit")(...args);
}
function pick2(store, ...args) {
  if (!store) return;
  return getInternal(store, "pick")(...args);
}
function mergeStore(...stores) {
  const initialState = stores.reduce((state, store2) => {
    var _a;
    const nextState = (_a = store2 == null ? void 0 : store2.getState) == null ? void 0 : _a.call(store2);
    if (!nextState) return state;
    return Object.assign(state, nextState);
  }, {});
  const store = createStore(initialState, ...stores);
  return store;
}
function throwOnConflictingProps(props, store) {
  if (false) {}
  if (!store) return;
  const defaultKeys = Object.entries(props).filter(([key, value]) => key.startsWith("default") && value !== void 0).map(([key]) => {
    var _a;
    const stateKey = key.replace("default", "");
    return `${((_a = stateKey[0]) == null ? void 0 : _a.toLowerCase()) || ""}${stateKey.slice(1)}`;
  });
  if (!defaultKeys.length) return;
  const storeState = store.getState();
  const conflictingProps = defaultKeys.filter(
    (key) => (0,_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_0__.hasOwnProperty)(storeState, key)
  );
  if (!conflictingProps.length) return;
  throw new Error(
    `Passing a store prop in conjunction with a default state is not supported.

const store = useSelectStore();
<SelectProvider store={store} defaultValue="Apple" />
                ^             ^

Instead, pass the default state to the topmost store:

const store = useSelectStore({ defaultValue: "Apple" });
<SelectProvider store={store} />

See https://github.com/ariakit/ariakit/pull/2745 for more details.

If there's a particular need for this, please submit a feature request at https://github.com/ariakit/ariakit
`
  );
}




/***/ }),

/***/ "./node_modules/@ariakit/core/esm/__chunks/HWOIWM4O.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ariakit/core/esm/__chunks/HWOIWM4O.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   canUseDOM: () => (/* binding */ canUseDOM),
/* harmony export */   contains: () => (/* binding */ contains),
/* harmony export */   getActiveElement: () => (/* binding */ getActiveElement),
/* harmony export */   getDocument: () => (/* binding */ getDocument),
/* harmony export */   getPopupItemRole: () => (/* binding */ getPopupItemRole),
/* harmony export */   getPopupRole: () => (/* binding */ getPopupRole),
/* harmony export */   getScrollingElement: () => (/* binding */ getScrollingElement),
/* harmony export */   getTextboxSelection: () => (/* binding */ getTextboxSelection),
/* harmony export */   getTextboxValue: () => (/* binding */ getTextboxValue),
/* harmony export */   getWindow: () => (/* binding */ getWindow),
/* harmony export */   isButton: () => (/* binding */ isButton),
/* harmony export */   isFrame: () => (/* binding */ isFrame),
/* harmony export */   isPartiallyHidden: () => (/* binding */ isPartiallyHidden),
/* harmony export */   isTextField: () => (/* binding */ isTextField),
/* harmony export */   isTextbox: () => (/* binding */ isTextbox),
/* harmony export */   isVisible: () => (/* binding */ isVisible),
/* harmony export */   scrollIntoViewIfNeeded: () => (/* binding */ scrollIntoViewIfNeeded),
/* harmony export */   setSelectionRange: () => (/* binding */ setSelectionRange)
/* harmony export */ });
"use client";

// src/utils/dom.ts
var canUseDOM = checkIsBrowser();
function checkIsBrowser() {
  var _a;
  return typeof window !== "undefined" && !!((_a = window.document) == null ? void 0 : _a.createElement);
}
function getDocument(node) {
  return node ? node.ownerDocument || node : document;
}
function getWindow(node) {
  return getDocument(node).defaultView || window;
}
function getActiveElement(node, activeDescendant = false) {
  const { activeElement } = getDocument(node);
  if (!(activeElement == null ? void 0 : activeElement.nodeName)) {
    return null;
  }
  if (isFrame(activeElement) && activeElement.contentDocument) {
    return getActiveElement(
      activeElement.contentDocument.body,
      activeDescendant
    );
  }
  if (activeDescendant) {
    const id = activeElement.getAttribute("aria-activedescendant");
    if (id) {
      const element = getDocument(activeElement).getElementById(id);
      if (element) {
        return element;
      }
    }
  }
  return activeElement;
}
function contains(parent, child) {
  return parent === child || parent.contains(child);
}
function isFrame(element) {
  return element.tagName === "IFRAME";
}
function isButton(element) {
  const tagName = element.tagName.toLowerCase();
  if (tagName === "button") return true;
  if (tagName === "input" && element.type) {
    return buttonInputTypes.indexOf(element.type) !== -1;
  }
  return false;
}
var buttonInputTypes = [
  "button",
  "color",
  "file",
  "image",
  "reset",
  "submit"
];
function isVisible(element) {
  if (typeof element.checkVisibility === "function") {
    return element.checkVisibility();
  }
  const htmlElement = element;
  return htmlElement.offsetWidth > 0 || htmlElement.offsetHeight > 0 || element.getClientRects().length > 0;
}
function isTextField(element) {
  try {
    const isTextInput = element instanceof HTMLInputElement && element.selectionStart !== null;
    const isTextArea = element.tagName === "TEXTAREA";
    return isTextInput || isTextArea || false;
  } catch (error) {
    return false;
  }
}
function isTextbox(element) {
  return element.isContentEditable || isTextField(element);
}
function getTextboxValue(element) {
  if (isTextField(element)) {
    return element.value;
  }
  if (element.isContentEditable) {
    const range = getDocument(element).createRange();
    range.selectNodeContents(element);
    return range.toString();
  }
  return "";
}
function getTextboxSelection(element) {
  let start = 0;
  let end = 0;
  if (isTextField(element)) {
    start = element.selectionStart || 0;
    end = element.selectionEnd || 0;
  } else if (element.isContentEditable) {
    const selection = getDocument(element).getSelection();
    if ((selection == null ? void 0 : selection.rangeCount) && selection.anchorNode && contains(element, selection.anchorNode) && selection.focusNode && contains(element, selection.focusNode)) {
      const range = selection.getRangeAt(0);
      const nextRange = range.cloneRange();
      nextRange.selectNodeContents(element);
      nextRange.setEnd(range.startContainer, range.startOffset);
      start = nextRange.toString().length;
      nextRange.setEnd(range.endContainer, range.endOffset);
      end = nextRange.toString().length;
    }
  }
  return { start, end };
}
function getPopupRole(element, fallback) {
  const allowedPopupRoles = ["dialog", "menu", "listbox", "tree", "grid"];
  const role = element == null ? void 0 : element.getAttribute("role");
  if (role && allowedPopupRoles.indexOf(role) !== -1) {
    return role;
  }
  return fallback;
}
function getPopupItemRole(element, fallback) {
  var _a;
  const itemRoleByPopupRole = {
    menu: "menuitem",
    listbox: "option",
    tree: "treeitem"
  };
  const popupRole = getPopupRole(element);
  if (!popupRole) return fallback;
  const key = popupRole;
  return (_a = itemRoleByPopupRole[key]) != null ? _a : fallback;
}
function scrollIntoViewIfNeeded(element, arg) {
  if (isPartiallyHidden(element) && "scrollIntoView" in element) {
    element.scrollIntoView(arg);
  }
}
function getScrollingElement(element) {
  if (!element) return null;
  if (element.clientHeight && element.scrollHeight > element.clientHeight) {
    const { overflowY } = getComputedStyle(element);
    const isScrollable = overflowY !== "visible" && overflowY !== "hidden";
    if (isScrollable) return element;
  } else if (element.clientWidth && element.scrollWidth > element.clientWidth) {
    const { overflowX } = getComputedStyle(element);
    const isScrollable = overflowX !== "visible" && overflowX !== "hidden";
    if (isScrollable) return element;
  }
  return getScrollingElement(element.parentElement) || document.scrollingElement || document.body;
}
function isPartiallyHidden(element) {
  const elementRect = element.getBoundingClientRect();
  const scroller = getScrollingElement(element);
  if (!scroller) return false;
  const scrollerRect = scroller.getBoundingClientRect();
  const isHTML = scroller.tagName === "HTML";
  const scrollerTop = isHTML ? scrollerRect.top + scroller.scrollTop : scrollerRect.top;
  const scrollerBottom = isHTML ? scroller.clientHeight : scrollerRect.bottom;
  const scrollerLeft = isHTML ? scrollerRect.left + scroller.scrollLeft : scrollerRect.left;
  const scrollerRight = isHTML ? scroller.clientWidth : scrollerRect.right;
  const top = elementRect.top < scrollerTop;
  const left = elementRect.left < scrollerLeft;
  const bottom = elementRect.bottom > scrollerBottom;
  const right = elementRect.right > scrollerRight;
  return top || left || bottom || right;
}
function setSelectionRange(element, ...args) {
  if (/text|search|password|tel|url/i.test(element.type)) {
    element.setSelectionRange(...args);
  }
}




/***/ }),

/***/ "./node_modules/@ariakit/core/esm/__chunks/PBFD2E7P.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ariakit/core/esm/__chunks/PBFD2E7P.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   afterPaint: () => (/* binding */ afterPaint),
/* harmony export */   applyState: () => (/* binding */ applyState),
/* harmony export */   beforePaint: () => (/* binding */ beforePaint),
/* harmony export */   chain: () => (/* binding */ chain),
/* harmony export */   cx: () => (/* binding */ cx),
/* harmony export */   defaultValue: () => (/* binding */ defaultValue),
/* harmony export */   disabledFromProps: () => (/* binding */ disabledFromProps),
/* harmony export */   getKeys: () => (/* binding */ getKeys),
/* harmony export */   hasOwnProperty: () => (/* binding */ hasOwnProperty),
/* harmony export */   identity: () => (/* binding */ identity),
/* harmony export */   invariant: () => (/* binding */ invariant),
/* harmony export */   isEmpty: () => (/* binding */ isEmpty),
/* harmony export */   isFalsyBooleanCallback: () => (/* binding */ isFalsyBooleanCallback),
/* harmony export */   isInteger: () => (/* binding */ isInteger),
/* harmony export */   isObject: () => (/* binding */ isObject),
/* harmony export */   noop: () => (/* binding */ noop),
/* harmony export */   normalizeString: () => (/* binding */ normalizeString),
/* harmony export */   omit: () => (/* binding */ omit),
/* harmony export */   pick: () => (/* binding */ pick),
/* harmony export */   removeUndefinedValues: () => (/* binding */ removeUndefinedValues),
/* harmony export */   shallowEqual: () => (/* binding */ shallowEqual)
/* harmony export */ });
/* harmony import */ var _3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./3YLGPPWQ.js */ "./node_modules/@ariakit/core/esm/__chunks/3YLGPPWQ.js");
"use client";


// src/utils/misc.ts
function noop(..._) {
}
function shallowEqual(a, b) {
  if (a === b) return true;
  if (!a) return false;
  if (!b) return false;
  if (typeof a !== "object") return false;
  if (typeof b !== "object") return false;
  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);
  const { length } = aKeys;
  if (bKeys.length !== length) return false;
  for (const key of aKeys) {
    if (a[key] !== b[key]) {
      return false;
    }
  }
  return true;
}
function applyState(argument, currentValue) {
  if (isUpdater(argument)) {
    const value = isLazyValue(currentValue) ? currentValue() : currentValue;
    return argument(value);
  }
  return argument;
}
function isUpdater(argument) {
  return typeof argument === "function";
}
function isLazyValue(value) {
  return typeof value === "function";
}
function isObject(arg) {
  return typeof arg === "object" && arg != null;
}
function isEmpty(arg) {
  if (Array.isArray(arg)) return !arg.length;
  if (isObject(arg)) return !Object.keys(arg).length;
  if (arg == null) return true;
  if (arg === "") return true;
  return false;
}
function isInteger(arg) {
  if (typeof arg === "number") {
    return Math.floor(arg) === arg;
  }
  return String(Math.floor(Number(arg))) === arg;
}
function hasOwnProperty(object, prop) {
  if (typeof Object.hasOwn === "function") {
    return Object.hasOwn(object, prop);
  }
  return Object.prototype.hasOwnProperty.call(object, prop);
}
function chain(...fns) {
  return (...args) => {
    for (const fn of fns) {
      if (typeof fn === "function") {
        fn(...args);
      }
    }
  };
}
function cx(...args) {
  return args.filter(Boolean).join(" ") || void 0;
}
function normalizeString(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function omit(object, keys) {
  const result = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_0__.__spreadValues)({}, object);
  for (const key of keys) {
    if (hasOwnProperty(result, key)) {
      delete result[key];
    }
  }
  return result;
}
function pick(object, paths) {
  const result = {};
  for (const key of paths) {
    if (hasOwnProperty(object, key)) {
      result[key] = object[key];
    }
  }
  return result;
}
function identity(value) {
  return value;
}
function beforePaint(cb = noop) {
  const raf = requestAnimationFrame(cb);
  return () => cancelAnimationFrame(raf);
}
function afterPaint(cb = noop) {
  let raf = requestAnimationFrame(() => {
    raf = requestAnimationFrame(cb);
  });
  return () => cancelAnimationFrame(raf);
}
function invariant(condition, message) {
  if (condition) return;
  if (typeof message !== "string") throw new Error("Invariant failed");
  throw new Error(message);
}
function getKeys(obj) {
  return Object.keys(obj);
}
function isFalsyBooleanCallback(booleanOrCallback, ...args) {
  const result = typeof booleanOrCallback === "function" ? booleanOrCallback(...args) : booleanOrCallback;
  if (result == null) return false;
  return !result;
}
function disabledFromProps(props) {
  return props.disabled || props["aria-disabled"] === true || props["aria-disabled"] === "true";
}
function removeUndefinedValues(obj) {
  const result = {};
  for (const key in obj) {
    if (obj[key] !== void 0) {
      result[key] = obj[key];
    }
  }
  return result;
}
function defaultValue(...values) {
  for (const value of values) {
    if (value !== void 0) return value;
  }
  return void 0;
}




/***/ }),

/***/ "./node_modules/@ariakit/core/esm/__chunks/US4USQPI.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ariakit/core/esm/__chunks/US4USQPI.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isApple: () => (/* binding */ isApple),
/* harmony export */   isFirefox: () => (/* binding */ isFirefox),
/* harmony export */   isMac: () => (/* binding */ isMac),
/* harmony export */   isSafari: () => (/* binding */ isSafari),
/* harmony export */   isTouchDevice: () => (/* binding */ isTouchDevice)
/* harmony export */ });
/* harmony import */ var _HWOIWM4O_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HWOIWM4O.js */ "./node_modules/@ariakit/core/esm/__chunks/HWOIWM4O.js");
"use client";


// src/utils/platform.ts
function isTouchDevice() {
  return _HWOIWM4O_js__WEBPACK_IMPORTED_MODULE_0__.canUseDOM && !!navigator.maxTouchPoints;
}
function isApple() {
  if (!_HWOIWM4O_js__WEBPACK_IMPORTED_MODULE_0__.canUseDOM) return false;
  return /mac|iphone|ipad|ipod/i.test(navigator.platform);
}
function isSafari() {
  return _HWOIWM4O_js__WEBPACK_IMPORTED_MODULE_0__.canUseDOM && isApple() && /apple/i.test(navigator.vendor);
}
function isFirefox() {
  return _HWOIWM4O_js__WEBPACK_IMPORTED_MODULE_0__.canUseDOM && /firefox\//i.test(navigator.userAgent);
}
function isMac() {
  return _HWOIWM4O_js__WEBPACK_IMPORTED_MODULE_0__.canUseDOM && navigator.platform.startsWith("Mac") && !isTouchDevice();
}




/***/ }),

/***/ "./node_modules/@ariakit/core/esm/__chunks/YOHCVXJB.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ariakit/core/esm/__chunks/YOHCVXJB.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDialogStore: () => (/* binding */ createDialogStore)
/* harmony export */ });
/* harmony import */ var _6E4KKOSB_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./6E4KKOSB.js */ "./node_modules/@ariakit/core/esm/__chunks/6E4KKOSB.js");
"use client";


// src/dialog/dialog-store.ts
function createDialogStore(props = {}) {
  return (0,_6E4KKOSB_js__WEBPACK_IMPORTED_MODULE_0__.createDisclosureStore)(props);
}




/***/ }),

/***/ "./node_modules/@ariakit/core/esm/combobox/combobox-store.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ariakit/core/esm/combobox/combobox-store.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createComboboxStore: () => (/* binding */ createComboboxStore)
/* harmony export */ });
/* harmony import */ var _chunks_D7EIQZAU_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../__chunks/D7EIQZAU.js */ "./node_modules/@ariakit/core/esm/__chunks/D7EIQZAU.js");
/* harmony import */ var _chunks_3UYWTADI_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../__chunks/3UYWTADI.js */ "./node_modules/@ariakit/core/esm/__chunks/3UYWTADI.js");
/* harmony import */ var _chunks_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../__chunks/EQQLU3CG.js */ "./node_modules/@ariakit/core/esm/__chunks/EQQLU3CG.js");
/* harmony import */ var _chunks_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../__chunks/PBFD2E7P.js */ "./node_modules/@ariakit/core/esm/__chunks/PBFD2E7P.js");
/* harmony import */ var _chunks_US4USQPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../__chunks/US4USQPI.js */ "./node_modules/@ariakit/core/esm/__chunks/US4USQPI.js");
/* harmony import */ var _chunks_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../__chunks/3YLGPPWQ.js */ "./node_modules/@ariakit/core/esm/__chunks/3YLGPPWQ.js");
"use client";












// src/combobox/combobox-store.ts
var isTouchSafari = (0,_chunks_US4USQPI_js__WEBPACK_IMPORTED_MODULE_0__.isSafari)() && (0,_chunks_US4USQPI_js__WEBPACK_IMPORTED_MODULE_0__.isTouchDevice)();
function createComboboxStore(_a = {}) {
  var _b = _a, {
    tag
  } = _b, props = (0,_chunks_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_1__.__objRest)(_b, [
    "tag"
  ]);
  const store = (0,_chunks_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_2__.mergeStore)(props.store, (0,_chunks_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_2__.pick)(tag, ["value", "rtl"]));
  (0,_chunks_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_2__.throwOnConflictingProps)(props, store);
  const tagState = tag == null ? void 0 : tag.getState();
  const syncState = store == null ? void 0 : store.getState();
  const activeId = (0,_chunks_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_3__.defaultValue)(
    props.activeId,
    syncState == null ? void 0 : syncState.activeId,
    props.defaultActiveId,
    null
  );
  const composite = (0,_chunks_D7EIQZAU_js__WEBPACK_IMPORTED_MODULE_4__.createCompositeStore)((0,_chunks_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_1__.__spreadProps)((0,_chunks_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_1__.__spreadValues)({}, props), {
    activeId,
    includesBaseElement: (0,_chunks_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_3__.defaultValue)(
      props.includesBaseElement,
      syncState == null ? void 0 : syncState.includesBaseElement,
      true
    ),
    orientation: (0,_chunks_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_3__.defaultValue)(
      props.orientation,
      syncState == null ? void 0 : syncState.orientation,
      "vertical"
    ),
    focusLoop: (0,_chunks_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_3__.defaultValue)(props.focusLoop, syncState == null ? void 0 : syncState.focusLoop, true),
    focusWrap: (0,_chunks_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_3__.defaultValue)(props.focusWrap, syncState == null ? void 0 : syncState.focusWrap, true),
    virtualFocus: (0,_chunks_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_3__.defaultValue)(
      props.virtualFocus,
      syncState == null ? void 0 : syncState.virtualFocus,
      true
    )
  }));
  const popover = (0,_chunks_3UYWTADI_js__WEBPACK_IMPORTED_MODULE_5__.createPopoverStore)((0,_chunks_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_1__.__spreadProps)((0,_chunks_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_1__.__spreadValues)({}, props), {
    placement: (0,_chunks_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_3__.defaultValue)(
      props.placement,
      syncState == null ? void 0 : syncState.placement,
      "bottom-start"
    )
  }));
  const value = (0,_chunks_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_3__.defaultValue)(
    props.value,
    syncState == null ? void 0 : syncState.value,
    props.defaultValue,
    ""
  );
  const selectedValue = (0,_chunks_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_3__.defaultValue)(
    props.selectedValue,
    syncState == null ? void 0 : syncState.selectedValue,
    tagState == null ? void 0 : tagState.values,
    props.defaultSelectedValue,
    ""
  );
  const multiSelectable = Array.isArray(selectedValue);
  const initialState = (0,_chunks_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_1__.__spreadProps)((0,_chunks_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_1__.__spreadValues)((0,_chunks_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_1__.__spreadValues)({}, composite.getState()), popover.getState()), {
    value,
    selectedValue,
    resetValueOnSelect: (0,_chunks_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_3__.defaultValue)(
      props.resetValueOnSelect,
      syncState == null ? void 0 : syncState.resetValueOnSelect,
      multiSelectable
    ),
    resetValueOnHide: (0,_chunks_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_3__.defaultValue)(
      props.resetValueOnHide,
      syncState == null ? void 0 : syncState.resetValueOnHide,
      multiSelectable && !tag
    ),
    activeValue: syncState == null ? void 0 : syncState.activeValue
  });
  const combobox = (0,_chunks_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_2__.createStore)(initialState, composite, popover, store);
  if (isTouchSafari) {
    (0,_chunks_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_2__.setup)(
      combobox,
      () => (0,_chunks_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_2__.sync)(combobox, ["virtualFocus"], () => {
        combobox.setState("virtualFocus", false);
      })
    );
  }
  (0,_chunks_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_2__.setup)(combobox, () => {
    if (!tag) return;
    return (0,_chunks_PBFD2E7P_js__WEBPACK_IMPORTED_MODULE_3__.chain)(
      (0,_chunks_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_2__.sync)(combobox, ["selectedValue"], (state) => {
        if (!Array.isArray(state.selectedValue)) return;
        tag.setValues(state.selectedValue);
      }),
      (0,_chunks_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_2__.sync)(tag, ["values"], (state) => {
        combobox.setState("selectedValue", state.values);
      })
    );
  });
  (0,_chunks_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_2__.setup)(
    combobox,
    () => (0,_chunks_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_2__.sync)(combobox, ["resetValueOnHide", "mounted"], (state) => {
      if (!state.resetValueOnHide) return;
      if (state.mounted) return;
      combobox.setState("value", value);
    })
  );
  (0,_chunks_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_2__.setup)(
    combobox,
    () => (0,_chunks_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_2__.batch)(combobox, ["mounted"], (state) => {
      if (state.mounted) return;
      combobox.setState("activeId", activeId);
      combobox.setState("moves", 0);
    })
  );
  (0,_chunks_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_2__.setup)(
    combobox,
    () => (0,_chunks_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_2__.sync)(combobox, ["moves", "activeId"], (state, prevState) => {
      if (state.moves === prevState.moves) {
        combobox.setState("activeValue", void 0);
      }
    })
  );
  (0,_chunks_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_2__.setup)(
    combobox,
    () => (0,_chunks_EQQLU3CG_js__WEBPACK_IMPORTED_MODULE_2__.batch)(combobox, ["moves", "renderedItems"], (state, prev) => {
      if (state.moves === prev.moves) return;
      const { activeId: activeId2 } = combobox.getState();
      const activeItem = composite.item(activeId2);
      combobox.setState("activeValue", activeItem == null ? void 0 : activeItem.value);
    })
  );
  return (0,_chunks_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_1__.__spreadProps)((0,_chunks_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_1__.__spreadValues)((0,_chunks_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_1__.__spreadValues)((0,_chunks_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_1__.__spreadValues)({}, popover), composite), combobox), {
    tag,
    setValue: (value2) => combobox.setState("value", value2),
    resetValue: () => combobox.setState("value", initialState.value),
    setSelectedValue: (selectedValue2) => combobox.setState("selectedValue", selectedValue2)
  });
}



/***/ }),

/***/ "./node_modules/@ariakit/core/esm/utils/events.js":
/*!********************************************************!*\
  !*** ./node_modules/@ariakit/core/esm/utils/events.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addGlobalEventListener: () => (/* binding */ addGlobalEventListener),
/* harmony export */   fireBlurEvent: () => (/* binding */ fireBlurEvent),
/* harmony export */   fireClickEvent: () => (/* binding */ fireClickEvent),
/* harmony export */   fireEvent: () => (/* binding */ fireEvent),
/* harmony export */   fireFocusEvent: () => (/* binding */ fireFocusEvent),
/* harmony export */   fireKeyboardEvent: () => (/* binding */ fireKeyboardEvent),
/* harmony export */   getInputType: () => (/* binding */ getInputType),
/* harmony export */   isDownloading: () => (/* binding */ isDownloading),
/* harmony export */   isFocusEventOutside: () => (/* binding */ isFocusEventOutside),
/* harmony export */   isOpeningInNewTab: () => (/* binding */ isOpeningInNewTab),
/* harmony export */   isPortalEvent: () => (/* binding */ isPortalEvent),
/* harmony export */   isSelfTarget: () => (/* binding */ isSelfTarget),
/* harmony export */   queueBeforeEvent: () => (/* binding */ queueBeforeEvent)
/* harmony export */ });
/* harmony import */ var _chunks_US4USQPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../__chunks/US4USQPI.js */ "./node_modules/@ariakit/core/esm/__chunks/US4USQPI.js");
/* harmony import */ var _chunks_HWOIWM4O_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../__chunks/HWOIWM4O.js */ "./node_modules/@ariakit/core/esm/__chunks/HWOIWM4O.js");
/* harmony import */ var _chunks_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../__chunks/3YLGPPWQ.js */ "./node_modules/@ariakit/core/esm/__chunks/3YLGPPWQ.js");
"use client";




// src/utils/events.ts
function isPortalEvent(event) {
  return Boolean(
    event.currentTarget && !(0,_chunks_HWOIWM4O_js__WEBPACK_IMPORTED_MODULE_0__.contains)(event.currentTarget, event.target)
  );
}
function isSelfTarget(event) {
  return event.target === event.currentTarget;
}
function isOpeningInNewTab(event) {
  const element = event.currentTarget;
  if (!element) return false;
  const isAppleDevice = (0,_chunks_US4USQPI_js__WEBPACK_IMPORTED_MODULE_1__.isApple)();
  if (isAppleDevice && !event.metaKey) return false;
  if (!isAppleDevice && !event.ctrlKey) return false;
  const tagName = element.tagName.toLowerCase();
  if (tagName === "a") return true;
  if (tagName === "button" && element.type === "submit") return true;
  if (tagName === "input" && element.type === "submit") return true;
  return false;
}
function isDownloading(event) {
  const element = event.currentTarget;
  if (!element) return false;
  const tagName = element.tagName.toLowerCase();
  if (!event.altKey) return false;
  if (tagName === "a") return true;
  if (tagName === "button" && element.type === "submit") return true;
  if (tagName === "input" && element.type === "submit") return true;
  return false;
}
function fireEvent(element, type, eventInit) {
  const event = new Event(type, eventInit);
  return element.dispatchEvent(event);
}
function fireBlurEvent(element, eventInit) {
  const event = new FocusEvent("blur", eventInit);
  const defaultAllowed = element.dispatchEvent(event);
  const bubbleInit = (0,_chunks_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__.__spreadProps)((0,_chunks_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__.__spreadValues)({}, eventInit), { bubbles: true });
  element.dispatchEvent(new FocusEvent("focusout", bubbleInit));
  return defaultAllowed;
}
function fireFocusEvent(element, eventInit) {
  const event = new FocusEvent("focus", eventInit);
  const defaultAllowed = element.dispatchEvent(event);
  const bubbleInit = (0,_chunks_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__.__spreadProps)((0,_chunks_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__.__spreadValues)({}, eventInit), { bubbles: true });
  element.dispatchEvent(new FocusEvent("focusin", bubbleInit));
  return defaultAllowed;
}
function fireKeyboardEvent(element, type, eventInit) {
  const event = new KeyboardEvent(type, eventInit);
  return element.dispatchEvent(event);
}
function fireClickEvent(element, eventInit) {
  const event = new MouseEvent("click", eventInit);
  return element.dispatchEvent(event);
}
function isFocusEventOutside(event, container) {
  const containerElement = container || event.currentTarget;
  const relatedTarget = event.relatedTarget;
  return !relatedTarget || !(0,_chunks_HWOIWM4O_js__WEBPACK_IMPORTED_MODULE_0__.contains)(containerElement, relatedTarget);
}
function getInputType(event) {
  const nativeEvent = "nativeEvent" in event ? event.nativeEvent : event;
  if (!nativeEvent) return;
  if (!("inputType" in nativeEvent)) return;
  if (typeof nativeEvent.inputType !== "string") return;
  return nativeEvent.inputType;
}
function queueBeforeEvent(element, type, callback, timeout) {
  const createTimer = (callback2) => {
    if (timeout) {
      const timerId2 = setTimeout(callback2, timeout);
      return () => clearTimeout(timerId2);
    }
    const timerId = requestAnimationFrame(callback2);
    return () => cancelAnimationFrame(timerId);
  };
  const cancelTimer = createTimer(() => {
    element.removeEventListener(type, callSync, true);
    callback();
  });
  const callSync = () => {
    cancelTimer();
    callback();
  };
  element.addEventListener(type, callSync, { once: true, capture: true });
  return cancelTimer;
}
function addGlobalEventListener(type, listener, options, scope = window) {
  const children = [];
  try {
    scope.document.addEventListener(type, listener, options);
    for (const frame of Array.from(scope.frames)) {
      children.push(addGlobalEventListener(type, listener, options, frame));
    }
  } catch (e) {
  }
  const removeEventListener = () => {
    try {
      scope.document.removeEventListener(type, listener, options);
    } catch (e) {
    }
    for (const remove of children) {
      remove();
    }
  };
  return removeEventListener;
}



/***/ }),

/***/ "./node_modules/@ariakit/core/esm/utils/focus.js":
/*!*******************************************************!*\
  !*** ./node_modules/@ariakit/core/esm/utils/focus.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   disableFocus: () => (/* binding */ disableFocus),
/* harmony export */   disableFocusIn: () => (/* binding */ disableFocusIn),
/* harmony export */   focusIfNeeded: () => (/* binding */ focusIfNeeded),
/* harmony export */   focusIntoView: () => (/* binding */ focusIntoView),
/* harmony export */   getAllFocusable: () => (/* binding */ getAllFocusable),
/* harmony export */   getAllFocusableIn: () => (/* binding */ getAllFocusableIn),
/* harmony export */   getAllTabbable: () => (/* binding */ getAllTabbable),
/* harmony export */   getAllTabbableIn: () => (/* binding */ getAllTabbableIn),
/* harmony export */   getClosestFocusable: () => (/* binding */ getClosestFocusable),
/* harmony export */   getFirstFocusable: () => (/* binding */ getFirstFocusable),
/* harmony export */   getFirstFocusableIn: () => (/* binding */ getFirstFocusableIn),
/* harmony export */   getFirstTabbable: () => (/* binding */ getFirstTabbable),
/* harmony export */   getFirstTabbableIn: () => (/* binding */ getFirstTabbableIn),
/* harmony export */   getLastTabbable: () => (/* binding */ getLastTabbable),
/* harmony export */   getLastTabbableIn: () => (/* binding */ getLastTabbableIn),
/* harmony export */   getNextTabbable: () => (/* binding */ getNextTabbable),
/* harmony export */   getNextTabbableIn: () => (/* binding */ getNextTabbableIn),
/* harmony export */   getPreviousTabbable: () => (/* binding */ getPreviousTabbable),
/* harmony export */   getPreviousTabbableIn: () => (/* binding */ getPreviousTabbableIn),
/* harmony export */   hasFocus: () => (/* binding */ hasFocus),
/* harmony export */   hasFocusWithin: () => (/* binding */ hasFocusWithin),
/* harmony export */   isFocusable: () => (/* binding */ isFocusable),
/* harmony export */   isTabbable: () => (/* binding */ isTabbable),
/* harmony export */   restoreFocusIn: () => (/* binding */ restoreFocusIn)
/* harmony export */ });
/* harmony import */ var _chunks_HWOIWM4O_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../__chunks/HWOIWM4O.js */ "./node_modules/@ariakit/core/esm/__chunks/HWOIWM4O.js");
/* harmony import */ var _chunks_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../__chunks/3YLGPPWQ.js */ "./node_modules/@ariakit/core/esm/__chunks/3YLGPPWQ.js");
"use client";



// src/utils/focus.ts
var selector = "input:not([type='hidden']):not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], button:not([disabled]), [tabindex], summary, iframe, object, embed, area[href], audio[controls], video[controls], [contenteditable]:not([contenteditable='false'])";
function hasNegativeTabIndex(element) {
  const tabIndex = Number.parseInt(element.getAttribute("tabindex") || "0", 10);
  return tabIndex < 0;
}
function isFocusable(element) {
  if (!element.matches(selector)) return false;
  if (!(0,_chunks_HWOIWM4O_js__WEBPACK_IMPORTED_MODULE_0__.isVisible)(element)) return false;
  if (element.closest("[inert]")) return false;
  return true;
}
function isTabbable(element) {
  if (!isFocusable(element)) return false;
  if (hasNegativeTabIndex(element)) return false;
  if (!("form" in element)) return true;
  if (!element.form) return true;
  if (element.checked) return true;
  if (element.type !== "radio") return true;
  const radioGroup = element.form.elements.namedItem(element.name);
  if (!radioGroup) return true;
  if (!("length" in radioGroup)) return true;
  const activeElement = (0,_chunks_HWOIWM4O_js__WEBPACK_IMPORTED_MODULE_0__.getActiveElement)(element);
  if (!activeElement) return true;
  if (activeElement === element) return true;
  if (!("form" in activeElement)) return true;
  if (activeElement.form !== element.form) return true;
  if (activeElement.name !== element.name) return true;
  return false;
}
function getAllFocusableIn(container, includeContainer) {
  const elements = Array.from(
    container.querySelectorAll(selector)
  );
  if (includeContainer) {
    elements.unshift(container);
  }
  const focusableElements = elements.filter(isFocusable);
  focusableElements.forEach((element, i) => {
    if ((0,_chunks_HWOIWM4O_js__WEBPACK_IMPORTED_MODULE_0__.isFrame)(element) && element.contentDocument) {
      const frameBody = element.contentDocument.body;
      focusableElements.splice(i, 1, ...getAllFocusableIn(frameBody));
    }
  });
  return focusableElements;
}
function getAllFocusable(includeBody) {
  return getAllFocusableIn(document.body, includeBody);
}
function getFirstFocusableIn(container, includeContainer) {
  const [first] = getAllFocusableIn(container, includeContainer);
  return first || null;
}
function getFirstFocusable(includeBody) {
  return getFirstFocusableIn(document.body, includeBody);
}
function getAllTabbableIn(container, includeContainer, fallbackToFocusable) {
  const elements = Array.from(
    container.querySelectorAll(selector)
  );
  const tabbableElements = elements.filter(isTabbable);
  if (includeContainer && isTabbable(container)) {
    tabbableElements.unshift(container);
  }
  tabbableElements.forEach((element, i) => {
    if ((0,_chunks_HWOIWM4O_js__WEBPACK_IMPORTED_MODULE_0__.isFrame)(element) && element.contentDocument) {
      const frameBody = element.contentDocument.body;
      const allFrameTabbable = getAllTabbableIn(
        frameBody,
        false,
        fallbackToFocusable
      );
      tabbableElements.splice(i, 1, ...allFrameTabbable);
    }
  });
  if (!tabbableElements.length && fallbackToFocusable) {
    return elements;
  }
  return tabbableElements;
}
function getAllTabbable(fallbackToFocusable) {
  return getAllTabbableIn(document.body, false, fallbackToFocusable);
}
function getFirstTabbableIn(container, includeContainer, fallbackToFocusable) {
  const [first] = getAllTabbableIn(
    container,
    includeContainer,
    fallbackToFocusable
  );
  return first || null;
}
function getFirstTabbable(fallbackToFocusable) {
  return getFirstTabbableIn(document.body, false, fallbackToFocusable);
}
function getLastTabbableIn(container, includeContainer, fallbackToFocusable) {
  const allTabbable = getAllTabbableIn(
    container,
    includeContainer,
    fallbackToFocusable
  );
  return allTabbable[allTabbable.length - 1] || null;
}
function getLastTabbable(fallbackToFocusable) {
  return getLastTabbableIn(document.body, false, fallbackToFocusable);
}
function getNextTabbableIn(container, includeContainer, fallbackToFirst, fallbackToFocusable) {
  const activeElement = (0,_chunks_HWOIWM4O_js__WEBPACK_IMPORTED_MODULE_0__.getActiveElement)(container);
  const allFocusable = getAllFocusableIn(container, includeContainer);
  const activeIndex = allFocusable.indexOf(activeElement);
  const nextFocusableElements = allFocusable.slice(activeIndex + 1);
  return nextFocusableElements.find(isTabbable) || (fallbackToFirst ? allFocusable.find(isTabbable) : null) || (fallbackToFocusable ? nextFocusableElements[0] : null) || null;
}
function getNextTabbable(fallbackToFirst, fallbackToFocusable) {
  return getNextTabbableIn(
    document.body,
    false,
    fallbackToFirst,
    fallbackToFocusable
  );
}
function getPreviousTabbableIn(container, includeContainer, fallbackToLast, fallbackToFocusable) {
  const activeElement = (0,_chunks_HWOIWM4O_js__WEBPACK_IMPORTED_MODULE_0__.getActiveElement)(container);
  const allFocusable = getAllFocusableIn(container, includeContainer).reverse();
  const activeIndex = allFocusable.indexOf(activeElement);
  const previousFocusableElements = allFocusable.slice(activeIndex + 1);
  return previousFocusableElements.find(isTabbable) || (fallbackToLast ? allFocusable.find(isTabbable) : null) || (fallbackToFocusable ? previousFocusableElements[0] : null) || null;
}
function getPreviousTabbable(fallbackToFirst, fallbackToFocusable) {
  return getPreviousTabbableIn(
    document.body,
    false,
    fallbackToFirst,
    fallbackToFocusable
  );
}
function getClosestFocusable(element) {
  while (element && !isFocusable(element)) {
    element = element.closest(selector);
  }
  return element || null;
}
function hasFocus(element) {
  const activeElement = (0,_chunks_HWOIWM4O_js__WEBPACK_IMPORTED_MODULE_0__.getActiveElement)(element);
  if (!activeElement) return false;
  if (activeElement === element) return true;
  const activeDescendant = activeElement.getAttribute("aria-activedescendant");
  if (!activeDescendant) return false;
  return activeDescendant === element.id;
}
function hasFocusWithin(element) {
  const activeElement = (0,_chunks_HWOIWM4O_js__WEBPACK_IMPORTED_MODULE_0__.getActiveElement)(element);
  if (!activeElement) return false;
  if ((0,_chunks_HWOIWM4O_js__WEBPACK_IMPORTED_MODULE_0__.contains)(element, activeElement)) return true;
  const activeDescendant = activeElement.getAttribute("aria-activedescendant");
  if (!activeDescendant) return false;
  if (!("id" in element)) return false;
  if (activeDescendant === element.id) return true;
  return !!element.querySelector(`#${CSS.escape(activeDescendant)}`);
}
function focusIfNeeded(element) {
  if (!hasFocusWithin(element) && isFocusable(element)) {
    element.focus();
  }
}
function disableFocus(element) {
  var _a;
  const currentTabindex = (_a = element.getAttribute("tabindex")) != null ? _a : "";
  element.setAttribute("data-tabindex", currentTabindex);
  element.setAttribute("tabindex", "-1");
}
function disableFocusIn(container, includeContainer) {
  const tabbableElements = getAllTabbableIn(container, includeContainer);
  for (const element of tabbableElements) {
    disableFocus(element);
  }
}
function restoreFocusIn(container) {
  const elements = container.querySelectorAll("[data-tabindex]");
  const restoreTabIndex = (element) => {
    const tabindex = element.getAttribute("data-tabindex");
    element.removeAttribute("data-tabindex");
    if (tabindex) {
      element.setAttribute("tabindex", tabindex);
    } else {
      element.removeAttribute("tabindex");
    }
  };
  if (container.hasAttribute("data-tabindex")) {
    restoreTabIndex(container);
  }
  for (const element of elements) {
    restoreTabIndex(element);
  }
}
function focusIntoView(element, options) {
  if (!("scrollIntoView" in element)) {
    element.focus();
  } else {
    element.focus({ preventScroll: true });
    element.scrollIntoView((0,_chunks_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_1__.__spreadValues)({ block: "nearest", inline: "nearest" }, options));
  }
}



/***/ }),

/***/ "./node_modules/@ariakit/react-core/esm/__chunks/2JP3PD4E.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ariakit/react-core/esm/__chunks/2JP3PD4E.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PopoverAnchor: () => (/* binding */ PopoverAnchor),
/* harmony export */   usePopoverAnchor: () => (/* binding */ usePopoverAnchor)
/* harmony export */ });
/* harmony import */ var _M6ZUVZPG_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./M6ZUVZPG.js */ "./node_modules/@ariakit/react-core/esm/__chunks/M6ZUVZPG.js");
/* harmony import */ var _PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PTCNA5XT.js */ "./node_modules/@ariakit/react-core/esm/__chunks/PTCNA5XT.js");
/* harmony import */ var _WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WX6L4ACS.js */ "./node_modules/@ariakit/react-core/esm/__chunks/WX6L4ACS.js");
/* harmony import */ var _3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./3YLGPPWQ.js */ "./node_modules/@ariakit/react-core/esm/__chunks/3YLGPPWQ.js");
"use client";





// src/popover/popover-anchor.tsx
var TagName = "div";
var usePopoverAnchor = (0,_PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_0__.createHook)(
  function usePopoverAnchor2(_a) {
    var _b = _a, { store } = _b, props = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_1__.__objRest)(_b, ["store"]);
    const context = (0,_M6ZUVZPG_js__WEBPACK_IMPORTED_MODULE_2__.usePopoverProviderContext)();
    store = store || context;
    props = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_1__.__spreadProps)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_1__.__spreadValues)({}, props), {
      ref: (0,_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_3__.useMergeRefs)(store == null ? void 0 : store.setAnchorElement, props.ref)
    });
    return props;
  }
);
var PopoverAnchor = (0,_PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function PopoverAnchor2(props) {
  const htmlProps = usePopoverAnchor(props);
  return (0,_PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(TagName, htmlProps);
});




/***/ }),

/***/ "./node_modules/@ariakit/react-core/esm/__chunks/32IPIQBR.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ariakit/react-core/esm/__chunks/32IPIQBR.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DialogContextProvider: () => (/* binding */ DialogContextProvider),
/* harmony export */   DialogDescriptionContext: () => (/* binding */ DialogDescriptionContext),
/* harmony export */   DialogHeadingContext: () => (/* binding */ DialogHeadingContext),
/* harmony export */   DialogScopedContextProvider: () => (/* binding */ DialogScopedContextProvider),
/* harmony export */   useDialogContext: () => (/* binding */ useDialogContext),
/* harmony export */   useDialogProviderContext: () => (/* binding */ useDialogProviderContext),
/* harmony export */   useDialogScopedContext: () => (/* binding */ useDialogScopedContext)
/* harmony export */ });
/* harmony import */ var _EQMNTDLB_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EQMNTDLB.js */ "./node_modules/@ariakit/react-core/esm/__chunks/EQMNTDLB.js");
/* harmony import */ var _PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PTCNA5XT.js */ "./node_modules/@ariakit/react-core/esm/__chunks/PTCNA5XT.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
"use client";



// src/dialog/dialog-context.tsx

var ctx = (0,_PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_1__.createStoreContext)(
  [_EQMNTDLB_js__WEBPACK_IMPORTED_MODULE_2__.DisclosureContextProvider],
  [_EQMNTDLB_js__WEBPACK_IMPORTED_MODULE_2__.DisclosureScopedContextProvider]
);
var useDialogContext = ctx.useContext;
var useDialogScopedContext = ctx.useScopedContext;
var useDialogProviderContext = ctx.useProviderContext;
var DialogContextProvider = ctx.ContextProvider;
var DialogScopedContextProvider = ctx.ScopedContextProvider;
var DialogHeadingContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0);
var DialogDescriptionContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0);




/***/ }),

/***/ "./node_modules/@ariakit/react-core/esm/__chunks/3YLGPPWQ.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ariakit/react-core/esm/__chunks/3YLGPPWQ.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __objRest: () => (/* binding */ __objRest),
/* harmony export */   __spreadProps: () => (/* binding */ __spreadProps),
/* harmony export */   __spreadValues: () => (/* binding */ __spreadValues)
/* harmony export */ });
"use client";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};




/***/ }),

/***/ "./node_modules/@ariakit/react-core/esm/__chunks/4DJ5UIED.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ariakit/react-core/esm/__chunks/4DJ5UIED.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CompositeTypeahead: () => (/* binding */ CompositeTypeahead),
/* harmony export */   useCompositeTypeahead: () => (/* binding */ useCompositeTypeahead)
/* harmony export */ });
/* harmony import */ var _5VQZOHHZ_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./5VQZOHHZ.js */ "./node_modules/@ariakit/react-core/esm/__chunks/5VQZOHHZ.js");
/* harmony import */ var _TN5Y26CD_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TN5Y26CD.js */ "./node_modules/@ariakit/react-core/esm/__chunks/TN5Y26CD.js");
/* harmony import */ var _PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PTCNA5XT.js */ "./node_modules/@ariakit/react-core/esm/__chunks/PTCNA5XT.js");
/* harmony import */ var _WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./WX6L4ACS.js */ "./node_modules/@ariakit/react-core/esm/__chunks/WX6L4ACS.js");
/* harmony import */ var _3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./3YLGPPWQ.js */ "./node_modules/@ariakit/react-core/esm/__chunks/3YLGPPWQ.js");
/* harmony import */ var _ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ariakit/core/utils/dom */ "./node_modules/@ariakit/core/esm/__chunks/HWOIWM4O.js");
/* harmony import */ var _ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ariakit/core/utils/events */ "./node_modules/@ariakit/core/esm/utils/events.js");
/* harmony import */ var _ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ariakit/core/utils/misc */ "./node_modules/@ariakit/core/esm/__chunks/PBFD2E7P.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
"use client";






// src/composite/composite-typeahead.tsx




var TagName = "div";
var chars = "";
function clearChars() {
  chars = "";
}
function isValidTypeaheadEvent(event) {
  const target = event.target;
  if (target && (0,_ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_1__.isTextField)(target)) return false;
  if (event.key === " " && chars.length) return true;
  return event.key.length === 1 && !event.ctrlKey && !event.altKey && !event.metaKey && /^[\p{Letter}\p{Number}]$/u.test(event.key);
}
function isSelfTargetOrItem(event, items) {
  if ((0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_2__.isSelfTarget)(event)) return true;
  const target = event.target;
  if (!target) return false;
  const isItem = items.some((item) => item.element === target);
  return isItem;
}
function getEnabledItems(items) {
  return items.filter((item) => !item.disabled);
}
function itemTextStartsWith(item, text) {
  var _a;
  const itemText = ((_a = item.element) == null ? void 0 : _a.textContent) || item.children || // The composite item object itself doesn't include a value property, but
  // other components like Select do. Since CompositeTypeahead is a generic
  // component that can be used with those as well, we also consider the value
  // property as a fallback for the typeahead text content.
  "value" in item && item.value;
  if (!itemText) return false;
  return (0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_3__.normalizeString)(itemText).trim().toLowerCase().startsWith(text.toLowerCase());
}
function getSameInitialItems(items, char, activeId) {
  if (!activeId) return items;
  const activeItem = items.find((item) => item.id === activeId);
  if (!activeItem) return items;
  if (!itemTextStartsWith(activeItem, char)) return items;
  if (chars !== char && itemTextStartsWith(activeItem, chars)) return items;
  chars = char;
  return (0,_5VQZOHHZ_js__WEBPACK_IMPORTED_MODULE_4__.flipItems)(
    items.filter((item) => itemTextStartsWith(item, chars)),
    activeId
  ).filter((item) => item.id !== activeId);
}
var useCompositeTypeahead = (0,_PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_5__.createHook)(function useCompositeTypeahead2(_a) {
  var _b = _a, { store, typeahead = true } = _b, props = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_6__.__objRest)(_b, ["store", "typeahead"]);
  const context = (0,_TN5Y26CD_js__WEBPACK_IMPORTED_MODULE_7__.useCompositeContext)();
  store = store || context;
  (0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_3__.invariant)(
    store,
     true && "CompositeTypeahead must be a Composite component"
  );
  const onKeyDownCaptureProp = props.onKeyDownCapture;
  const cleanupTimeoutRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
  const onKeyDownCapture = (0,_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_8__.useEvent)((event) => {
    onKeyDownCaptureProp == null ? void 0 : onKeyDownCaptureProp(event);
    if (event.defaultPrevented) return;
    if (!typeahead) return;
    if (!store) return;
    const { renderedItems, items, activeId } = store.getState();
    if (!isValidTypeaheadEvent(event)) return clearChars();
    let enabledItems = getEnabledItems(
      renderedItems.length ? renderedItems : items
    );
    if (!isSelfTargetOrItem(event, enabledItems)) return clearChars();
    event.preventDefault();
    window.clearTimeout(cleanupTimeoutRef.current);
    cleanupTimeoutRef.current = window.setTimeout(() => {
      chars = "";
    }, 500);
    const char = event.key.toLowerCase();
    chars += char;
    enabledItems = getSameInitialItems(enabledItems, char, activeId);
    const item = enabledItems.find((item2) => itemTextStartsWith(item2, chars));
    if (item) {
      store.move(item.id);
    } else {
      clearChars();
    }
  });
  props = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_6__.__spreadProps)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_6__.__spreadValues)({}, props), {
    onKeyDownCapture
  });
  return (0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_3__.removeUndefinedValues)(props);
});
var CompositeTypeahead = (0,_PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_5__.forwardRef)(function CompositeTypeahead2(props) {
  const htmlProps = useCompositeTypeahead(props);
  return (0,_PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_5__.createElement)(TagName, htmlProps);
});




/***/ }),

/***/ "./node_modules/@ariakit/react-core/esm/__chunks/5VQZOHHZ.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ariakit/react-core/esm/__chunks/5VQZOHHZ.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   findFirstEnabledItem: () => (/* binding */ findFirstEnabledItem),
/* harmony export */   flipItems: () => (/* binding */ flipItems),
/* harmony export */   focusSilently: () => (/* binding */ focusSilently),
/* harmony export */   getEnabledItem: () => (/* binding */ getEnabledItem),
/* harmony export */   groupItemsByRows: () => (/* binding */ groupItemsByRows),
/* harmony export */   isItem: () => (/* binding */ isItem),
/* harmony export */   selectTextField: () => (/* binding */ selectTextField),
/* harmony export */   silentlyFocused: () => (/* binding */ silentlyFocused)
/* harmony export */ });
/* harmony import */ var _ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ariakit/core/utils/dom */ "./node_modules/@ariakit/core/esm/__chunks/HWOIWM4O.js");
"use client";

// src/composite/utils.ts

var NULL_ITEM = { id: null };
function flipItems(items, activeId, shouldInsertNullItem = false) {
  const index = items.findIndex((item) => item.id === activeId);
  return [
    ...items.slice(index + 1),
    ...shouldInsertNullItem ? [NULL_ITEM] : [],
    ...items.slice(0, index)
  ];
}
function findFirstEnabledItem(items, excludeId) {
  return items.find((item) => {
    if (excludeId) {
      return !item.disabled && item.id !== excludeId;
    }
    return !item.disabled;
  });
}
function getEnabledItem(store, id) {
  if (!id) return null;
  return store.item(id) || null;
}
function groupItemsByRows(items) {
  const rows = [];
  for (const item of items) {
    const row = rows.find((currentRow) => {
      var _a;
      return ((_a = currentRow[0]) == null ? void 0 : _a.rowId) === item.rowId;
    });
    if (row) {
      row.push(item);
    } else {
      rows.push([item]);
    }
  }
  return rows;
}
function selectTextField(element, collapseToEnd = false) {
  if ((0,_ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_0__.isTextField)(element)) {
    element.setSelectionRange(
      collapseToEnd ? element.value.length : 0,
      element.value.length
    );
  } else if (element.isContentEditable) {
    const selection = (0,_ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getDocument)(element).getSelection();
    selection == null ? void 0 : selection.selectAllChildren(element);
    if (collapseToEnd) {
      selection == null ? void 0 : selection.collapseToEnd();
    }
  }
}
var FOCUS_SILENTLY = Symbol("FOCUS_SILENTLY");
function focusSilently(element) {
  element[FOCUS_SILENTLY] = true;
  element.focus({ preventScroll: true });
}
function silentlyFocused(element) {
  const isSilentlyFocused = element[FOCUS_SILENTLY];
  delete element[FOCUS_SILENTLY];
  return isSilentlyFocused;
}
function isItem(store, element, exclude) {
  if (!element) return false;
  if (element === exclude) return false;
  const item = store.item(element.id);
  if (!item) return false;
  if (exclude && item.element === exclude) return false;
  return true;
}




/***/ }),

/***/ "./node_modules/@ariakit/react-core/esm/__chunks/7UYST25M.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ariakit/react-core/esm/__chunks/7UYST25M.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Command: () => (/* binding */ Command),
/* harmony export */   useCommand: () => (/* binding */ useCommand)
/* harmony export */ });
/* harmony import */ var _DRL2GNLJ_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DRL2GNLJ.js */ "./node_modules/@ariakit/react-core/esm/__chunks/DRL2GNLJ.js");
/* harmony import */ var _PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PTCNA5XT.js */ "./node_modules/@ariakit/react-core/esm/__chunks/PTCNA5XT.js");
/* harmony import */ var _WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WX6L4ACS.js */ "./node_modules/@ariakit/react-core/esm/__chunks/WX6L4ACS.js");
/* harmony import */ var _3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./3YLGPPWQ.js */ "./node_modules/@ariakit/react-core/esm/__chunks/3YLGPPWQ.js");
/* harmony import */ var _ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ariakit/core/utils/dom */ "./node_modules/@ariakit/core/esm/__chunks/HWOIWM4O.js");
/* harmony import */ var _ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ariakit/core/utils/events */ "./node_modules/@ariakit/core/esm/utils/events.js");
/* harmony import */ var _ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ariakit/core/utils/misc */ "./node_modules/@ariakit/core/esm/__chunks/PBFD2E7P.js");
/* harmony import */ var _ariakit_core_utils_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ariakit/core/utils/platform */ "./node_modules/@ariakit/core/esm/__chunks/US4USQPI.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
"use client";





// src/command/command.tsx





var TagName = "button";
function isNativeClick(event) {
  if (!event.isTrusted) return false;
  const element = event.currentTarget;
  if (event.key === "Enter") {
    return (0,_ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_1__.isButton)(element) || element.tagName === "SUMMARY" || element.tagName === "A";
  }
  if (event.key === " ") {
    return (0,_ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_1__.isButton)(element) || element.tagName === "SUMMARY" || element.tagName === "INPUT" || element.tagName === "SELECT";
  }
  return false;
}
var symbol = Symbol("command");
var useCommand = (0,_PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_2__.createHook)(
  function useCommand2(_a) {
    var _b = _a, { clickOnEnter = true, clickOnSpace = true } = _b, props = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_3__.__objRest)(_b, ["clickOnEnter", "clickOnSpace"]);
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const tagName = (0,_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_4__.useTagName)(ref);
    const type = props.type;
    const [isNativeButton, setIsNativeButton] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(
      () => !!tagName && (0,_ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_1__.isButton)({ tagName, type })
    );
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
      if (!ref.current) return;
      setIsNativeButton((0,_ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_1__.isButton)(ref.current));
    }, []);
    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const activeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    const disabled = (0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_5__.disabledFromProps)(props);
    const [isDuplicate, metadataProps] = (0,_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_4__.useMetadataProps)(props, symbol, true);
    const onKeyDownProp = props.onKeyDown;
    const onKeyDown = (0,_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_4__.useEvent)((event) => {
      onKeyDownProp == null ? void 0 : onKeyDownProp(event);
      const element = event.currentTarget;
      if (event.defaultPrevented) return;
      if (isDuplicate) return;
      if (disabled) return;
      if (!(0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_6__.isSelfTarget)(event)) return;
      if ((0,_ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_1__.isTextField)(element)) return;
      if (element.isContentEditable) return;
      const isEnter = clickOnEnter && event.key === "Enter";
      const isSpace = clickOnSpace && event.key === " ";
      const shouldPreventEnter = event.key === "Enter" && !clickOnEnter;
      const shouldPreventSpace = event.key === " " && !clickOnSpace;
      if (shouldPreventEnter || shouldPreventSpace) {
        event.preventDefault();
        return;
      }
      if (isEnter || isSpace) {
        const nativeClick = isNativeClick(event);
        if (isEnter) {
          if (!nativeClick) {
            event.preventDefault();
            const _a2 = event, { view } = _a2, eventInit = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_3__.__objRest)(_a2, ["view"]);
            const click = () => (0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_6__.fireClickEvent)(element, eventInit);
            if ((0,_ariakit_core_utils_platform__WEBPACK_IMPORTED_MODULE_7__.isFirefox)()) {
              (0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_6__.queueBeforeEvent)(element, "keyup", click);
            } else {
              queueMicrotask(click);
            }
          }
        } else if (isSpace) {
          activeRef.current = true;
          if (!nativeClick) {
            event.preventDefault();
            setActive(true);
          }
        }
      }
    });
    const onKeyUpProp = props.onKeyUp;
    const onKeyUp = (0,_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_4__.useEvent)((event) => {
      onKeyUpProp == null ? void 0 : onKeyUpProp(event);
      if (event.defaultPrevented) return;
      if (isDuplicate) return;
      if (disabled) return;
      if (event.metaKey) return;
      const isSpace = clickOnSpace && event.key === " ";
      if (activeRef.current && isSpace) {
        activeRef.current = false;
        if (!isNativeClick(event)) {
          event.preventDefault();
          setActive(false);
          const element = event.currentTarget;
          const _a2 = event, { view } = _a2, eventInit = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_3__.__objRest)(_a2, ["view"]);
          queueMicrotask(() => (0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_6__.fireClickEvent)(element, eventInit));
        }
      }
    });
    props = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_3__.__spreadProps)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_3__.__spreadValues)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_3__.__spreadValues)({
      "data-active": active || void 0,
      type: isNativeButton ? "button" : void 0
    }, metadataProps), props), {
      ref: (0,_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_4__.useMergeRefs)(ref, props.ref),
      onKeyDown,
      onKeyUp
    });
    props = (0,_DRL2GNLJ_js__WEBPACK_IMPORTED_MODULE_8__.useFocusable)(props);
    return props;
  }
);
var Command = (0,_PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(function Command2(props) {
  const htmlProps = useCommand(props);
  return (0,_PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_2__.createElement)(TagName, htmlProps);
});




/***/ }),

/***/ "./node_modules/@ariakit/react-core/esm/__chunks/AMQNTLCG.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ariakit/react-core/esm/__chunks/AMQNTLCG.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComboboxList: () => (/* binding */ ComboboxList),
/* harmony export */   useComboboxList: () => (/* binding */ useComboboxList)
/* harmony export */ });
/* harmony import */ var _J4NXMVZC_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./J4NXMVZC.js */ "./node_modules/@ariakit/react-core/esm/__chunks/J4NXMVZC.js");
/* harmony import */ var _WOYVW654_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./WOYVW654.js */ "./node_modules/@ariakit/react-core/esm/__chunks/WOYVW654.js");
/* harmony import */ var _PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PTCNA5XT.js */ "./node_modules/@ariakit/react-core/esm/__chunks/PTCNA5XT.js");
/* harmony import */ var _WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WX6L4ACS.js */ "./node_modules/@ariakit/react-core/esm/__chunks/WX6L4ACS.js");
/* harmony import */ var _3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./3YLGPPWQ.js */ "./node_modules/@ariakit/react-core/esm/__chunks/3YLGPPWQ.js");
/* harmony import */ var _ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ariakit/core/utils/misc */ "./node_modules/@ariakit/core/esm/__chunks/PBFD2E7P.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
"use client";






// src/combobox/combobox-list.tsx



var TagName = "div";
var useComboboxList = (0,_PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_2__.createHook)(
  function useComboboxList2(_a) {
    var _b = _a, { store, alwaysVisible } = _b, props = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_3__.__objRest)(_b, ["store", "alwaysVisible"]);
    const scopedContext = (0,_J4NXMVZC_js__WEBPACK_IMPORTED_MODULE_4__.useComboboxScopedContext)(true);
    const context = (0,_J4NXMVZC_js__WEBPACK_IMPORTED_MODULE_4__.useComboboxContext)();
    store = store || context;
    const scopedContextSameStore = !!store && store === scopedContext;
    (0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_5__.invariant)(
      store,
       true && "ComboboxList must receive a `store` prop or be wrapped in a ComboboxProvider component."
    );
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const id = (0,_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_6__.useId)(props.id);
    const mounted = store.useState("mounted");
    const hidden = (0,_WOYVW654_js__WEBPACK_IMPORTED_MODULE_7__.isHidden)(mounted, props.hidden, alwaysVisible);
    const style = hidden ? (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_3__.__spreadProps)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_3__.__spreadValues)({}, props.style), { display: "none" }) : props.style;
    const multiSelectable = store.useState(
      (state) => Array.isArray(state.selectedValue)
    );
    const role = (0,_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_6__.useAttribute)(ref, "role", props.role);
    const isCompositeRole = role === "listbox" || role === "tree" || role === "grid";
    const ariaMultiSelectable = isCompositeRole ? multiSelectable || void 0 : void 0;
    const [hasListboxInside, setHasListboxInside] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const contentElement = store.useState("contentElement");
    (0,_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_6__.useSafeLayoutEffect)(() => {
      if (!mounted) return;
      const element = ref.current;
      if (!element) return;
      if (contentElement !== element) return;
      const callback = () => {
        setHasListboxInside(!!element.querySelector("[role='listbox']"));
      };
      const observer = new MutationObserver(callback);
      observer.observe(element, {
        subtree: true,
        childList: true,
        attributeFilter: ["role"]
      });
      callback();
      return () => observer.disconnect();
    }, [mounted, contentElement]);
    if (!hasListboxInside) {
      props = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_3__.__spreadValues)({
        role: "listbox",
        "aria-multiselectable": ariaMultiSelectable
      }, props);
    }
    props = (0,_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_6__.useWrapElement)(
      props,
      (element) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_J4NXMVZC_js__WEBPACK_IMPORTED_MODULE_4__.ComboboxScopedContextProvider, { value: store, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_J4NXMVZC_js__WEBPACK_IMPORTED_MODULE_4__.ComboboxListRoleContext.Provider, { value: role, children: element }) }),
      [store, role]
    );
    const setContentElement = id && (!scopedContext || !scopedContextSameStore) ? store.setContentElement : null;
    props = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_3__.__spreadProps)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_3__.__spreadValues)({
      id,
      hidden
    }, props), {
      ref: (0,_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_6__.useMergeRefs)(setContentElement, ref, props.ref),
      style
    });
    return (0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_5__.removeUndefinedValues)(props);
  }
);
var ComboboxList = (0,_PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(function ComboboxList2(props) {
  const htmlProps = useComboboxList(props);
  return (0,_PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_2__.createElement)(TagName, htmlProps);
});




/***/ }),

/***/ "./node_modules/@ariakit/react-core/esm/__chunks/AOK4FW4L.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ariakit/react-core/esm/__chunks/AOK4FW4L.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CompositeItem: () => (/* binding */ CompositeItem),
/* harmony export */   useCompositeItem: () => (/* binding */ useCompositeItem)
/* harmony export */ });
/* harmony import */ var _PZGHQO5Y_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./PZGHQO5Y.js */ "./node_modules/@ariakit/react-core/esm/__chunks/PZGHQO5Y.js");
/* harmony import */ var _7UYST25M_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./7UYST25M.js */ "./node_modules/@ariakit/react-core/esm/__chunks/7UYST25M.js");
/* harmony import */ var _5VQZOHHZ_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./5VQZOHHZ.js */ "./node_modules/@ariakit/react-core/esm/__chunks/5VQZOHHZ.js");
/* harmony import */ var _TN5Y26CD_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TN5Y26CD.js */ "./node_modules/@ariakit/react-core/esm/__chunks/TN5Y26CD.js");
/* harmony import */ var _PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PTCNA5XT.js */ "./node_modules/@ariakit/react-core/esm/__chunks/PTCNA5XT.js");
/* harmony import */ var _FQ77EHUR_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FQ77EHUR.js */ "./node_modules/@ariakit/react-core/esm/__chunks/FQ77EHUR.js");
/* harmony import */ var _WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./WX6L4ACS.js */ "./node_modules/@ariakit/react-core/esm/__chunks/WX6L4ACS.js");
/* harmony import */ var _3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./3YLGPPWQ.js */ "./node_modules/@ariakit/react-core/esm/__chunks/3YLGPPWQ.js");
/* harmony import */ var _ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ariakit/core/utils/dom */ "./node_modules/@ariakit/core/esm/__chunks/HWOIWM4O.js");
/* harmony import */ var _ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ariakit/core/utils/events */ "./node_modules/@ariakit/core/esm/utils/events.js");
/* harmony import */ var _ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ariakit/core/utils/misc */ "./node_modules/@ariakit/core/esm/__chunks/PBFD2E7P.js");
/* harmony import */ var _ariakit_core_utils_platform__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ariakit/core/utils/platform */ "./node_modules/@ariakit/core/esm/__chunks/US4USQPI.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
"use client";









// src/composite/composite-item.tsx






var TagName = "button";
function isEditableElement(element) {
  if ((0,_ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_2__.isTextbox)(element)) return true;
  return element.tagName === "INPUT" && !(0,_ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_2__.isButton)(element);
}
function getNextPageOffset(scrollingElement, pageUp = false) {
  const height = scrollingElement.clientHeight;
  const { top } = scrollingElement.getBoundingClientRect();
  const pageSize = Math.max(height * 0.875, height - 40) * 1.5;
  const pageOffset = pageUp ? height - pageSize + top : pageSize + top;
  if (scrollingElement.tagName === "HTML") {
    return pageOffset + scrollingElement.scrollTop;
  }
  return pageOffset;
}
function getItemOffset(itemElement, pageUp = false) {
  const { top } = itemElement.getBoundingClientRect();
  if (pageUp) {
    return top + itemElement.clientHeight;
  }
  return top;
}
function findNextPageItemId(element, store, next, pageUp = false) {
  var _a;
  if (!store) return;
  if (!next) return;
  const { renderedItems } = store.getState();
  const scrollingElement = (0,_ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getScrollingElement)(element);
  if (!scrollingElement) return;
  const nextPageOffset = getNextPageOffset(scrollingElement, pageUp);
  let id;
  let prevDifference;
  for (let i = 0; i < renderedItems.length; i += 1) {
    const previousId = id;
    id = next(i);
    if (!id) break;
    if (id === previousId) continue;
    const itemElement = (_a = (0,_5VQZOHHZ_js__WEBPACK_IMPORTED_MODULE_3__.getEnabledItem)(store, id)) == null ? void 0 : _a.element;
    if (!itemElement) continue;
    const itemOffset = getItemOffset(itemElement, pageUp);
    const difference = itemOffset - nextPageOffset;
    const absDifference = Math.abs(difference);
    if (pageUp && difference <= 0 || !pageUp && difference >= 0) {
      if (prevDifference !== void 0 && prevDifference < absDifference) {
        id = previousId;
      }
      break;
    }
    prevDifference = absDifference;
  }
  return id;
}
function targetIsAnotherItem(event, store) {
  if ((0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_4__.isSelfTarget)(event)) return false;
  return (0,_5VQZOHHZ_js__WEBPACK_IMPORTED_MODULE_3__.isItem)(store, event.target);
}
function useRole(ref, props) {
  const roleProp = props.role;
  const [role, setRole] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(roleProp);
  (0,_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_5__.useSafeLayoutEffect)(() => {
    const element = ref.current;
    if (!element) return;
    setRole(element.getAttribute("role") || roleProp);
  }, [roleProp]);
  return role;
}
function requiresAriaSelected(role) {
  return role === "option" || role === "treeitem";
}
function supportsAriaSelected(role) {
  if (role === "option") return true;
  if (role === "tab") return true;
  if (role === "treeitem") return true;
  if (role === "gridcell") return true;
  if (role === "row") return true;
  if (role === "columnheader") return true;
  if (role === "rowheader") return true;
  return false;
}
var useCompositeItem = (0,_PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_6__.createHook)(
  function useCompositeItem2(_a) {
    var _b = _a, {
      store,
      rowId: rowIdProp,
      preventScrollOnKeyDown = false,
      moveOnKeyPress = true,
      tabbable = false,
      getItem: getItemProp,
      "aria-setsize": ariaSetSizeProp,
      "aria-posinset": ariaPosInSetProp
    } = _b, props = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_7__.__objRest)(_b, [
      "store",
      "rowId",
      "preventScrollOnKeyDown",
      "moveOnKeyPress",
      "tabbable",
      "getItem",
      "aria-setsize",
      "aria-posinset"
    ]);
    const context = (0,_TN5Y26CD_js__WEBPACK_IMPORTED_MODULE_8__.useCompositeContext)();
    store = store || context;
    const id = (0,_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_5__.useId)(props.id);
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const row = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_TN5Y26CD_js__WEBPACK_IMPORTED_MODULE_8__.CompositeRowContext);
    const rowId = (0,_FQ77EHUR_js__WEBPACK_IMPORTED_MODULE_9__.useStoreState)(store, (state) => {
      if (rowIdProp) return rowIdProp;
      if (!state) return;
      if (!(row == null ? void 0 : row.baseElement)) return;
      if (row.baseElement !== state.baseElement) return;
      return row.id;
    });
    const disabled = (0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_10__.disabledFromProps)(props);
    const trulyDisabled = disabled && !props.accessibleWhenDisabled;
    const getItem = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
      (item) => {
        const nextItem = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_7__.__spreadProps)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_7__.__spreadValues)({}, item), {
          id: id || item.id,
          rowId,
          disabled: !!trulyDisabled
        });
        if (getItemProp) {
          return getItemProp(nextItem);
        }
        return nextItem;
      },
      [id, rowId, trulyDisabled, getItemProp]
    );
    const onFocusProp = props.onFocus;
    const hasFocusedComposite = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    const onFocus = (0,_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_5__.useEvent)((event) => {
      onFocusProp == null ? void 0 : onFocusProp(event);
      if (event.defaultPrevented) return;
      if ((0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_4__.isPortalEvent)(event)) return;
      if (!id) return;
      if (!store) return;
      if (targetIsAnotherItem(event, store)) return;
      const { virtualFocus: virtualFocus2, baseElement: baseElement2 } = store.getState();
      store.setActiveId(id);
      if ((0,_ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_2__.isTextbox)(event.currentTarget)) {
        (0,_5VQZOHHZ_js__WEBPACK_IMPORTED_MODULE_3__.selectTextField)(event.currentTarget);
      }
      if (!virtualFocus2) return;
      if (!(0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_4__.isSelfTarget)(event)) return;
      if (isEditableElement(event.currentTarget)) return;
      if (!(baseElement2 == null ? void 0 : baseElement2.isConnected)) return;
      if ((0,_ariakit_core_utils_platform__WEBPACK_IMPORTED_MODULE_11__.isSafari)() && event.currentTarget.hasAttribute("data-autofocus")) {
        event.currentTarget.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        });
      }
      hasFocusedComposite.current = true;
      const fromComposite = event.relatedTarget === baseElement2 || (0,_5VQZOHHZ_js__WEBPACK_IMPORTED_MODULE_3__.isItem)(store, event.relatedTarget);
      if (fromComposite) {
        (0,_5VQZOHHZ_js__WEBPACK_IMPORTED_MODULE_3__.focusSilently)(baseElement2);
      } else {
        baseElement2.focus();
      }
    });
    const onBlurCaptureProp = props.onBlurCapture;
    const onBlurCapture = (0,_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_5__.useEvent)((event) => {
      onBlurCaptureProp == null ? void 0 : onBlurCaptureProp(event);
      if (event.defaultPrevented) return;
      const state = store == null ? void 0 : store.getState();
      if ((state == null ? void 0 : state.virtualFocus) && hasFocusedComposite.current) {
        hasFocusedComposite.current = false;
        event.preventDefault();
        event.stopPropagation();
      }
    });
    const onKeyDownProp = props.onKeyDown;
    const preventScrollOnKeyDownProp = (0,_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_5__.useBooleanEvent)(preventScrollOnKeyDown);
    const moveOnKeyPressProp = (0,_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_5__.useBooleanEvent)(moveOnKeyPress);
    const onKeyDown = (0,_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_5__.useEvent)((event) => {
      onKeyDownProp == null ? void 0 : onKeyDownProp(event);
      if (event.defaultPrevented) return;
      if (!(0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_4__.isSelfTarget)(event)) return;
      if (!store) return;
      const { currentTarget } = event;
      const state = store.getState();
      const item = store.item(id);
      const isGrid = !!(item == null ? void 0 : item.rowId);
      const isVertical = state.orientation !== "horizontal";
      const isHorizontal = state.orientation !== "vertical";
      const canHomeEnd = () => {
        if (isGrid) return true;
        if (isHorizontal) return true;
        if (!state.baseElement) return true;
        if (!(0,_ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_2__.isTextField)(state.baseElement)) return true;
        return false;
      };
      const keyMap = {
        ArrowUp: (isGrid || isVertical) && store.up,
        ArrowRight: (isGrid || isHorizontal) && store.next,
        ArrowDown: (isGrid || isVertical) && store.down,
        ArrowLeft: (isGrid || isHorizontal) && store.previous,
        Home: () => {
          if (!canHomeEnd()) return;
          if (!isGrid || event.ctrlKey) {
            return store == null ? void 0 : store.first();
          }
          return store == null ? void 0 : store.previous(-1);
        },
        End: () => {
          if (!canHomeEnd()) return;
          if (!isGrid || event.ctrlKey) {
            return store == null ? void 0 : store.last();
          }
          return store == null ? void 0 : store.next(-1);
        },
        PageUp: () => {
          return findNextPageItemId(currentTarget, store, store == null ? void 0 : store.up, true);
        },
        PageDown: () => {
          return findNextPageItemId(currentTarget, store, store == null ? void 0 : store.down);
        }
      };
      const action = keyMap[event.key];
      if (action) {
        if ((0,_ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_2__.isTextbox)(currentTarget)) {
          const selection = (0,_ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getTextboxSelection)(currentTarget);
          const isLeft = isHorizontal && event.key === "ArrowLeft";
          const isRight = isHorizontal && event.key === "ArrowRight";
          const isUp = isVertical && event.key === "ArrowUp";
          const isDown = isVertical && event.key === "ArrowDown";
          if (isRight || isDown) {
            const { length: valueLength } = (0,_ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getTextboxValue)(currentTarget);
            if (selection.end !== valueLength) return;
          } else if ((isLeft || isUp) && selection.start !== 0) return;
        }
        const nextId = action();
        if (preventScrollOnKeyDownProp(event) || nextId !== void 0) {
          if (!moveOnKeyPressProp(event)) return;
          event.preventDefault();
          store.move(nextId);
        }
      }
    });
    const baseElement = (0,_FQ77EHUR_js__WEBPACK_IMPORTED_MODULE_9__.useStoreState)(
      store,
      (state) => (state == null ? void 0 : state.baseElement) || void 0
    );
    const providerValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(
      () => ({ id, baseElement }),
      [id, baseElement]
    );
    props = (0,_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_5__.useWrapElement)(
      props,
      (element) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_TN5Y26CD_js__WEBPACK_IMPORTED_MODULE_8__.CompositeItemContext.Provider, { value: providerValue, children: element }),
      [providerValue]
    );
    const isActiveItem = (0,_FQ77EHUR_js__WEBPACK_IMPORTED_MODULE_9__.useStoreState)(
      store,
      (state) => !!state && state.activeId === id
    );
    const virtualFocus = (0,_FQ77EHUR_js__WEBPACK_IMPORTED_MODULE_9__.useStoreState)(store, "virtualFocus");
    const role = useRole(ref, props);
    let ariaSelected;
    if (isActiveItem) {
      if (requiresAriaSelected(role)) {
        ariaSelected = true;
      } else if (virtualFocus && supportsAriaSelected(role)) {
        ariaSelected = true;
      }
    }
    const ariaSetSize = (0,_FQ77EHUR_js__WEBPACK_IMPORTED_MODULE_9__.useStoreState)(store, (state) => {
      if (ariaSetSizeProp != null) return ariaSetSizeProp;
      if (!state) return;
      if (!(row == null ? void 0 : row.ariaSetSize)) return;
      if (row.baseElement !== state.baseElement) return;
      return row.ariaSetSize;
    });
    const ariaPosInSet = (0,_FQ77EHUR_js__WEBPACK_IMPORTED_MODULE_9__.useStoreState)(store, (state) => {
      if (ariaPosInSetProp != null) return ariaPosInSetProp;
      if (!state) return;
      if (!(row == null ? void 0 : row.ariaPosInSet)) return;
      if (row.baseElement !== state.baseElement) return;
      const itemsInRow = state.renderedItems.filter(
        (item) => item.rowId === rowId
      );
      return row.ariaPosInSet + itemsInRow.findIndex((item) => item.id === id);
    });
    const isTabbable = (0,_FQ77EHUR_js__WEBPACK_IMPORTED_MODULE_9__.useStoreState)(store, (state) => {
      if (!(state == null ? void 0 : state.renderedItems.length)) return true;
      if (state.virtualFocus) return false;
      if (tabbable) return true;
      return state.activeId === id;
    });
    props = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_7__.__spreadProps)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_7__.__spreadValues)({
      id,
      "aria-selected": ariaSelected,
      "data-active-item": isActiveItem || void 0
    }, props), {
      ref: (0,_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_5__.useMergeRefs)(ref, props.ref),
      tabIndex: isTabbable ? props.tabIndex : -1,
      onFocus,
      onBlurCapture,
      onKeyDown
    });
    props = (0,_7UYST25M_js__WEBPACK_IMPORTED_MODULE_12__.useCommand)(props);
    props = (0,_PZGHQO5Y_js__WEBPACK_IMPORTED_MODULE_13__.useCollectionItem)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_7__.__spreadProps)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_7__.__spreadValues)({
      store
    }, props), {
      getItem,
      shouldRegisterItem: id ? props.shouldRegisterItem : false
    }));
    return (0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_10__.removeUndefinedValues)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_7__.__spreadProps)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_7__.__spreadValues)({}, props), {
      "aria-setsize": ariaSetSize,
      "aria-posinset": ariaPosInSet
    }));
  }
);
var CompositeItem = (0,_PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_6__.memo)(
  (0,_PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_6__.forwardRef)(function CompositeItem2(props) {
    const htmlProps = useCompositeItem(props);
    return (0,_PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_6__.createElement)(TagName, htmlProps);
  })
);




/***/ }),

/***/ "./node_modules/@ariakit/react-core/esm/__chunks/DRL2GNLJ.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ariakit/react-core/esm/__chunks/DRL2GNLJ.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Focusable: () => (/* binding */ Focusable),
/* harmony export */   useFocusable: () => (/* binding */ useFocusable)
/* harmony export */ });
/* harmony import */ var _SWN3JYXT_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SWN3JYXT.js */ "./node_modules/@ariakit/react-core/esm/__chunks/SWN3JYXT.js");
/* harmony import */ var _PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PTCNA5XT.js */ "./node_modules/@ariakit/react-core/esm/__chunks/PTCNA5XT.js");
/* harmony import */ var _WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WX6L4ACS.js */ "./node_modules/@ariakit/react-core/esm/__chunks/WX6L4ACS.js");
/* harmony import */ var _3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./3YLGPPWQ.js */ "./node_modules/@ariakit/react-core/esm/__chunks/3YLGPPWQ.js");
/* harmony import */ var _ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ariakit/core/utils/dom */ "./node_modules/@ariakit/core/esm/__chunks/HWOIWM4O.js");
/* harmony import */ var _ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ariakit/core/utils/events */ "./node_modules/@ariakit/core/esm/utils/events.js");
/* harmony import */ var _ariakit_core_utils_focus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ariakit/core/utils/focus */ "./node_modules/@ariakit/core/esm/utils/focus.js");
/* harmony import */ var _ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ariakit/core/utils/misc */ "./node_modules/@ariakit/core/esm/__chunks/PBFD2E7P.js");
/* harmony import */ var _ariakit_core_utils_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ariakit/core/utils/platform */ "./node_modules/@ariakit/core/esm/__chunks/US4USQPI.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
"use client";





// src/focusable/focusable.tsx






var TagName = "div";
var isSafariBrowser = (0,_ariakit_core_utils_platform__WEBPACK_IMPORTED_MODULE_1__.isSafari)();
var alwaysFocusVisibleInputTypes = [
  "text",
  "search",
  "url",
  "tel",
  "email",
  "password",
  "number",
  "date",
  "month",
  "week",
  "time",
  "datetime",
  "datetime-local"
];
function isAlwaysFocusVisible(element) {
  const { tagName, readOnly, type } = element;
  if (tagName === "TEXTAREA" && !readOnly) return true;
  if (tagName === "SELECT" && !readOnly) return true;
  if (tagName === "INPUT" && !readOnly) {
    return alwaysFocusVisibleInputTypes.includes(type);
  }
  if (element.isContentEditable) return true;
  const role = element.getAttribute("role");
  if (role === "combobox" && element.dataset.name) {
    return true;
  }
  return false;
}
function getLabels(element) {
  if ("labels" in element) {
    return element.labels;
  }
  return null;
}
function isNativeCheckboxOrRadio(element) {
  const tagName = element.tagName.toLowerCase();
  if (tagName === "input" && element.type) {
    return element.type === "radio" || element.type === "checkbox";
  }
  return false;
}
function isNativeTabbable(tagName) {
  if (!tagName) return true;
  return tagName === "button" || tagName === "summary" || tagName === "input" || tagName === "select" || tagName === "textarea" || tagName === "a";
}
function supportsDisabledAttribute(tagName) {
  if (!tagName) return true;
  return tagName === "button" || tagName === "input" || tagName === "select" || tagName === "textarea";
}
function getTabIndex(focusable, trulyDisabled, nativeTabbable, supportsDisabled, tabIndexProp) {
  if (!focusable) {
    return tabIndexProp;
  }
  if (trulyDisabled) {
    if (nativeTabbable && !supportsDisabled) {
      return -1;
    }
    return;
  }
  if (nativeTabbable) {
    return tabIndexProp;
  }
  return tabIndexProp || 0;
}
function useDisableEvent(onEvent, disabled) {
  return (0,_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_2__.useEvent)((event) => {
    onEvent == null ? void 0 : onEvent(event);
    if (event.defaultPrevented) return;
    if (disabled) {
      event.stopPropagation();
      event.preventDefault();
    }
  });
}
var isKeyboardModality = true;
function onGlobalMouseDown(event) {
  const target = event.target;
  if (target && "hasAttribute" in target) {
    if (!target.hasAttribute("data-focus-visible")) {
      isKeyboardModality = false;
    }
  }
}
function onGlobalKeyDown(event) {
  if (event.metaKey) return;
  if (event.ctrlKey) return;
  if (event.altKey) return;
  isKeyboardModality = true;
}
var useFocusable = (0,_PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_3__.createHook)(
  function useFocusable2(_a) {
    var _b = _a, {
      focusable = true,
      accessibleWhenDisabled,
      autoFocus,
      onFocusVisible
    } = _b, props = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_4__.__objRest)(_b, [
      "focusable",
      "accessibleWhenDisabled",
      "autoFocus",
      "onFocusVisible"
    ]);
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
      if (!focusable) return;
      (0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_5__.addGlobalEventListener)("mousedown", onGlobalMouseDown, true);
      (0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_5__.addGlobalEventListener)("keydown", onGlobalKeyDown, true);
    }, [focusable]);
    if (isSafariBrowser) {
      (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (!focusable) return;
        const element = ref.current;
        if (!element) return;
        if (!isNativeCheckboxOrRadio(element)) return;
        const labels = getLabels(element);
        if (!labels) return;
        const onMouseUp = () => queueMicrotask(() => element.focus());
        for (const label of labels) {
          label.addEventListener("mouseup", onMouseUp);
        }
        return () => {
          for (const label of labels) {
            label.removeEventListener("mouseup", onMouseUp);
          }
        };
      }, [focusable]);
    }
    const disabled = focusable && (0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_6__.disabledFromProps)(props);
    const trulyDisabled = !!disabled && !accessibleWhenDisabled;
    const [focusVisible, setFocusVisible] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
      if (!focusable) return;
      if (trulyDisabled && focusVisible) {
        setFocusVisible(false);
      }
    }, [focusable, trulyDisabled, focusVisible]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
      if (!focusable) return;
      if (!focusVisible) return;
      const element = ref.current;
      if (!element) return;
      if (typeof IntersectionObserver === "undefined") return;
      const observer = new IntersectionObserver(() => {
        if (!(0,_ariakit_core_utils_focus__WEBPACK_IMPORTED_MODULE_7__.isFocusable)(element)) {
          setFocusVisible(false);
        }
      });
      observer.observe(element);
      return () => observer.disconnect();
    }, [focusable, focusVisible]);
    const onKeyPressCapture = useDisableEvent(
      props.onKeyPressCapture,
      disabled
    );
    const onMouseDownCapture = useDisableEvent(
      props.onMouseDownCapture,
      disabled
    );
    const onClickCapture = useDisableEvent(props.onClickCapture, disabled);
    const onMouseDownProp = props.onMouseDown;
    const onMouseDown = (0,_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_2__.useEvent)((event) => {
      onMouseDownProp == null ? void 0 : onMouseDownProp(event);
      if (event.defaultPrevented) return;
      if (!focusable) return;
      const element = event.currentTarget;
      if (!isSafariBrowser) return;
      if ((0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_5__.isPortalEvent)(event)) return;
      if (!(0,_ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_8__.isButton)(element) && !isNativeCheckboxOrRadio(element)) return;
      let receivedFocus = false;
      const onFocus = () => {
        receivedFocus = true;
      };
      const options = { capture: true, once: true };
      element.addEventListener("focusin", onFocus, options);
      (0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_5__.queueBeforeEvent)(element, "mouseup", () => {
        element.removeEventListener("focusin", onFocus, true);
        if (receivedFocus) return;
        (0,_ariakit_core_utils_focus__WEBPACK_IMPORTED_MODULE_7__.focusIfNeeded)(element);
      });
    });
    const handleFocusVisible = (event, currentTarget) => {
      if (currentTarget) {
        event.currentTarget = currentTarget;
      }
      if (!focusable) return;
      const element = event.currentTarget;
      if (!element) return;
      if (!(0,_ariakit_core_utils_focus__WEBPACK_IMPORTED_MODULE_7__.hasFocus)(element)) return;
      onFocusVisible == null ? void 0 : onFocusVisible(event);
      if (event.defaultPrevented) return;
      setFocusVisible(true);
    };
    const onKeyDownCaptureProp = props.onKeyDownCapture;
    const onKeyDownCapture = (0,_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_2__.useEvent)((event) => {
      onKeyDownCaptureProp == null ? void 0 : onKeyDownCaptureProp(event);
      if (event.defaultPrevented) return;
      if (!focusable) return;
      if (focusVisible) return;
      if (event.metaKey) return;
      if (event.altKey) return;
      if (event.ctrlKey) return;
      if (!(0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_5__.isSelfTarget)(event)) return;
      const element = event.currentTarget;
      const applyFocusVisible = () => handleFocusVisible(event, element);
      (0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_5__.queueBeforeEvent)(element, "focusout", applyFocusVisible);
    });
    const onFocusCaptureProp = props.onFocusCapture;
    const onFocusCapture = (0,_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_2__.useEvent)((event) => {
      onFocusCaptureProp == null ? void 0 : onFocusCaptureProp(event);
      if (event.defaultPrevented) return;
      if (!focusable) return;
      if (!(0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_5__.isSelfTarget)(event)) {
        setFocusVisible(false);
        return;
      }
      const element = event.currentTarget;
      const applyFocusVisible = () => handleFocusVisible(event, element);
      if (isKeyboardModality || isAlwaysFocusVisible(event.target)) {
        (0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_5__.queueBeforeEvent)(event.target, "focusout", applyFocusVisible);
      } else {
        setFocusVisible(false);
      }
    });
    const onBlurProp = props.onBlur;
    const onBlur = (0,_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_2__.useEvent)((event) => {
      onBlurProp == null ? void 0 : onBlurProp(event);
      if (!focusable) return;
      if (!(0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_5__.isFocusEventOutside)(event)) return;
      setFocusVisible(false);
    });
    const autoFocusOnShow = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_SWN3JYXT_js__WEBPACK_IMPORTED_MODULE_9__.FocusableContext);
    const autoFocusRef = (0,_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_2__.useEvent)((element) => {
      if (!focusable) return;
      if (!autoFocus) return;
      if (!element) return;
      if (!autoFocusOnShow) return;
      queueMicrotask(() => {
        if ((0,_ariakit_core_utils_focus__WEBPACK_IMPORTED_MODULE_7__.hasFocus)(element)) return;
        if (!(0,_ariakit_core_utils_focus__WEBPACK_IMPORTED_MODULE_7__.isFocusable)(element)) return;
        element.focus();
      });
    });
    const tagName = (0,_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_2__.useTagName)(ref);
    const nativeTabbable = focusable && isNativeTabbable(tagName);
    const supportsDisabled = focusable && supportsDisabledAttribute(tagName);
    const styleProp = props.style;
    const style = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
      if (trulyDisabled) {
        return (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_4__.__spreadValues)({ pointerEvents: "none" }, styleProp);
      }
      return styleProp;
    }, [trulyDisabled, styleProp]);
    props = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_4__.__spreadProps)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_4__.__spreadValues)({
      "data-focus-visible": focusable && focusVisible || void 0,
      "data-autofocus": autoFocus || void 0,
      "aria-disabled": disabled || void 0
    }, props), {
      ref: (0,_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_2__.useMergeRefs)(ref, autoFocusRef, props.ref),
      style,
      tabIndex: getTabIndex(
        focusable,
        trulyDisabled,
        nativeTabbable,
        supportsDisabled,
        props.tabIndex
      ),
      disabled: supportsDisabled && trulyDisabled ? true : void 0,
      // TODO: Test Focusable contentEditable.
      contentEditable: disabled ? void 0 : props.contentEditable,
      onKeyPressCapture,
      onClickCapture,
      onMouseDownCapture,
      onMouseDown,
      onKeyDownCapture,
      onFocusCapture,
      onBlur
    });
    return (0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_6__.removeUndefinedValues)(props);
  }
);
var Focusable = (0,_PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function Focusable2(props) {
  const htmlProps = useFocusable(props);
  return (0,_PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_3__.createElement)(TagName, htmlProps);
});




/***/ }),

/***/ "./node_modules/@ariakit/react-core/esm/__chunks/EQMNTDLB.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ariakit/react-core/esm/__chunks/EQMNTDLB.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DisclosureContextProvider: () => (/* binding */ DisclosureContextProvider),
/* harmony export */   DisclosureScopedContextProvider: () => (/* binding */ DisclosureScopedContextProvider),
/* harmony export */   useDisclosureContext: () => (/* binding */ useDisclosureContext),
/* harmony export */   useDisclosureProviderContext: () => (/* binding */ useDisclosureProviderContext),
/* harmony export */   useDisclosureScopedContext: () => (/* binding */ useDisclosureScopedContext)
/* harmony export */ });
/* harmony import */ var _PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PTCNA5XT.js */ "./node_modules/@ariakit/react-core/esm/__chunks/PTCNA5XT.js");
"use client";


// src/disclosure/disclosure-context.tsx
var ctx = (0,_PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_0__.createStoreContext)();
var useDisclosureContext = ctx.useContext;
var useDisclosureScopedContext = ctx.useScopedContext;
var useDisclosureProviderContext = ctx.useProviderContext;
var DisclosureContextProvider = ctx.ContextProvider;
var DisclosureScopedContextProvider = ctx.ScopedContextProvider;




/***/ }),

/***/ "./node_modules/@ariakit/react-core/esm/__chunks/FQ77EHUR.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ariakit/react-core/esm/__chunks/FQ77EHUR.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useStore: () => (/* binding */ useStore),
/* harmony export */   useStoreProps: () => (/* binding */ useStoreProps),
/* harmony export */   useStoreState: () => (/* binding */ useStoreState)
/* harmony export */ });
/* harmony import */ var _WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WX6L4ACS.js */ "./node_modules/@ariakit/react-core/esm/__chunks/WX6L4ACS.js");
/* harmony import */ var _3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./3YLGPPWQ.js */ "./node_modules/@ariakit/react-core/esm/__chunks/3YLGPPWQ.js");
/* harmony import */ var _ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ariakit/core/utils/misc */ "./node_modules/@ariakit/core/esm/__chunks/PBFD2E7P.js");
/* harmony import */ var _ariakit_core_utils_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ariakit/core/utils/store */ "./node_modules/@ariakit/core/esm/__chunks/EQQLU3CG.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var use_sync_external_store_shim_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! use-sync-external-store/shim/index.js */ "./node_modules/use-sync-external-store/shim/index.js");
"use client";



// src/utils/store.tsx




var { useSyncExternalStore } = use_sync_external_store_shim_index_js__WEBPACK_IMPORTED_MODULE_1__;
var noopSubscribe = () => () => {
};
function useStoreState(store, keyOrSelector = _ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_2__.identity) {
  const storeSubscribe = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (callback) => {
      if (!store) return noopSubscribe();
      return (0,_ariakit_core_utils_store__WEBPACK_IMPORTED_MODULE_3__.subscribe)(store, null, callback);
    },
    [store]
  );
  const getSnapshot = () => {
    const key = typeof keyOrSelector === "string" ? keyOrSelector : null;
    const selector = typeof keyOrSelector === "function" ? keyOrSelector : null;
    const state = store == null ? void 0 : store.getState();
    if (selector) return selector(state);
    if (!state) return;
    if (!key) return;
    if (!(0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_2__.hasOwnProperty)(state, key)) return;
    return state[key];
  };
  return useSyncExternalStore(storeSubscribe, getSnapshot, getSnapshot);
}
function useStoreProps(store, props, key, setKey) {
  const value = (0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_2__.hasOwnProperty)(props, key) ? props[key] : void 0;
  const setValue = setKey ? props[setKey] : void 0;
  const propsRef = (0,_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_4__.useLiveRef)({ value, setValue });
  (0,_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_4__.useSafeLayoutEffect)(() => {
    return (0,_ariakit_core_utils_store__WEBPACK_IMPORTED_MODULE_3__.sync)(store, [key], (state, prev) => {
      const { value: value2, setValue: setValue2 } = propsRef.current;
      if (!setValue2) return;
      if (state[key] === prev[key]) return;
      if (state[key] === value2) return;
      setValue2(state[key]);
    });
  }, [store, key]);
  (0,_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_4__.useSafeLayoutEffect)(() => {
    if (value === void 0) return;
    store.setState(key, value);
    return (0,_ariakit_core_utils_store__WEBPACK_IMPORTED_MODULE_3__.batch)(store, [key], () => {
      if (value === void 0) return;
      store.setState(key, value);
    });
  });
}
function useStore(createStore, props) {
  const [store, setStore] = react__WEBPACK_IMPORTED_MODULE_0__.useState(() => createStore(props));
  (0,_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_4__.useSafeLayoutEffect)(() => (0,_ariakit_core_utils_store__WEBPACK_IMPORTED_MODULE_3__.init)(store), [store]);
  const useState2 = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (keyOrSelector) => useStoreState(store, keyOrSelector),
    [store]
  );
  const memoizedStore = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_5__.__spreadProps)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_5__.__spreadValues)({}, store), { useState: useState2 }),
    [store, useState2]
  );
  const updateStore = (0,_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_4__.useEvent)(() => {
    setStore((store2) => createStore((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_5__.__spreadValues)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_5__.__spreadValues)({}, props), store2.getState())));
  });
  return [memoizedStore, updateStore];
}




/***/ }),

/***/ "./node_modules/@ariakit/react-core/esm/__chunks/J4NXMVZC.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ariakit/react-core/esm/__chunks/J4NXMVZC.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComboboxContextProvider: () => (/* binding */ ComboboxContextProvider),
/* harmony export */   ComboboxItemCheckedContext: () => (/* binding */ ComboboxItemCheckedContext),
/* harmony export */   ComboboxItemValueContext: () => (/* binding */ ComboboxItemValueContext),
/* harmony export */   ComboboxListRoleContext: () => (/* binding */ ComboboxListRoleContext),
/* harmony export */   ComboboxScopedContextProvider: () => (/* binding */ ComboboxScopedContextProvider),
/* harmony export */   useComboboxContext: () => (/* binding */ useComboboxContext),
/* harmony export */   useComboboxProviderContext: () => (/* binding */ useComboboxProviderContext),
/* harmony export */   useComboboxScopedContext: () => (/* binding */ useComboboxScopedContext)
/* harmony export */ });
/* harmony import */ var _TN5Y26CD_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TN5Y26CD.js */ "./node_modules/@ariakit/react-core/esm/__chunks/TN5Y26CD.js");
/* harmony import */ var _M6ZUVZPG_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./M6ZUVZPG.js */ "./node_modules/@ariakit/react-core/esm/__chunks/M6ZUVZPG.js");
/* harmony import */ var _PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PTCNA5XT.js */ "./node_modules/@ariakit/react-core/esm/__chunks/PTCNA5XT.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
"use client";




// src/combobox/combobox-context.tsx

var ComboboxListRoleContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(
  void 0
);
var ctx = (0,_PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_1__.createStoreContext)(
  [_M6ZUVZPG_js__WEBPACK_IMPORTED_MODULE_2__.PopoverContextProvider, _TN5Y26CD_js__WEBPACK_IMPORTED_MODULE_3__.CompositeContextProvider],
  [_M6ZUVZPG_js__WEBPACK_IMPORTED_MODULE_2__.PopoverScopedContextProvider, _TN5Y26CD_js__WEBPACK_IMPORTED_MODULE_3__.CompositeScopedContextProvider]
);
var useComboboxContext = ctx.useContext;
var useComboboxScopedContext = ctx.useScopedContext;
var useComboboxProviderContext = ctx.useProviderContext;
var ComboboxContextProvider = ctx.ContextProvider;
var ComboboxScopedContextProvider = ctx.ScopedContextProvider;
var ComboboxItemValueContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(
  void 0
);
var ComboboxItemCheckedContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(false);




/***/ }),

/***/ "./node_modules/@ariakit/react-core/esm/__chunks/M6ZUVZPG.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ariakit/react-core/esm/__chunks/M6ZUVZPG.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PopoverContextProvider: () => (/* binding */ PopoverContextProvider),
/* harmony export */   PopoverScopedContextProvider: () => (/* binding */ PopoverScopedContextProvider),
/* harmony export */   usePopoverContext: () => (/* binding */ usePopoverContext),
/* harmony export */   usePopoverProviderContext: () => (/* binding */ usePopoverProviderContext),
/* harmony export */   usePopoverScopedContext: () => (/* binding */ usePopoverScopedContext)
/* harmony export */ });
/* harmony import */ var _32IPIQBR_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./32IPIQBR.js */ "./node_modules/@ariakit/react-core/esm/__chunks/32IPIQBR.js");
/* harmony import */ var _PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PTCNA5XT.js */ "./node_modules/@ariakit/react-core/esm/__chunks/PTCNA5XT.js");
"use client";



// src/popover/popover-context.tsx
var ctx = (0,_PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_0__.createStoreContext)(
  [_32IPIQBR_js__WEBPACK_IMPORTED_MODULE_1__.DialogContextProvider],
  [_32IPIQBR_js__WEBPACK_IMPORTED_MODULE_1__.DialogScopedContextProvider]
);
var usePopoverContext = ctx.useContext;
var usePopoverScopedContext = ctx.useScopedContext;
var usePopoverProviderContext = ctx.useProviderContext;
var PopoverContextProvider = ctx.ContextProvider;
var PopoverScopedContextProvider = ctx.ScopedContextProvider;




/***/ }),

/***/ "./node_modules/@ariakit/react-core/esm/__chunks/MTODTZOP.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ariakit/react-core/esm/__chunks/MTODTZOP.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CollectionContextProvider: () => (/* binding */ CollectionContextProvider),
/* harmony export */   CollectionScopedContextProvider: () => (/* binding */ CollectionScopedContextProvider),
/* harmony export */   useCollectionContext: () => (/* binding */ useCollectionContext),
/* harmony export */   useCollectionProviderContext: () => (/* binding */ useCollectionProviderContext),
/* harmony export */   useCollectionScopedContext: () => (/* binding */ useCollectionScopedContext)
/* harmony export */ });
/* harmony import */ var _PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PTCNA5XT.js */ "./node_modules/@ariakit/react-core/esm/__chunks/PTCNA5XT.js");
"use client";


// src/collection/collection-context.tsx
var ctx = (0,_PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_0__.createStoreContext)();
var useCollectionContext = ctx.useContext;
var useCollectionScopedContext = ctx.useScopedContext;
var useCollectionProviderContext = ctx.useProviderContext;
var CollectionContextProvider = ctx.ContextProvider;
var CollectionScopedContextProvider = ctx.ScopedContextProvider;




/***/ }),

/***/ "./node_modules/@ariakit/react-core/esm/__chunks/O6W3KMIU.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ariakit/react-core/esm/__chunks/O6W3KMIU.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCompositeStore: () => (/* binding */ useCompositeStore),
/* harmony export */   useCompositeStoreProps: () => (/* binding */ useCompositeStoreProps)
/* harmony export */ });
/* harmony import */ var _TCS6QBGM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TCS6QBGM.js */ "./node_modules/@ariakit/react-core/esm/__chunks/TCS6QBGM.js");
/* harmony import */ var _FQ77EHUR_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FQ77EHUR.js */ "./node_modules/@ariakit/react-core/esm/__chunks/FQ77EHUR.js");
/* harmony import */ var _ariakit_core_composite_composite_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ariakit/core/composite/composite-store */ "./node_modules/@ariakit/core/esm/__chunks/D7EIQZAU.js");
"use client";



// src/composite/composite-store.ts

function useCompositeStoreProps(store, update, props) {
  store = (0,_TCS6QBGM_js__WEBPACK_IMPORTED_MODULE_0__.useCollectionStoreProps)(store, update, props);
  (0,_FQ77EHUR_js__WEBPACK_IMPORTED_MODULE_1__.useStoreProps)(store, props, "activeId", "setActiveId");
  (0,_FQ77EHUR_js__WEBPACK_IMPORTED_MODULE_1__.useStoreProps)(store, props, "includesBaseElement");
  (0,_FQ77EHUR_js__WEBPACK_IMPORTED_MODULE_1__.useStoreProps)(store, props, "virtualFocus");
  (0,_FQ77EHUR_js__WEBPACK_IMPORTED_MODULE_1__.useStoreProps)(store, props, "orientation");
  (0,_FQ77EHUR_js__WEBPACK_IMPORTED_MODULE_1__.useStoreProps)(store, props, "rtl");
  (0,_FQ77EHUR_js__WEBPACK_IMPORTED_MODULE_1__.useStoreProps)(store, props, "focusLoop");
  (0,_FQ77EHUR_js__WEBPACK_IMPORTED_MODULE_1__.useStoreProps)(store, props, "focusWrap");
  (0,_FQ77EHUR_js__WEBPACK_IMPORTED_MODULE_1__.useStoreProps)(store, props, "focusShift");
  return store;
}
function useCompositeStore(props = {}) {
  const [store, update] = (0,_FQ77EHUR_js__WEBPACK_IMPORTED_MODULE_1__.useStore)(_ariakit_core_composite_composite_store__WEBPACK_IMPORTED_MODULE_2__.createCompositeStore, props);
  return useCompositeStoreProps(store, update, props);
}




/***/ }),

/***/ "./node_modules/@ariakit/react-core/esm/__chunks/PMFZK2Z4.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ariakit/react-core/esm/__chunks/PMFZK2Z4.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CompositeHover: () => (/* binding */ CompositeHover),
/* harmony export */   useCompositeHover: () => (/* binding */ useCompositeHover)
/* harmony export */ });
/* harmony import */ var _TN5Y26CD_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TN5Y26CD.js */ "./node_modules/@ariakit/react-core/esm/__chunks/TN5Y26CD.js");
/* harmony import */ var _PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PTCNA5XT.js */ "./node_modules/@ariakit/react-core/esm/__chunks/PTCNA5XT.js");
/* harmony import */ var _WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WX6L4ACS.js */ "./node_modules/@ariakit/react-core/esm/__chunks/WX6L4ACS.js");
/* harmony import */ var _3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./3YLGPPWQ.js */ "./node_modules/@ariakit/react-core/esm/__chunks/3YLGPPWQ.js");
/* harmony import */ var _ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ariakit/core/utils/dom */ "./node_modules/@ariakit/core/esm/__chunks/HWOIWM4O.js");
/* harmony import */ var _ariakit_core_utils_focus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ariakit/core/utils/focus */ "./node_modules/@ariakit/core/esm/utils/focus.js");
/* harmony import */ var _ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ariakit/core/utils/misc */ "./node_modules/@ariakit/core/esm/__chunks/PBFD2E7P.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
"use client";





// src/composite/composite-hover.tsx




var TagName = "div";
function getMouseDestination(event) {
  const relatedTarget = event.relatedTarget;
  if ((relatedTarget == null ? void 0 : relatedTarget.nodeType) === Node.ELEMENT_NODE) {
    return relatedTarget;
  }
  return null;
}
function hoveringInside(event) {
  const nextElement = getMouseDestination(event);
  if (!nextElement) return false;
  return (0,_ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_1__.contains)(event.currentTarget, nextElement);
}
var symbol = Symbol("composite-hover");
function movingToAnotherItem(event) {
  let dest = getMouseDestination(event);
  if (!dest) return false;
  do {
    if ((0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_2__.hasOwnProperty)(dest, symbol) && dest[symbol]) return true;
    dest = dest.parentElement;
  } while (dest);
  return false;
}
var useCompositeHover = (0,_PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_3__.createHook)(
  function useCompositeHover2(_a) {
    var _b = _a, {
      store,
      focusOnHover = true,
      blurOnHoverEnd = !!focusOnHover
    } = _b, props = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_4__.__objRest)(_b, [
      "store",
      "focusOnHover",
      "blurOnHoverEnd"
    ]);
    const context = (0,_TN5Y26CD_js__WEBPACK_IMPORTED_MODULE_5__.useCompositeContext)();
    store = store || context;
    (0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_2__.invariant)(
      store,
       true && "CompositeHover must be wrapped in a Composite component."
    );
    const isMouseMoving = (0,_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_6__.useIsMouseMoving)();
    const onMouseMoveProp = props.onMouseMove;
    const focusOnHoverProp = (0,_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_6__.useBooleanEvent)(focusOnHover);
    const onMouseMove = (0,_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_6__.useEvent)((event) => {
      onMouseMoveProp == null ? void 0 : onMouseMoveProp(event);
      if (event.defaultPrevented) return;
      if (!isMouseMoving()) return;
      if (!focusOnHoverProp(event)) return;
      if (!(0,_ariakit_core_utils_focus__WEBPACK_IMPORTED_MODULE_7__.hasFocusWithin)(event.currentTarget)) {
        const baseElement = store == null ? void 0 : store.getState().baseElement;
        if (baseElement && !(0,_ariakit_core_utils_focus__WEBPACK_IMPORTED_MODULE_7__.hasFocus)(baseElement)) {
          baseElement.focus();
        }
      }
      store == null ? void 0 : store.setActiveId(event.currentTarget.id);
    });
    const onMouseLeaveProp = props.onMouseLeave;
    const blurOnHoverEndProp = (0,_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_6__.useBooleanEvent)(blurOnHoverEnd);
    const onMouseLeave = (0,_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_6__.useEvent)((event) => {
      var _a2;
      onMouseLeaveProp == null ? void 0 : onMouseLeaveProp(event);
      if (event.defaultPrevented) return;
      if (!isMouseMoving()) return;
      if (hoveringInside(event)) return;
      if (movingToAnotherItem(event)) return;
      if (!focusOnHoverProp(event)) return;
      if (!blurOnHoverEndProp(event)) return;
      store == null ? void 0 : store.setActiveId(null);
      (_a2 = store == null ? void 0 : store.getState().baseElement) == null ? void 0 : _a2.focus();
    });
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((element) => {
      if (!element) return;
      element[symbol] = true;
    }, []);
    props = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_4__.__spreadProps)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_4__.__spreadValues)({}, props), {
      ref: (0,_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_6__.useMergeRefs)(ref, props.ref),
      onMouseMove,
      onMouseLeave
    });
    return (0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_2__.removeUndefinedValues)(props);
  }
);
var CompositeHover = (0,_PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_3__.memo)(
  (0,_PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function CompositeHover2(props) {
    const htmlProps = useCompositeHover(props);
    return (0,_PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_3__.createElement)(TagName, htmlProps);
  })
);




/***/ }),

/***/ "./node_modules/@ariakit/react-core/esm/__chunks/PTCNA5XT.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ariakit/react-core/esm/__chunks/PTCNA5XT.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createElement: () => (/* binding */ createElement),
/* harmony export */   createHook: () => (/* binding */ createHook),
/* harmony export */   createStoreContext: () => (/* binding */ createStoreContext),
/* harmony export */   forwardRef: () => (/* binding */ forwardRef2),
/* harmony export */   memo: () => (/* binding */ memo2)
/* harmony export */ });
/* harmony import */ var _WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WX6L4ACS.js */ "./node_modules/@ariakit/react-core/esm/__chunks/WX6L4ACS.js");
/* harmony import */ var _SK3NAZA3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SK3NAZA3.js */ "./node_modules/@ariakit/react-core/esm/__chunks/SK3NAZA3.js");
/* harmony import */ var _3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./3YLGPPWQ.js */ "./node_modules/@ariakit/react-core/esm/__chunks/3YLGPPWQ.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
"use client";




// src/utils/system.tsx


function forwardRef2(render) {
  const Role = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, ref) => render((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__.__spreadProps)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__.__spreadValues)({}, props), { ref })));
  Role.displayName = render.displayName || render.name;
  return Role;
}
function memo2(Component, propsAreEqual) {
  return react__WEBPACK_IMPORTED_MODULE_0__.memo(Component, propsAreEqual);
}
function createElement(Type, props) {
  const _a = props, { wrapElement, render } = _a, rest = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__.__objRest)(_a, ["wrapElement", "render"]);
  const mergedRef = (0,_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_3__.useMergeRefs)(props.ref, (0,_SK3NAZA3_js__WEBPACK_IMPORTED_MODULE_4__.getRefProperty)(render));
  let element;
  if (react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(render)) {
    const renderProps = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__.__spreadProps)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__.__spreadValues)({}, render.props), { ref: mergedRef });
    element = react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(render, (0,_SK3NAZA3_js__WEBPACK_IMPORTED_MODULE_4__.mergeProps)(rest, renderProps));
  } else if (render) {
    element = render(rest);
  } else {
    element = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Type, (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__.__spreadValues)({}, rest));
  }
  if (wrapElement) {
    return wrapElement(element);
  }
  return element;
}
function createHook(useProps) {
  const useRole = (props = {}) => {
    return useProps(props);
  };
  useRole.displayName = useProps.name;
  return useRole;
}
function createStoreContext(providers = [], scopedProviders = []) {
  const context = react__WEBPACK_IMPORTED_MODULE_0__.createContext(void 0);
  const scopedContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(void 0);
  const useContext2 = () => react__WEBPACK_IMPORTED_MODULE_0__.useContext(context);
  const useScopedContext = (onlyScoped = false) => {
    const scoped = react__WEBPACK_IMPORTED_MODULE_0__.useContext(scopedContext);
    const store = useContext2();
    if (onlyScoped) return scoped;
    return scoped || store;
  };
  const useProviderContext = () => {
    const scoped = react__WEBPACK_IMPORTED_MODULE_0__.useContext(scopedContext);
    const store = useContext2();
    if (scoped && scoped === store) return;
    return store;
  };
  const ContextProvider = (props) => {
    return providers.reduceRight(
      (children, Provider) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Provider, (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__.__spreadProps)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__.__spreadValues)({}, props), { children })),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(context.Provider, (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__.__spreadValues)({}, props))
    );
  };
  const ScopedContextProvider = (props) => {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ContextProvider, (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__.__spreadProps)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__.__spreadValues)({}, props), { children: scopedProviders.reduceRight(
      (children, Provider) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Provider, (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__.__spreadProps)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__.__spreadValues)({}, props), { children })),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(scopedContext.Provider, (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__.__spreadValues)({}, props))
    ) }));
  };
  return {
    context,
    scopedContext,
    useContext: useContext2,
    useScopedContext,
    useProviderContext,
    ContextProvider,
    ScopedContextProvider
  };
}




/***/ }),

/***/ "./node_modules/@ariakit/react-core/esm/__chunks/PZGHQO5Y.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ariakit/react-core/esm/__chunks/PZGHQO5Y.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CollectionItem: () => (/* binding */ CollectionItem),
/* harmony export */   useCollectionItem: () => (/* binding */ useCollectionItem)
/* harmony export */ });
/* harmony import */ var _MTODTZOP_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MTODTZOP.js */ "./node_modules/@ariakit/react-core/esm/__chunks/MTODTZOP.js");
/* harmony import */ var _PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PTCNA5XT.js */ "./node_modules/@ariakit/react-core/esm/__chunks/PTCNA5XT.js");
/* harmony import */ var _WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./WX6L4ACS.js */ "./node_modules/@ariakit/react-core/esm/__chunks/WX6L4ACS.js");
/* harmony import */ var _3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./3YLGPPWQ.js */ "./node_modules/@ariakit/react-core/esm/__chunks/3YLGPPWQ.js");
/* harmony import */ var _ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ariakit/core/utils/misc */ "./node_modules/@ariakit/core/esm/__chunks/PBFD2E7P.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
"use client";





// src/collection/collection-item.tsx


var TagName = "div";
var useCollectionItem = (0,_PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_1__.createHook)(
  function useCollectionItem2(_a) {
    var _b = _a, {
      store,
      shouldRegisterItem = true,
      getItem = _ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_2__.identity,
      element: element
    } = _b, props = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_3__.__objRest)(_b, [
      "store",
      "shouldRegisterItem",
      "getItem",
      // @ts-expect-error This prop may come from a collection renderer.
      "element"
    ]);
    const context = (0,_MTODTZOP_js__WEBPACK_IMPORTED_MODULE_4__.useCollectionContext)();
    store = store || context;
    const id = (0,_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_5__.useId)(props.id);
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(element);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
      const element2 = ref.current;
      if (!id) return;
      if (!element2) return;
      if (!shouldRegisterItem) return;
      const item = getItem({ id, element: element2 });
      return store == null ? void 0 : store.renderItem(item);
    }, [id, shouldRegisterItem, getItem, store]);
    props = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_3__.__spreadProps)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_3__.__spreadValues)({}, props), {
      ref: (0,_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_5__.useMergeRefs)(ref, props.ref)
    });
    return (0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_2__.removeUndefinedValues)(props);
  }
);
var CollectionItem = (0,_PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function CollectionItem2(props) {
  const htmlProps = useCollectionItem(props);
  return (0,_PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TagName, htmlProps);
});




/***/ }),

/***/ "./node_modules/@ariakit/react-core/esm/__chunks/QAL7XKAT.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ariakit/react-core/esm/__chunks/QAL7XKAT.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useComboboxStore: () => (/* binding */ useComboboxStore),
/* harmony export */   useComboboxStoreProps: () => (/* binding */ useComboboxStoreProps)
/* harmony export */ });
/* harmony import */ var _XY6RPG62_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./XY6RPG62.js */ "./node_modules/@ariakit/react-core/esm/__chunks/XY6RPG62.js");
/* harmony import */ var _O6W3KMIU_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./O6W3KMIU.js */ "./node_modules/@ariakit/react-core/esm/__chunks/O6W3KMIU.js");
/* harmony import */ var _WB2VUSZO_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WB2VUSZO.js */ "./node_modules/@ariakit/react-core/esm/__chunks/WB2VUSZO.js");
/* harmony import */ var _FQ77EHUR_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FQ77EHUR.js */ "./node_modules/@ariakit/react-core/esm/__chunks/FQ77EHUR.js");
/* harmony import */ var _WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WX6L4ACS.js */ "./node_modules/@ariakit/react-core/esm/__chunks/WX6L4ACS.js");
/* harmony import */ var _3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./3YLGPPWQ.js */ "./node_modules/@ariakit/react-core/esm/__chunks/3YLGPPWQ.js");
/* harmony import */ var _ariakit_core_combobox_combobox_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ariakit/core/combobox/combobox-store */ "./node_modules/@ariakit/core/esm/combobox/combobox-store.js");
"use client";







// src/combobox/combobox-store.ts

function useComboboxStoreProps(store, update, props) {
  (0,_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_0__.useUpdateEffect)(update, [props.tag]);
  (0,_FQ77EHUR_js__WEBPACK_IMPORTED_MODULE_1__.useStoreProps)(store, props, "value", "setValue");
  (0,_FQ77EHUR_js__WEBPACK_IMPORTED_MODULE_1__.useStoreProps)(store, props, "selectedValue", "setSelectedValue");
  (0,_FQ77EHUR_js__WEBPACK_IMPORTED_MODULE_1__.useStoreProps)(store, props, "resetValueOnHide");
  (0,_FQ77EHUR_js__WEBPACK_IMPORTED_MODULE_1__.useStoreProps)(store, props, "resetValueOnSelect");
  return Object.assign(
    (0,_O6W3KMIU_js__WEBPACK_IMPORTED_MODULE_2__.useCompositeStoreProps)(
      (0,_WB2VUSZO_js__WEBPACK_IMPORTED_MODULE_3__.usePopoverStoreProps)(store, update, props),
      update,
      props
    ),
    { tag: props.tag }
  );
}
function useComboboxStore(props = {}) {
  const tag = (0,_XY6RPG62_js__WEBPACK_IMPORTED_MODULE_4__.useTagContext)();
  props = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_5__.__spreadProps)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_5__.__spreadValues)({}, props), {
    tag: props.tag !== void 0 ? props.tag : tag
  });
  const [store, update] = (0,_FQ77EHUR_js__WEBPACK_IMPORTED_MODULE_1__.useStore)(_ariakit_core_combobox_combobox_store__WEBPACK_IMPORTED_MODULE_6__.createComboboxStore, props);
  return useComboboxStoreProps(store, update, props);
}




/***/ }),

/***/ "./node_modules/@ariakit/react-core/esm/__chunks/SK3NAZA3.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ariakit/react-core/esm/__chunks/SK3NAZA3.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRefProperty: () => (/* binding */ getRefProperty),
/* harmony export */   isValidElementWithRef: () => (/* binding */ isValidElementWithRef),
/* harmony export */   mergeProps: () => (/* binding */ mergeProps),
/* harmony export */   setRef: () => (/* binding */ setRef)
/* harmony export */ });
/* harmony import */ var _3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./3YLGPPWQ.js */ "./node_modules/@ariakit/react-core/esm/__chunks/3YLGPPWQ.js");
/* harmony import */ var _ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ariakit/core/utils/misc */ "./node_modules/@ariakit/core/esm/__chunks/PBFD2E7P.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
"use client";


// src/utils/misc.ts


function setRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}
function isValidElementWithRef(element) {
  if (!element) return false;
  if (!(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(element)) return false;
  if ("ref" in element.props) return true;
  if ("ref" in element) return true;
  return false;
}
function getRefProperty(element) {
  if (!isValidElementWithRef(element)) return null;
  const props = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_1__.__spreadValues)({}, element.props);
  return props.ref || element.ref;
}
function mergeProps(base, overrides) {
  const props = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_1__.__spreadValues)({}, base);
  for (const key in overrides) {
    if (!(0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_2__.hasOwnProperty)(overrides, key)) continue;
    if (key === "className") {
      const prop = "className";
      props[prop] = base[prop] ? `${base[prop]} ${overrides[prop]}` : overrides[prop];
      continue;
    }
    if (key === "style") {
      const prop = "style";
      props[prop] = base[prop] ? (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_1__.__spreadValues)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_1__.__spreadValues)({}, base[prop]), overrides[prop]) : overrides[prop];
      continue;
    }
    const overrideValue = overrides[key];
    if (typeof overrideValue === "function" && key.startsWith("on")) {
      const baseValue = base[key];
      if (typeof baseValue === "function") {
        props[key] = (...args) => {
          overrideValue(...args);
          baseValue(...args);
        };
        continue;
      }
    }
    props[key] = overrideValue;
  }
  return props;
}




/***/ }),

/***/ "./node_modules/@ariakit/react-core/esm/__chunks/SWN3JYXT.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ariakit/react-core/esm/__chunks/SWN3JYXT.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FocusableContext: () => (/* binding */ FocusableContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
"use client";

// src/focusable/focusable-context.tsx

var FocusableContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(true);




/***/ }),

/***/ "./node_modules/@ariakit/react-core/esm/__chunks/TCS6QBGM.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ariakit/react-core/esm/__chunks/TCS6QBGM.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCollectionStore: () => (/* binding */ useCollectionStore),
/* harmony export */   useCollectionStoreProps: () => (/* binding */ useCollectionStoreProps)
/* harmony export */ });
/* harmony import */ var _FQ77EHUR_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FQ77EHUR.js */ "./node_modules/@ariakit/react-core/esm/__chunks/FQ77EHUR.js");
/* harmony import */ var _WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WX6L4ACS.js */ "./node_modules/@ariakit/react-core/esm/__chunks/WX6L4ACS.js");
/* harmony import */ var _ariakit_core_collection_collection_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ariakit/core/collection/collection-store */ "./node_modules/@ariakit/core/esm/__chunks/6DHTHWXD.js");
"use client";



// src/collection/collection-store.ts

function useCollectionStoreProps(store, update, props) {
  (0,_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_0__.useUpdateEffect)(update, [props.store]);
  (0,_FQ77EHUR_js__WEBPACK_IMPORTED_MODULE_1__.useStoreProps)(store, props, "items", "setItems");
  return store;
}
function useCollectionStore(props = {}) {
  const [store, update] = (0,_FQ77EHUR_js__WEBPACK_IMPORTED_MODULE_1__.useStore)(_ariakit_core_collection_collection_store__WEBPACK_IMPORTED_MODULE_2__.createCollectionStore, props);
  return useCollectionStoreProps(store, update, props);
}




/***/ }),

/***/ "./node_modules/@ariakit/react-core/esm/__chunks/TN5Y26CD.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ariakit/react-core/esm/__chunks/TN5Y26CD.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CompositeContextProvider: () => (/* binding */ CompositeContextProvider),
/* harmony export */   CompositeItemContext: () => (/* binding */ CompositeItemContext),
/* harmony export */   CompositeRowContext: () => (/* binding */ CompositeRowContext),
/* harmony export */   CompositeScopedContextProvider: () => (/* binding */ CompositeScopedContextProvider),
/* harmony export */   useCompositeContext: () => (/* binding */ useCompositeContext),
/* harmony export */   useCompositeProviderContext: () => (/* binding */ useCompositeProviderContext),
/* harmony export */   useCompositeScopedContext: () => (/* binding */ useCompositeScopedContext)
/* harmony export */ });
/* harmony import */ var _MTODTZOP_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MTODTZOP.js */ "./node_modules/@ariakit/react-core/esm/__chunks/MTODTZOP.js");
/* harmony import */ var _PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PTCNA5XT.js */ "./node_modules/@ariakit/react-core/esm/__chunks/PTCNA5XT.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
"use client";



// src/composite/composite-context.tsx

var ctx = (0,_PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_1__.createStoreContext)(
  [_MTODTZOP_js__WEBPACK_IMPORTED_MODULE_2__.CollectionContextProvider],
  [_MTODTZOP_js__WEBPACK_IMPORTED_MODULE_2__.CollectionScopedContextProvider]
);
var useCompositeContext = ctx.useContext;
var useCompositeScopedContext = ctx.useScopedContext;
var useCompositeProviderContext = ctx.useProviderContext;
var CompositeContextProvider = ctx.ContextProvider;
var CompositeScopedContextProvider = ctx.ScopedContextProvider;
var CompositeItemContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(
  void 0
);
var CompositeRowContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(
  void 0
);




/***/ }),

/***/ "./node_modules/@ariakit/react-core/esm/__chunks/TUWQEMG5.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ariakit/react-core/esm/__chunks/TUWQEMG5.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useDisclosureStore: () => (/* binding */ useDisclosureStore),
/* harmony export */   useDisclosureStoreProps: () => (/* binding */ useDisclosureStoreProps)
/* harmony export */ });
/* harmony import */ var _FQ77EHUR_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FQ77EHUR.js */ "./node_modules/@ariakit/react-core/esm/__chunks/FQ77EHUR.js");
/* harmony import */ var _WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WX6L4ACS.js */ "./node_modules/@ariakit/react-core/esm/__chunks/WX6L4ACS.js");
/* harmony import */ var _ariakit_core_disclosure_disclosure_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ariakit/core/disclosure/disclosure-store */ "./node_modules/@ariakit/core/esm/__chunks/6E4KKOSB.js");
"use client";



// src/disclosure/disclosure-store.ts

function useDisclosureStoreProps(store, update, props) {
  (0,_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_0__.useUpdateEffect)(update, [props.store, props.disclosure]);
  (0,_FQ77EHUR_js__WEBPACK_IMPORTED_MODULE_1__.useStoreProps)(store, props, "open", "setOpen");
  (0,_FQ77EHUR_js__WEBPACK_IMPORTED_MODULE_1__.useStoreProps)(store, props, "mounted", "setMounted");
  (0,_FQ77EHUR_js__WEBPACK_IMPORTED_MODULE_1__.useStoreProps)(store, props, "animated");
  return Object.assign(store, { disclosure: props.disclosure });
}
function useDisclosureStore(props = {}) {
  const [store, update] = (0,_FQ77EHUR_js__WEBPACK_IMPORTED_MODULE_1__.useStore)(_ariakit_core_disclosure_disclosure_store__WEBPACK_IMPORTED_MODULE_2__.createDisclosureStore, props);
  return useDisclosureStoreProps(store, update, props);
}




/***/ }),

/***/ "./node_modules/@ariakit/react-core/esm/__chunks/WB2VUSZO.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ariakit/react-core/esm/__chunks/WB2VUSZO.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   usePopoverStore: () => (/* binding */ usePopoverStore),
/* harmony export */   usePopoverStoreProps: () => (/* binding */ usePopoverStoreProps)
/* harmony export */ });
/* harmony import */ var _XRRE3XFB_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./XRRE3XFB.js */ "./node_modules/@ariakit/react-core/esm/__chunks/XRRE3XFB.js");
/* harmony import */ var _FQ77EHUR_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FQ77EHUR.js */ "./node_modules/@ariakit/react-core/esm/__chunks/FQ77EHUR.js");
/* harmony import */ var _WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WX6L4ACS.js */ "./node_modules/@ariakit/react-core/esm/__chunks/WX6L4ACS.js");
/* harmony import */ var _ariakit_core_popover_popover_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ariakit/core/popover/popover-store */ "./node_modules/@ariakit/core/esm/__chunks/3UYWTADI.js");
"use client";




// src/popover/popover-store.ts

function usePopoverStoreProps(store, update, props) {
  (0,_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_0__.useUpdateEffect)(update, [props.popover]);
  (0,_FQ77EHUR_js__WEBPACK_IMPORTED_MODULE_1__.useStoreProps)(store, props, "placement");
  return (0,_XRRE3XFB_js__WEBPACK_IMPORTED_MODULE_2__.useDialogStoreProps)(store, update, props);
}
function usePopoverStore(props = {}) {
  const [store, update] = (0,_FQ77EHUR_js__WEBPACK_IMPORTED_MODULE_1__.useStore)(_ariakit_core_popover_popover_store__WEBPACK_IMPORTED_MODULE_3__.createPopoverStore, props);
  return usePopoverStoreProps(store, update, props);
}




/***/ }),

/***/ "./node_modules/@ariakit/react-core/esm/__chunks/WOYVW654.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ariakit/react-core/esm/__chunks/WOYVW654.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DisclosureContent: () => (/* binding */ DisclosureContent),
/* harmony export */   isHidden: () => (/* binding */ isHidden),
/* harmony export */   useDisclosureContent: () => (/* binding */ useDisclosureContent)
/* harmony export */ });
/* harmony import */ var _32IPIQBR_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./32IPIQBR.js */ "./node_modules/@ariakit/react-core/esm/__chunks/32IPIQBR.js");
/* harmony import */ var _EQMNTDLB_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EQMNTDLB.js */ "./node_modules/@ariakit/react-core/esm/__chunks/EQMNTDLB.js");
/* harmony import */ var _PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PTCNA5XT.js */ "./node_modules/@ariakit/react-core/esm/__chunks/PTCNA5XT.js");
/* harmony import */ var _FQ77EHUR_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FQ77EHUR.js */ "./node_modules/@ariakit/react-core/esm/__chunks/FQ77EHUR.js");
/* harmony import */ var _WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./WX6L4ACS.js */ "./node_modules/@ariakit/react-core/esm/__chunks/WX6L4ACS.js");
/* harmony import */ var _3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./3YLGPPWQ.js */ "./node_modules/@ariakit/react-core/esm/__chunks/3YLGPPWQ.js");
/* harmony import */ var _ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ariakit/core/utils/misc */ "./node_modules/@ariakit/core/esm/__chunks/PBFD2E7P.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
"use client";







// src/disclosure/disclosure-content.tsx




var TagName = "div";
function afterTimeout(timeoutMs, cb) {
  const timeoutId = setTimeout(cb, timeoutMs);
  return () => clearTimeout(timeoutId);
}
function afterPaint(cb) {
  let raf = requestAnimationFrame(() => {
    raf = requestAnimationFrame(cb);
  });
  return () => cancelAnimationFrame(raf);
}
function parseCSSTime(...times) {
  return times.join(", ").split(", ").reduce((longestTime, currentTimeString) => {
    const multiplier = currentTimeString.endsWith("ms") ? 1 : 1e3;
    const currentTime = Number.parseFloat(currentTimeString || "0s") * multiplier;
    if (currentTime > longestTime) return currentTime;
    return longestTime;
  }, 0);
}
function isHidden(mounted, hidden, alwaysVisible) {
  return !alwaysVisible && hidden !== false && (!mounted || !!hidden);
}
var useDisclosureContent = (0,_PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_3__.createHook)(function useDisclosureContent2(_a) {
  var _b = _a, { store, alwaysVisible } = _b, props = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_4__.__objRest)(_b, ["store", "alwaysVisible"]);
  const context = (0,_EQMNTDLB_js__WEBPACK_IMPORTED_MODULE_5__.useDisclosureProviderContext)();
  store = store || context;
  (0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_6__.invariant)(
    store,
     true && "DisclosureContent must receive a `store` prop or be wrapped in a DisclosureProvider component."
  );
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const id = (0,_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_7__.useId)(props.id);
  const [transition, setTransition] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const open = store.useState("open");
  const mounted = store.useState("mounted");
  const animated = store.useState("animated");
  const contentElement = store.useState("contentElement");
  const otherElement = (0,_FQ77EHUR_js__WEBPACK_IMPORTED_MODULE_8__.useStoreState)(store.disclosure, "contentElement");
  (0,_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_7__.useSafeLayoutEffect)(() => {
    if (!ref.current) return;
    store == null ? void 0 : store.setContentElement(ref.current);
  }, [store]);
  (0,_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_7__.useSafeLayoutEffect)(() => {
    let previousAnimated;
    store == null ? void 0 : store.setState("animated", (animated2) => {
      previousAnimated = animated2;
      return true;
    });
    return () => {
      if (previousAnimated === void 0) return;
      store == null ? void 0 : store.setState("animated", previousAnimated);
    };
  }, [store]);
  (0,_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_7__.useSafeLayoutEffect)(() => {
    if (!animated) return;
    if (!(contentElement == null ? void 0 : contentElement.isConnected)) {
      setTransition(null);
      return;
    }
    return afterPaint(() => {
      setTransition(open ? "enter" : mounted ? "leave" : null);
    });
  }, [animated, contentElement, open, mounted]);
  (0,_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_7__.useSafeLayoutEffect)(() => {
    if (!store) return;
    if (!animated) return;
    const stopAnimation = () => store == null ? void 0 : store.setState("animating", false);
    const stopAnimationSync = () => (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync)(stopAnimation);
    if (!transition || !contentElement) {
      stopAnimation();
      return;
    }
    if (transition === "leave" && open) return;
    if (transition === "enter" && !open) return;
    if (typeof animated === "number") {
      const timeout2 = animated;
      return afterTimeout(timeout2, stopAnimationSync);
    }
    const {
      transitionDuration,
      animationDuration,
      transitionDelay,
      animationDelay
    } = getComputedStyle(contentElement);
    const {
      transitionDuration: transitionDuration2 = "0",
      animationDuration: animationDuration2 = "0",
      transitionDelay: transitionDelay2 = "0",
      animationDelay: animationDelay2 = "0"
    } = otherElement ? getComputedStyle(otherElement) : {};
    const delay = parseCSSTime(
      transitionDelay,
      animationDelay,
      transitionDelay2,
      animationDelay2
    );
    const duration = parseCSSTime(
      transitionDuration,
      animationDuration,
      transitionDuration2,
      animationDuration2
    );
    const timeout = delay + duration;
    if (!timeout) {
      if (transition === "enter") {
        store.setState("animated", false);
      }
      stopAnimation();
      return;
    }
    const frameRate = 1e3 / 60;
    const maxTimeout = Math.max(timeout - frameRate, 0);
    return afterTimeout(maxTimeout, stopAnimationSync);
  }, [store, animated, contentElement, otherElement, open, transition]);
  props = (0,_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_7__.useWrapElement)(
    props,
    (element) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_32IPIQBR_js__WEBPACK_IMPORTED_MODULE_9__.DialogScopedContextProvider, { value: store, children: element }),
    [store]
  );
  const hidden = isHidden(mounted, props.hidden, alwaysVisible);
  const styleProp = props.style;
  const style = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (hidden) return (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_4__.__spreadProps)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_4__.__spreadValues)({}, styleProp), { display: "none" });
    return styleProp;
  }, [hidden, styleProp]);
  props = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_4__.__spreadProps)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_4__.__spreadValues)({
    id,
    "data-open": open || void 0,
    "data-enter": transition === "enter" || void 0,
    "data-leave": transition === "leave" || void 0,
    hidden
  }, props), {
    ref: (0,_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_7__.useMergeRefs)(id ? store.setContentElement : null, ref, props.ref),
    style
  });
  return (0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_6__.removeUndefinedValues)(props);
});
var DisclosureContentImpl = (0,_PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function DisclosureContentImpl2(props) {
  const htmlProps = useDisclosureContent(props);
  return (0,_PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_3__.createElement)(TagName, htmlProps);
});
var DisclosureContent = (0,_PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function DisclosureContent2(_a) {
  var _b = _a, {
    unmountOnHide
  } = _b, props = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_4__.__objRest)(_b, [
    "unmountOnHide"
  ]);
  const context = (0,_EQMNTDLB_js__WEBPACK_IMPORTED_MODULE_5__.useDisclosureProviderContext)();
  const store = props.store || context;
  const mounted = (0,_FQ77EHUR_js__WEBPACK_IMPORTED_MODULE_8__.useStoreState)(
    store,
    (state) => !unmountOnHide || (state == null ? void 0 : state.mounted)
  );
  if (mounted === false) return null;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(DisclosureContentImpl, (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_4__.__spreadValues)({}, props));
});




/***/ }),

/***/ "./node_modules/@ariakit/react-core/esm/__chunks/WX6L4ACS.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ariakit/react-core/esm/__chunks/WX6L4ACS.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useAttribute: () => (/* binding */ useAttribute),
/* harmony export */   useBooleanEvent: () => (/* binding */ useBooleanEvent),
/* harmony export */   useControlledState: () => (/* binding */ useControlledState),
/* harmony export */   useDeferredValue: () => (/* binding */ useDeferredValue),
/* harmony export */   useEvent: () => (/* binding */ useEvent),
/* harmony export */   useForceUpdate: () => (/* binding */ useForceUpdate),
/* harmony export */   useId: () => (/* binding */ useId),
/* harmony export */   useInitialValue: () => (/* binding */ useInitialValue),
/* harmony export */   useIsMouseMoving: () => (/* binding */ useIsMouseMoving),
/* harmony export */   useLazyValue: () => (/* binding */ useLazyValue),
/* harmony export */   useLiveRef: () => (/* binding */ useLiveRef),
/* harmony export */   useMergeRefs: () => (/* binding */ useMergeRefs),
/* harmony export */   useMetadataProps: () => (/* binding */ useMetadataProps),
/* harmony export */   usePortalRef: () => (/* binding */ usePortalRef),
/* harmony export */   usePreviousValue: () => (/* binding */ usePreviousValue),
/* harmony export */   useRefId: () => (/* binding */ useRefId),
/* harmony export */   useSafeLayoutEffect: () => (/* binding */ useSafeLayoutEffect),
/* harmony export */   useTagName: () => (/* binding */ useTagName),
/* harmony export */   useTransactionState: () => (/* binding */ useTransactionState),
/* harmony export */   useUpdateEffect: () => (/* binding */ useUpdateEffect),
/* harmony export */   useUpdateLayoutEffect: () => (/* binding */ useUpdateLayoutEffect),
/* harmony export */   useWrapElement: () => (/* binding */ useWrapElement)
/* harmony export */ });
/* harmony import */ var _SK3NAZA3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SK3NAZA3.js */ "./node_modules/@ariakit/react-core/esm/__chunks/SK3NAZA3.js");
/* harmony import */ var _3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./3YLGPPWQ.js */ "./node_modules/@ariakit/react-core/esm/__chunks/3YLGPPWQ.js");
/* harmony import */ var _ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ariakit/core/utils/dom */ "./node_modules/@ariakit/core/esm/__chunks/HWOIWM4O.js");
/* harmony import */ var _ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ariakit/core/utils/events */ "./node_modules/@ariakit/core/esm/utils/events.js");
/* harmony import */ var _ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ariakit/core/utils/misc */ "./node_modules/@ariakit/core/esm/__chunks/PBFD2E7P.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
"use client";



// src/utils/hooks.ts





var _React = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_1__.__spreadValues)({}, /*#__PURE__*/ (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__, 2))));
var useReactId = _React.useId;
var useReactDeferredValue = _React.useDeferredValue;
var useReactInsertionEffect = _React.useInsertionEffect;
var useSafeLayoutEffect = _ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_2__.canUseDOM ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;
function useInitialValue(value) {
  const [initialValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value);
  return initialValue;
}
function useLazyValue(init) {
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  if (ref.current === void 0) {
    ref.current = init();
  }
  return ref.current;
}
function useLiveRef(value) {
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value);
  useSafeLayoutEffect(() => {
    ref.current = value;
  });
  return ref;
}
function usePreviousValue(value) {
  const [previousValue, setPreviousValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value);
  if (value !== previousValue) {
    setPreviousValue(value);
  }
  return previousValue;
}
function useEvent(callback) {
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });
  if (useReactInsertionEffect) {
    useReactInsertionEffect(() => {
      ref.current = callback;
    });
  } else {
    ref.current = callback;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((...args) => {
    var _a;
    return (_a = ref.current) == null ? void 0 : _a.call(ref, ...args);
  }, []);
}
function useTransactionState(callback) {
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  useSafeLayoutEffect(() => {
    if (state == null) return;
    if (!callback) return;
    let prevState = null;
    callback((prev) => {
      prevState = prev;
      return state;
    });
    return () => {
      callback(prevState);
    };
  }, [state, callback]);
  return [state, setState];
}
function useMergeRefs(...refs) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!refs.some(Boolean)) return;
    return (value) => {
      for (const ref of refs) {
        (0,_SK3NAZA3_js__WEBPACK_IMPORTED_MODULE_3__.setRef)(ref, value);
      }
    };
  }, refs);
}
function useRefId(ref, deps) {
  const [id, setId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(void 0);
  useSafeLayoutEffect(() => {
    var _a;
    setId((_a = ref == null ? void 0 : ref.current) == null ? void 0 : _a.id);
  }, deps);
  return id;
}
function useId(defaultId) {
  if (useReactId) {
    const reactId = useReactId();
    if (defaultId) return defaultId;
    return reactId;
  }
  const [id, setId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultId);
  useSafeLayoutEffect(() => {
    if (defaultId || id) return;
    const random = Math.random().toString(36).substr(2, 6);
    setId(`id-${random}`);
  }, [defaultId, id]);
  return defaultId || id;
}
function useDeferredValue(value) {
  if (useReactDeferredValue) {
    return useReactDeferredValue(value);
  }
  const [deferredValue, setDeferredValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const raf = requestAnimationFrame(() => setDeferredValue(value));
    return () => cancelAnimationFrame(raf);
  }, [value]);
  return deferredValue;
}
function useTagName(refOrElement, type) {
  const stringOrUndefined = (type2) => {
    if (typeof type2 !== "string") return;
    return type2;
  };
  const [tagName, setTagName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => stringOrUndefined(type));
  useSafeLayoutEffect(() => {
    const element = refOrElement && "current" in refOrElement ? refOrElement.current : refOrElement;
    setTagName((element == null ? void 0 : element.tagName.toLowerCase()) || stringOrUndefined(type));
  }, [refOrElement, type]);
  return tagName;
}
function useAttribute(refOrElement, attributeName, defaultValue) {
  const [attribute, setAttribute] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultValue);
  useSafeLayoutEffect(() => {
    const element = refOrElement && "current" in refOrElement ? refOrElement.current : refOrElement;
    if (!element) return;
    const callback = () => {
      const value = element.getAttribute(attributeName);
      if (value == null) return;
      setAttribute(value);
    };
    const observer = new MutationObserver(callback);
    observer.observe(element, { attributeFilter: [attributeName] });
    callback();
    return () => observer.disconnect();
  }, [refOrElement, attributeName]);
  return attribute;
}
function useUpdateEffect(effect, deps) {
  const mounted = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (mounted.current) {
      return effect();
    }
    mounted.current = true;
  }, deps);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(
    () => () => {
      mounted.current = false;
    },
    []
  );
}
function useUpdateLayoutEffect(effect, deps) {
  const mounted = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  useSafeLayoutEffect(() => {
    if (mounted.current) {
      return effect();
    }
    mounted.current = true;
  }, deps);
  useSafeLayoutEffect(
    () => () => {
      mounted.current = false;
    },
    []
  );
}
function useControlledState(defaultState, state, setState) {
  const [localState, setLocalState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultState);
  const nextState = state !== void 0 ? state : localState;
  const stateRef = useLiveRef(state);
  const setStateRef = useLiveRef(setState);
  const nextStateRef = useLiveRef(nextState);
  const setNextState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((prevValue) => {
    const setStateProp = setStateRef.current;
    if (setStateProp) {
      if (isSetNextState(setStateProp)) {
        setStateProp(prevValue);
      } else {
        const nextValue = (0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_4__.applyState)(prevValue, nextStateRef.current);
        nextStateRef.current = nextValue;
        setStateProp(nextValue);
      }
    }
    if (stateRef.current === void 0) {
      setLocalState(prevValue);
    }
  }, []);
  defineSetNextState(setNextState);
  return [nextState, setNextState];
}
var SET_NEXT_STATE = Symbol("setNextState");
function isSetNextState(arg) {
  return arg[SET_NEXT_STATE] === true;
}
function defineSetNextState(arg) {
  if (!isSetNextState(arg)) {
    Object.defineProperty(arg, SET_NEXT_STATE, { value: true });
  }
}
function useForceUpdate() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(() => [], []);
}
function useBooleanEvent(booleanOrCallback) {
  return useEvent(
    typeof booleanOrCallback === "function" ? booleanOrCallback : () => booleanOrCallback
  );
}
function useWrapElement(props, callback, deps = []) {
  const wrapElement = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
    (element) => {
      if (props.wrapElement) {
        element = props.wrapElement(element);
      }
      return callback(element);
    },
    [...deps, props.wrapElement]
  );
  return (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_1__.__spreadProps)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_1__.__spreadValues)({}, props), { wrapElement });
}
function usePortalRef(portalProp = false, portalRefProp) {
  const [portalNode, setPortalNode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const portalRef = useMergeRefs(setPortalNode, portalRefProp);
  const domReady = !portalProp || portalNode;
  return { portalRef, portalNode, domReady };
}
function useMetadataProps(props, key, value) {
  const parent = props.onLoadedMetadataCapture;
  const onLoadedMetadataCapture = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return Object.assign(() => {
    }, (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_1__.__spreadProps)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_1__.__spreadValues)({}, parent), { [key]: value }));
  }, [parent, key, value]);
  return [parent == null ? void 0 : parent[key], { onLoadedMetadataCapture }];
}
function useIsMouseMoving() {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_5__.addGlobalEventListener)("mousemove", setMouseMoving, true);
    (0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_5__.addGlobalEventListener)("mousedown", resetMouseMoving, true);
    (0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_5__.addGlobalEventListener)("mouseup", resetMouseMoving, true);
    (0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_5__.addGlobalEventListener)("keydown", resetMouseMoving, true);
    (0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_5__.addGlobalEventListener)("scroll", resetMouseMoving, true);
  }, []);
  const isMouseMoving = useEvent(() => mouseMoving);
  return isMouseMoving;
}
var mouseMoving = false;
var previousScreenX = 0;
var previousScreenY = 0;
function hasMouseMovement(event) {
  const movementX = event.movementX || event.screenX - previousScreenX;
  const movementY = event.movementY || event.screenY - previousScreenY;
  previousScreenX = event.screenX;
  previousScreenY = event.screenY;
  return movementX || movementY || "development" === "test";
}
function setMouseMoving(event) {
  if (!hasMouseMovement(event)) return;
  mouseMoving = true;
}
function resetMouseMoving() {
  mouseMoving = false;
}




/***/ }),

/***/ "./node_modules/@ariakit/react-core/esm/__chunks/XRRE3XFB.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ariakit/react-core/esm/__chunks/XRRE3XFB.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useDialogStore: () => (/* binding */ useDialogStore),
/* harmony export */   useDialogStoreProps: () => (/* binding */ useDialogStoreProps)
/* harmony export */ });
/* harmony import */ var _TUWQEMG5_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TUWQEMG5.js */ "./node_modules/@ariakit/react-core/esm/__chunks/TUWQEMG5.js");
/* harmony import */ var _FQ77EHUR_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FQ77EHUR.js */ "./node_modules/@ariakit/react-core/esm/__chunks/FQ77EHUR.js");
/* harmony import */ var _ariakit_core_dialog_dialog_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ariakit/core/dialog/dialog-store */ "./node_modules/@ariakit/core/esm/__chunks/YOHCVXJB.js");
"use client";



// src/dialog/dialog-store.ts

function useDialogStoreProps(store, update, props) {
  return (0,_TUWQEMG5_js__WEBPACK_IMPORTED_MODULE_0__.useDisclosureStoreProps)(store, update, props);
}
function useDialogStore(props = {}) {
  const [store, update] = (0,_FQ77EHUR_js__WEBPACK_IMPORTED_MODULE_1__.useStore)(_ariakit_core_dialog_dialog_store__WEBPACK_IMPORTED_MODULE_2__.createDialogStore, props);
  return useDialogStoreProps(store, update, props);
}




/***/ }),

/***/ "./node_modules/@ariakit/react-core/esm/__chunks/XY6RPG62.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ariakit/react-core/esm/__chunks/XY6RPG62.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TagContextProvider: () => (/* binding */ TagContextProvider),
/* harmony export */   TagRemoveIdContext: () => (/* binding */ TagRemoveIdContext),
/* harmony export */   TagScopedContextProvider: () => (/* binding */ TagScopedContextProvider),
/* harmony export */   TagValueContext: () => (/* binding */ TagValueContext),
/* harmony export */   useTagContext: () => (/* binding */ useTagContext),
/* harmony export */   useTagProviderContext: () => (/* binding */ useTagProviderContext),
/* harmony export */   useTagScopedContext: () => (/* binding */ useTagScopedContext)
/* harmony export */ });
/* harmony import */ var _TN5Y26CD_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TN5Y26CD.js */ "./node_modules/@ariakit/react-core/esm/__chunks/TN5Y26CD.js");
/* harmony import */ var _PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PTCNA5XT.js */ "./node_modules/@ariakit/react-core/esm/__chunks/PTCNA5XT.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
"use client";



// src/tag/tag-context.tsx

var TagValueContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
var TagRemoveIdContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(
  null
);
var ctx = (0,_PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_1__.createStoreContext)(
  [_TN5Y26CD_js__WEBPACK_IMPORTED_MODULE_2__.CompositeContextProvider],
  [_TN5Y26CD_js__WEBPACK_IMPORTED_MODULE_2__.CompositeScopedContextProvider]
);
var useTagContext = ctx.useContext;
var useTagScopedContext = ctx.useScopedContext;
var useTagProviderContext = ctx.useProviderContext;
var TagContextProvider = ctx.ContextProvider;
var TagScopedContextProvider = ctx.ScopedContextProvider;




/***/ }),

/***/ "./node_modules/@ariakit/react-core/esm/__chunks/Y54YOYNA.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ariakit/react-core/esm/__chunks/Y54YOYNA.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Composite: () => (/* binding */ Composite),
/* harmony export */   useComposite: () => (/* binding */ useComposite)
/* harmony export */ });
/* harmony import */ var _5VQZOHHZ_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./5VQZOHHZ.js */ "./node_modules/@ariakit/react-core/esm/__chunks/5VQZOHHZ.js");
/* harmony import */ var _TN5Y26CD_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TN5Y26CD.js */ "./node_modules/@ariakit/react-core/esm/__chunks/TN5Y26CD.js");
/* harmony import */ var _DRL2GNLJ_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./DRL2GNLJ.js */ "./node_modules/@ariakit/react-core/esm/__chunks/DRL2GNLJ.js");
/* harmony import */ var _PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PTCNA5XT.js */ "./node_modules/@ariakit/react-core/esm/__chunks/PTCNA5XT.js");
/* harmony import */ var _WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WX6L4ACS.js */ "./node_modules/@ariakit/react-core/esm/__chunks/WX6L4ACS.js");
/* harmony import */ var _3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./3YLGPPWQ.js */ "./node_modules/@ariakit/react-core/esm/__chunks/3YLGPPWQ.js");
/* harmony import */ var _ariakit_core_utils_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ariakit/core/utils/array */ "./node_modules/@ariakit/core/esm/__chunks/7PRQYBBV.js");
/* harmony import */ var _ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ariakit/core/utils/dom */ "./node_modules/@ariakit/core/esm/__chunks/HWOIWM4O.js");
/* harmony import */ var _ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ariakit/core/utils/events */ "./node_modules/@ariakit/core/esm/utils/events.js");
/* harmony import */ var _ariakit_core_utils_focus__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ariakit/core/utils/focus */ "./node_modules/@ariakit/core/esm/utils/focus.js");
/* harmony import */ var _ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ariakit/core/utils/misc */ "./node_modules/@ariakit/core/esm/__chunks/PBFD2E7P.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
"use client";







// src/composite/composite.tsx







var TagName = "div";
function isGrid(items) {
  return items.some((item) => !!item.rowId);
}
function isPrintableKey(event) {
  const target = event.target;
  if (target && !(0,_ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_2__.isTextField)(target)) return false;
  return event.key.length === 1 && !event.ctrlKey && !event.metaKey;
}
function isModifierKey(event) {
  return event.key === "Shift" || event.key === "Control" || event.key === "Alt" || event.key === "Meta";
}
function useKeyboardEventProxy(store, onKeyboardEvent, previousElementRef) {
  return (0,_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_3__.useEvent)((event) => {
    var _a;
    onKeyboardEvent == null ? void 0 : onKeyboardEvent(event);
    if (event.defaultPrevented) return;
    if (event.isPropagationStopped()) return;
    if (!(0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_4__.isSelfTarget)(event)) return;
    if (isModifierKey(event)) return;
    if (isPrintableKey(event)) return;
    const state = store.getState();
    const activeElement = (_a = (0,_5VQZOHHZ_js__WEBPACK_IMPORTED_MODULE_5__.getEnabledItem)(store, state.activeId)) == null ? void 0 : _a.element;
    if (!activeElement) return;
    const _b = event, { view } = _b, eventInit = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_6__.__objRest)(_b, ["view"]);
    const previousElement = previousElementRef == null ? void 0 : previousElementRef.current;
    if (activeElement !== previousElement) {
      activeElement.focus();
    }
    if (!(0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_4__.fireKeyboardEvent)(activeElement, event.type, eventInit)) {
      event.preventDefault();
    }
    if (event.currentTarget.contains(activeElement)) {
      event.stopPropagation();
    }
  });
}
function findFirstEnabledItemInTheLastRow(items) {
  return (0,_5VQZOHHZ_js__WEBPACK_IMPORTED_MODULE_5__.findFirstEnabledItem)(
    (0,_ariakit_core_utils_array__WEBPACK_IMPORTED_MODULE_7__.flatten2DArray)((0,_ariakit_core_utils_array__WEBPACK_IMPORTED_MODULE_7__.reverseArray)((0,_5VQZOHHZ_js__WEBPACK_IMPORTED_MODULE_5__.groupItemsByRows)(items)))
  );
}
function useScheduleFocus(store) {
  const [scheduled, setScheduled] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const schedule = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => setScheduled(true), []);
  const activeItem = store.useState(
    (state) => (0,_5VQZOHHZ_js__WEBPACK_IMPORTED_MODULE_5__.getEnabledItem)(store, state.activeId)
  );
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const activeElement = activeItem == null ? void 0 : activeItem.element;
    if (!scheduled) return;
    if (!activeElement) return;
    setScheduled(false);
    activeElement.focus({ preventScroll: true });
  }, [activeItem, scheduled]);
  return schedule;
}
var useComposite = (0,_PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_8__.createHook)(
  function useComposite2(_a) {
    var _b = _a, {
      store,
      composite = true,
      focusOnMove = composite,
      moveOnKeyPress = true
    } = _b, props = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_6__.__objRest)(_b, [
      "store",
      "composite",
      "focusOnMove",
      "moveOnKeyPress"
    ]);
    const context = (0,_TN5Y26CD_js__WEBPACK_IMPORTED_MODULE_9__.useCompositeProviderContext)();
    store = store || context;
    (0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_10__.invariant)(
      store,
       true && "Composite must receive a `store` prop or be wrapped in a CompositeProvider component."
    );
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const previousElementRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const scheduleFocus = useScheduleFocus(store);
    const moves = store.useState("moves");
    const [, setBaseElement] = (0,_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_3__.useTransactionState)(
      composite ? store.setBaseElement : null
    );
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
      var _a2;
      if (!store) return;
      if (!moves) return;
      if (!composite) return;
      if (!focusOnMove) return;
      const { activeId: activeId2 } = store.getState();
      const itemElement = (_a2 = (0,_5VQZOHHZ_js__WEBPACK_IMPORTED_MODULE_5__.getEnabledItem)(store, activeId2)) == null ? void 0 : _a2.element;
      if (!itemElement) return;
      (0,_ariakit_core_utils_focus__WEBPACK_IMPORTED_MODULE_11__.focusIntoView)(itemElement);
    }, [store, moves, composite, focusOnMove]);
    (0,_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_3__.useSafeLayoutEffect)(() => {
      if (!store) return;
      if (!moves) return;
      if (!composite) return;
      const { baseElement, activeId: activeId2 } = store.getState();
      const isSelfAcive = activeId2 === null;
      if (!isSelfAcive) return;
      if (!baseElement) return;
      const previousElement = previousElementRef.current;
      previousElementRef.current = null;
      if (previousElement) {
        (0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_4__.fireBlurEvent)(previousElement, { relatedTarget: baseElement });
      }
      if (!(0,_ariakit_core_utils_focus__WEBPACK_IMPORTED_MODULE_11__.hasFocus)(baseElement)) {
        baseElement.focus();
      }
    }, [store, moves, composite]);
    const activeId = store.useState("activeId");
    const virtualFocus = store.useState("virtualFocus");
    (0,_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_3__.useSafeLayoutEffect)(() => {
      var _a2;
      if (!store) return;
      if (!composite) return;
      if (!virtualFocus) return;
      const previousElement = previousElementRef.current;
      previousElementRef.current = null;
      if (!previousElement) return;
      const activeElement = (_a2 = (0,_5VQZOHHZ_js__WEBPACK_IMPORTED_MODULE_5__.getEnabledItem)(store, activeId)) == null ? void 0 : _a2.element;
      const relatedTarget = activeElement || (0,_ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getActiveElement)(previousElement);
      if (relatedTarget === previousElement) return;
      (0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_4__.fireBlurEvent)(previousElement, { relatedTarget });
    }, [store, activeId, virtualFocus, composite]);
    const onKeyDownCapture = useKeyboardEventProxy(
      store,
      props.onKeyDownCapture,
      previousElementRef
    );
    const onKeyUpCapture = useKeyboardEventProxy(
      store,
      props.onKeyUpCapture,
      previousElementRef
    );
    const onFocusCaptureProp = props.onFocusCapture;
    const onFocusCapture = (0,_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_3__.useEvent)((event) => {
      onFocusCaptureProp == null ? void 0 : onFocusCaptureProp(event);
      if (event.defaultPrevented) return;
      if (!store) return;
      const { virtualFocus: virtualFocus2 } = store.getState();
      if (!virtualFocus2) return;
      const previousActiveElement = event.relatedTarget;
      const isSilentlyFocused = (0,_5VQZOHHZ_js__WEBPACK_IMPORTED_MODULE_5__.silentlyFocused)(event.currentTarget);
      if ((0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_4__.isSelfTarget)(event) && isSilentlyFocused) {
        event.stopPropagation();
        previousElementRef.current = previousActiveElement;
      }
    });
    const onFocusProp = props.onFocus;
    const onFocus = (0,_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_3__.useEvent)((event) => {
      onFocusProp == null ? void 0 : onFocusProp(event);
      if (event.defaultPrevented) return;
      if (!composite) return;
      if (!store) return;
      const { relatedTarget } = event;
      const { virtualFocus: virtualFocus2 } = store.getState();
      if (virtualFocus2) {
        if ((0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_4__.isSelfTarget)(event) && !(0,_5VQZOHHZ_js__WEBPACK_IMPORTED_MODULE_5__.isItem)(store, relatedTarget)) {
          queueMicrotask(scheduleFocus);
        }
      } else if ((0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_4__.isSelfTarget)(event)) {
        store.setActiveId(null);
      }
    });
    const onBlurCaptureProp = props.onBlurCapture;
    const onBlurCapture = (0,_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_3__.useEvent)((event) => {
      var _a2;
      onBlurCaptureProp == null ? void 0 : onBlurCaptureProp(event);
      if (event.defaultPrevented) return;
      if (!store) return;
      const { virtualFocus: virtualFocus2, activeId: activeId2 } = store.getState();
      if (!virtualFocus2) return;
      const activeElement = (_a2 = (0,_5VQZOHHZ_js__WEBPACK_IMPORTED_MODULE_5__.getEnabledItem)(store, activeId2)) == null ? void 0 : _a2.element;
      const nextActiveElement = event.relatedTarget;
      const nextActiveElementIsItem = (0,_5VQZOHHZ_js__WEBPACK_IMPORTED_MODULE_5__.isItem)(store, nextActiveElement);
      const previousElement = previousElementRef.current;
      previousElementRef.current = null;
      if ((0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_4__.isSelfTarget)(event) && nextActiveElementIsItem) {
        if (nextActiveElement === activeElement) {
          if (previousElement && previousElement !== nextActiveElement) {
            (0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_4__.fireBlurEvent)(previousElement, event);
          }
        } else if (activeElement) {
          (0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_4__.fireBlurEvent)(activeElement, event);
        } else if (previousElement) {
          (0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_4__.fireBlurEvent)(previousElement, event);
        }
        event.stopPropagation();
      } else {
        const targetIsItem = (0,_5VQZOHHZ_js__WEBPACK_IMPORTED_MODULE_5__.isItem)(store, event.target);
        if (!targetIsItem && activeElement) {
          (0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_4__.fireBlurEvent)(activeElement, event);
        }
      }
    });
    const onKeyDownProp = props.onKeyDown;
    const moveOnKeyPressProp = (0,_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_3__.useBooleanEvent)(moveOnKeyPress);
    const onKeyDown = (0,_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_3__.useEvent)((event) => {
      var _a2;
      onKeyDownProp == null ? void 0 : onKeyDownProp(event);
      if (event.defaultPrevented) return;
      if (!store) return;
      if (!(0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_4__.isSelfTarget)(event)) return;
      const { orientation, items, renderedItems, activeId: activeId2 } = store.getState();
      const activeItem = (0,_5VQZOHHZ_js__WEBPACK_IMPORTED_MODULE_5__.getEnabledItem)(store, activeId2);
      if ((_a2 = activeItem == null ? void 0 : activeItem.element) == null ? void 0 : _a2.isConnected) return;
      const isVertical = orientation !== "horizontal";
      const isHorizontal = orientation !== "vertical";
      const grid = isGrid(renderedItems);
      const isHorizontalKey = event.key === "ArrowLeft" || event.key === "ArrowRight" || event.key === "Home" || event.key === "End";
      if (isHorizontalKey && (0,_ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_2__.isTextField)(event.currentTarget)) return;
      const up = () => {
        if (grid) {
          const item = items && findFirstEnabledItemInTheLastRow(items);
          return item == null ? void 0 : item.id;
        }
        return store == null ? void 0 : store.last();
      };
      const keyMap = {
        ArrowUp: (grid || isVertical) && up,
        ArrowRight: (grid || isHorizontal) && store.first,
        ArrowDown: (grid || isVertical) && store.first,
        ArrowLeft: (grid || isHorizontal) && store.last,
        Home: store.first,
        End: store.last,
        PageUp: store.first,
        PageDown: store.last
      };
      const action = keyMap[event.key];
      if (action) {
        const id = action();
        if (id !== void 0) {
          if (!moveOnKeyPressProp(event)) return;
          event.preventDefault();
          store.move(id);
        }
      }
    });
    props = (0,_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_3__.useWrapElement)(
      props,
      (element) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_TN5Y26CD_js__WEBPACK_IMPORTED_MODULE_9__.CompositeContextProvider, { value: store, children: element }),
      [store]
    );
    const activeDescendant = store.useState((state) => {
      var _a2;
      if (!store) return;
      if (!composite) return;
      if (!state.virtualFocus) return;
      return (_a2 = (0,_5VQZOHHZ_js__WEBPACK_IMPORTED_MODULE_5__.getEnabledItem)(store, state.activeId)) == null ? void 0 : _a2.id;
    });
    props = (0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_6__.__spreadProps)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_6__.__spreadValues)({
      "aria-activedescendant": activeDescendant
    }, props), {
      ref: (0,_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_3__.useMergeRefs)(ref, setBaseElement, props.ref),
      onKeyDownCapture,
      onKeyUpCapture,
      onFocusCapture,
      onFocus,
      onBlurCapture,
      onKeyDown
    });
    const focusable = store.useState(
      (state) => composite && (state.virtualFocus || state.activeId === null)
    );
    props = (0,_DRL2GNLJ_js__WEBPACK_IMPORTED_MODULE_12__.useFocusable)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_6__.__spreadValues)({ focusable }, props));
    return props;
  }
);
var Composite = (0,_PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_8__.forwardRef)(function Composite2(props) {
  const htmlProps = useComposite(props);
  return (0,_PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_8__.createElement)(TagName, htmlProps);
});




/***/ }),

/***/ "./node_modules/@ariakit/react-core/esm/combobox/combobox-item-value.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@ariakit/react-core/esm/combobox/combobox-item-value.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComboboxItemValue: () => (/* binding */ ComboboxItemValue),
/* harmony export */   useComboboxItemValue: () => (/* binding */ useComboboxItemValue)
/* harmony export */ });
/* harmony import */ var _chunks_J4NXMVZC_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../__chunks/J4NXMVZC.js */ "./node_modules/@ariakit/react-core/esm/__chunks/J4NXMVZC.js");
/* harmony import */ var _chunks_PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../__chunks/PTCNA5XT.js */ "./node_modules/@ariakit/react-core/esm/__chunks/PTCNA5XT.js");
/* harmony import */ var _chunks_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../__chunks/3YLGPPWQ.js */ "./node_modules/@ariakit/react-core/esm/__chunks/3YLGPPWQ.js");
/* harmony import */ var _ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ariakit/core/utils/misc */ "./node_modules/@ariakit/core/esm/__chunks/PBFD2E7P.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
"use client";











// src/combobox/combobox-item-value.tsx



var TagName = "span";
function normalizeValue(value) {
  return (0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_2__.normalizeString)(value).toLowerCase();
}
function splitValue(itemValue, userValue) {
  userValue = normalizeValue(userValue);
  let index = normalizeValue(itemValue).indexOf(userValue);
  const parts = [];
  while (index !== -1) {
    if (index !== 0) {
      parts.push(
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", { "data-autocomplete-value": "", children: itemValue.substr(0, index) }, parts.length)
      );
    }
    parts.push(
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", { "data-user-value": "", children: itemValue.substr(index, userValue.length) }, parts.length)
    );
    itemValue = itemValue.substr(index + userValue.length);
    index = normalizeValue(itemValue).indexOf(userValue);
  }
  if (itemValue) {
    parts.push(
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", { "data-autocomplete-value": "", children: itemValue }, parts.length)
    );
  }
  return parts;
}
var useComboboxItemValue = (0,_chunks_PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_3__.createHook)(function useComboboxItemValue2(_a) {
  var _b = _a, { store, value } = _b, props = (0,_chunks_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_4__.__objRest)(_b, ["store", "value"]);
  const context = (0,_chunks_J4NXMVZC_js__WEBPACK_IMPORTED_MODULE_5__.useComboboxScopedContext)();
  store = store || context;
  const itemContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_chunks_J4NXMVZC_js__WEBPACK_IMPORTED_MODULE_5__.ComboboxItemValueContext);
  const itemValue = value != null ? value : itemContext;
  (0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_2__.invariant)(
    store,
     true && "ComboboxItemValue must be wrapped in a ComboboxItem component."
  );
  const stateValue = store.useState(
    (state) => itemValue && state.value ? state.value : void 0
  );
  const children = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(
    () => itemValue && stateValue ? splitValue(itemValue, stateValue) : itemValue,
    [itemValue, stateValue]
  );
  props = (0,_chunks_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_4__.__spreadValues)({
    children
  }, props);
  return (0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_2__.removeUndefinedValues)(props);
});
var ComboboxItemValue = (0,_chunks_PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function ComboboxItemValue2(props) {
  const htmlProps = useComboboxItemValue(props);
  return (0,_chunks_PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_3__.createElement)(TagName, htmlProps);
});



/***/ }),

/***/ "./node_modules/@ariakit/react-core/esm/combobox/combobox-item.js":
/*!************************************************************************!*\
  !*** ./node_modules/@ariakit/react-core/esm/combobox/combobox-item.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComboboxItem: () => (/* binding */ ComboboxItem),
/* harmony export */   useComboboxItem: () => (/* binding */ useComboboxItem)
/* harmony export */ });
/* harmony import */ var _chunks_PMFZK2Z4_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../__chunks/PMFZK2Z4.js */ "./node_modules/@ariakit/react-core/esm/__chunks/PMFZK2Z4.js");
/* harmony import */ var _chunks_J4NXMVZC_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../__chunks/J4NXMVZC.js */ "./node_modules/@ariakit/react-core/esm/__chunks/J4NXMVZC.js");
/* harmony import */ var _chunks_AOK4FW4L_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../__chunks/AOK4FW4L.js */ "./node_modules/@ariakit/react-core/esm/__chunks/AOK4FW4L.js");
/* harmony import */ var _chunks_PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../__chunks/PTCNA5XT.js */ "./node_modules/@ariakit/react-core/esm/__chunks/PTCNA5XT.js");
/* harmony import */ var _chunks_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../__chunks/WX6L4ACS.js */ "./node_modules/@ariakit/react-core/esm/__chunks/WX6L4ACS.js");
/* harmony import */ var _chunks_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../__chunks/3YLGPPWQ.js */ "./node_modules/@ariakit/react-core/esm/__chunks/3YLGPPWQ.js");
/* harmony import */ var _ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ariakit/core/utils/dom */ "./node_modules/@ariakit/core/esm/__chunks/HWOIWM4O.js");
/* harmony import */ var _ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ariakit/core/utils/events */ "./node_modules/@ariakit/core/esm/utils/events.js");
/* harmony import */ var _ariakit_core_utils_focus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ariakit/core/utils/focus */ "./node_modules/@ariakit/core/esm/utils/focus.js");
/* harmony import */ var _ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ariakit/core/utils/misc */ "./node_modules/@ariakit/core/esm/__chunks/PBFD2E7P.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
"use client";



















// src/combobox/combobox-item.tsx






var TagName = "div";
function isSelected(storeValue, itemValue) {
  if (itemValue == null) return;
  if (storeValue == null) return false;
  if (Array.isArray(storeValue)) {
    return storeValue.includes(itemValue);
  }
  return storeValue === itemValue;
}
function getItemRole(popupRole) {
  var _a;
  const itemRoleByPopupRole = {
    menu: "menuitem",
    listbox: "option",
    tree: "treeitem"
  };
  const key = popupRole;
  return (_a = itemRoleByPopupRole[key]) != null ? _a : "option";
}
var useComboboxItem = (0,_chunks_PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_2__.createHook)(
  function useComboboxItem2(_a) {
    var _b = _a, {
      store,
      value,
      hideOnClick,
      setValueOnClick,
      selectValueOnClick = true,
      resetValueOnSelect,
      focusOnHover = false,
      moveOnKeyPress = true,
      getItem: getItemProp
    } = _b, props = (0,_chunks_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_3__.__objRest)(_b, [
      "store",
      "value",
      "hideOnClick",
      "setValueOnClick",
      "selectValueOnClick",
      "resetValueOnSelect",
      "focusOnHover",
      "moveOnKeyPress",
      "getItem"
    ]);
    var _a2;
    const context = (0,_chunks_J4NXMVZC_js__WEBPACK_IMPORTED_MODULE_4__.useComboboxScopedContext)();
    store = store || context;
    (0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_5__.invariant)(
      store,
       true && "ComboboxItem must be wrapped in a ComboboxList or ComboboxPopover component."
    );
    const getItem = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
      (item) => {
        const nextItem = (0,_chunks_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_3__.__spreadProps)((0,_chunks_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_3__.__spreadValues)({}, item), { value });
        if (getItemProp) {
          return getItemProp(nextItem);
        }
        return nextItem;
      },
      [value, getItemProp]
    );
    const multiSelectable = store.useState(
      (state) => Array.isArray(state.selectedValue)
    );
    const selected = store.useState(
      (state) => isSelected(state.selectedValue, value)
    );
    const resetValueOnSelectState = store.useState("resetValueOnSelect");
    setValueOnClick = setValueOnClick != null ? setValueOnClick : !multiSelectable;
    hideOnClick = hideOnClick != null ? hideOnClick : value != null && !multiSelectable;
    const onClickProp = props.onClick;
    const setValueOnClickProp = (0,_chunks_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_6__.useBooleanEvent)(setValueOnClick);
    const selectValueOnClickProp = (0,_chunks_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_6__.useBooleanEvent)(selectValueOnClick);
    const resetValueOnSelectProp = (0,_chunks_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_6__.useBooleanEvent)(
      (_a2 = resetValueOnSelect != null ? resetValueOnSelect : resetValueOnSelectState) != null ? _a2 : multiSelectable
    );
    const hideOnClickProp = (0,_chunks_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_6__.useBooleanEvent)(hideOnClick);
    const onClick = (0,_chunks_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_6__.useEvent)((event) => {
      onClickProp == null ? void 0 : onClickProp(event);
      if (event.defaultPrevented) return;
      if ((0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_7__.isDownloading)(event)) return;
      if ((0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_7__.isOpeningInNewTab)(event)) return;
      if (value != null) {
        if (selectValueOnClickProp(event)) {
          if (resetValueOnSelectProp(event)) {
            store == null ? void 0 : store.resetValue();
          }
          store == null ? void 0 : store.setSelectedValue((prevValue) => {
            if (!Array.isArray(prevValue)) return value;
            if (prevValue.includes(value)) {
              return prevValue.filter((v) => v !== value);
            }
            return [...prevValue, value];
          });
        }
        if (setValueOnClickProp(event)) {
          store == null ? void 0 : store.setValue(value);
        }
      }
      if (hideOnClickProp(event)) {
        store == null ? void 0 : store.hide();
      }
    });
    const onKeyDownProp = props.onKeyDown;
    const onKeyDown = (0,_chunks_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_6__.useEvent)((event) => {
      onKeyDownProp == null ? void 0 : onKeyDownProp(event);
      if (event.defaultPrevented) return;
      const baseElement = store == null ? void 0 : store.getState().baseElement;
      if (!baseElement) return;
      if ((0,_ariakit_core_utils_focus__WEBPACK_IMPORTED_MODULE_8__.hasFocus)(baseElement)) return;
      const printable = event.key.length === 1;
      if (printable || event.key === "Backspace" || event.key === "Delete") {
        queueMicrotask(() => baseElement.focus());
        if ((0,_ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_9__.isTextField)(baseElement)) {
          store == null ? void 0 : store.setValue(baseElement.value);
        }
      }
    });
    if (multiSelectable && selected != null) {
      props = (0,_chunks_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_3__.__spreadValues)({
        "aria-selected": selected
      }, props);
    }
    props = (0,_chunks_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_6__.useWrapElement)(
      props,
      (element) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chunks_J4NXMVZC_js__WEBPACK_IMPORTED_MODULE_4__.ComboboxItemValueContext.Provider, { value, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chunks_J4NXMVZC_js__WEBPACK_IMPORTED_MODULE_4__.ComboboxItemCheckedContext.Provider, { value: selected != null ? selected : false, children: element }) }),
      [value, selected]
    );
    const popupRole = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_chunks_J4NXMVZC_js__WEBPACK_IMPORTED_MODULE_4__.ComboboxListRoleContext);
    props = (0,_chunks_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_3__.__spreadProps)((0,_chunks_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_3__.__spreadValues)({
      role: getItemRole(popupRole),
      children: value
    }, props), {
      onClick,
      onKeyDown
    });
    const moveOnKeyPressProp = (0,_chunks_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_6__.useBooleanEvent)(moveOnKeyPress);
    props = (0,_chunks_AOK4FW4L_js__WEBPACK_IMPORTED_MODULE_10__.useCompositeItem)((0,_chunks_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_3__.__spreadProps)((0,_chunks_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_3__.__spreadValues)({
      store
    }, props), {
      getItem,
      // Dispatch a custom event on the combobox input when moving to an item
      // with the keyboard so the Combobox component can enable inline
      // autocompletion.
      moveOnKeyPress: (event) => {
        if (!moveOnKeyPressProp(event)) return false;
        const moveEvent = new Event("combobox-item-move");
        const baseElement = store == null ? void 0 : store.getState().baseElement;
        baseElement == null ? void 0 : baseElement.dispatchEvent(moveEvent);
        return true;
      }
    }));
    props = (0,_chunks_PMFZK2Z4_js__WEBPACK_IMPORTED_MODULE_11__.useCompositeHover)((0,_chunks_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_3__.__spreadValues)({ store, focusOnHover }, props));
    return props;
  }
);
var ComboboxItem = (0,_chunks_PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_2__.memo)(
  (0,_chunks_PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(function ComboboxItem2(props) {
    const htmlProps = useComboboxItem(props);
    return (0,_chunks_PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_2__.createElement)(TagName, htmlProps);
  })
);



/***/ }),

/***/ "./node_modules/@ariakit/react-core/esm/combobox/combobox-label.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ariakit/react-core/esm/combobox/combobox-label.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComboboxLabel: () => (/* binding */ ComboboxLabel),
/* harmony export */   useComboboxLabel: () => (/* binding */ useComboboxLabel)
/* harmony export */ });
/* harmony import */ var _chunks_J4NXMVZC_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../__chunks/J4NXMVZC.js */ "./node_modules/@ariakit/react-core/esm/__chunks/J4NXMVZC.js");
/* harmony import */ var _chunks_PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../__chunks/PTCNA5XT.js */ "./node_modules/@ariakit/react-core/esm/__chunks/PTCNA5XT.js");
/* harmony import */ var _chunks_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../__chunks/3YLGPPWQ.js */ "./node_modules/@ariakit/react-core/esm/__chunks/3YLGPPWQ.js");
/* harmony import */ var _ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ariakit/core/utils/misc */ "./node_modules/@ariakit/core/esm/__chunks/PBFD2E7P.js");
"use client";











// src/combobox/combobox-label.tsx

var TagName = "label";
var useComboboxLabel = (0,_chunks_PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_0__.createHook)(
  function useComboboxLabel2(_a) {
    var _b = _a, { store } = _b, props = (0,_chunks_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_1__.__objRest)(_b, ["store"]);
    const context = (0,_chunks_J4NXMVZC_js__WEBPACK_IMPORTED_MODULE_2__.useComboboxProviderContext)();
    store = store || context;
    (0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_3__.invariant)(
      store,
       true && "ComboboxLabel must receive a `store` prop or be wrapped in a ComboboxProvider component."
    );
    const comboboxId = store.useState((state) => {
      var _a2;
      return (_a2 = state.baseElement) == null ? void 0 : _a2.id;
    });
    props = (0,_chunks_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_1__.__spreadValues)({
      htmlFor: comboboxId
    }, props);
    return (0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_3__.removeUndefinedValues)(props);
  }
);
var ComboboxLabel = (0,_chunks_PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_0__.memo)(
  (0,_chunks_PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function ComboboxLabel2(props) {
    const htmlProps = useComboboxLabel(props);
    return (0,_chunks_PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(TagName, htmlProps);
  })
);



/***/ }),

/***/ "./node_modules/@ariakit/react-core/esm/combobox/combobox-provider.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@ariakit/react-core/esm/combobox/combobox-provider.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComboboxProvider: () => (/* binding */ ComboboxProvider)
/* harmony export */ });
/* harmony import */ var _chunks_QAL7XKAT_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../__chunks/QAL7XKAT.js */ "./node_modules/@ariakit/react-core/esm/__chunks/QAL7XKAT.js");
/* harmony import */ var _chunks_J4NXMVZC_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../__chunks/J4NXMVZC.js */ "./node_modules/@ariakit/react-core/esm/__chunks/J4NXMVZC.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
"use client";



















// src/combobox/combobox-provider.tsx

function ComboboxProvider(props = {}) {
  const store = (0,_chunks_QAL7XKAT_js__WEBPACK_IMPORTED_MODULE_1__.useComboboxStore)(props);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chunks_J4NXMVZC_js__WEBPACK_IMPORTED_MODULE_2__.ComboboxContextProvider, { value: store, children: props.children });
}



/***/ }),

/***/ "./node_modules/@ariakit/react-core/esm/combobox/combobox.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ariakit/react-core/esm/combobox/combobox.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Combobox: () => (/* binding */ Combobox),
/* harmony export */   useCombobox: () => (/* binding */ useCombobox)
/* harmony export */ });
/* harmony import */ var _chunks_J4NXMVZC_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../__chunks/J4NXMVZC.js */ "./node_modules/@ariakit/react-core/esm/__chunks/J4NXMVZC.js");
/* harmony import */ var _chunks_2JP3PD4E_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../__chunks/2JP3PD4E.js */ "./node_modules/@ariakit/react-core/esm/__chunks/2JP3PD4E.js");
/* harmony import */ var _chunks_Y54YOYNA_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../__chunks/Y54YOYNA.js */ "./node_modules/@ariakit/react-core/esm/__chunks/Y54YOYNA.js");
/* harmony import */ var _chunks_PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../__chunks/PTCNA5XT.js */ "./node_modules/@ariakit/react-core/esm/__chunks/PTCNA5XT.js");
/* harmony import */ var _chunks_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../__chunks/WX6L4ACS.js */ "./node_modules/@ariakit/react-core/esm/__chunks/WX6L4ACS.js");
/* harmony import */ var _chunks_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../__chunks/3YLGPPWQ.js */ "./node_modules/@ariakit/react-core/esm/__chunks/3YLGPPWQ.js");
/* harmony import */ var _ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ariakit/core/utils/dom */ "./node_modules/@ariakit/core/esm/__chunks/HWOIWM4O.js");
/* harmony import */ var _ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ariakit/core/utils/events */ "./node_modules/@ariakit/core/esm/utils/events.js");
/* harmony import */ var _ariakit_core_utils_focus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ariakit/core/utils/focus */ "./node_modules/@ariakit/core/esm/utils/focus.js");
/* harmony import */ var _ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ariakit/core/utils/misc */ "./node_modules/@ariakit/core/esm/__chunks/PBFD2E7P.js");
/* harmony import */ var _ariakit_core_utils_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ariakit/core/utils/store */ "./node_modules/@ariakit/core/esm/__chunks/EQQLU3CG.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
"use client";
















// src/combobox/combobox.tsx






var TagName = "input";
function isFirstItemAutoSelected(items, activeValue, autoSelect) {
  if (!autoSelect) return false;
  const firstItem = items.find((item) => !item.disabled && item.value);
  return (firstItem == null ? void 0 : firstItem.value) === activeValue;
}
function hasCompletionString(value, activeValue) {
  if (!activeValue) return false;
  if (value == null) return false;
  value = (0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_1__.normalizeString)(value);
  return activeValue.length > value.length && activeValue.toLowerCase().indexOf(value.toLowerCase()) === 0;
}
function isInputEvent(event) {
  return event.type === "input";
}
function isAriaAutoCompleteValue(value) {
  return value === "inline" || value === "list" || value === "both" || value === "none";
}
function getDefaultAutoSelectId(items) {
  const item = items.find((item2) => {
    var _a;
    if (item2.disabled) return false;
    return ((_a = item2.element) == null ? void 0 : _a.getAttribute("role")) !== "tab";
  });
  return item == null ? void 0 : item.id;
}
var useCombobox = (0,_chunks_PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_2__.createHook)(
  function useCombobox2(_a) {
    var _b = _a, {
      store,
      focusable = true,
      autoSelect: autoSelectProp = false,
      getAutoSelectId,
      setValueOnChange,
      showMinLength = 0,
      showOnChange,
      showOnMouseDown,
      showOnClick = showOnMouseDown,
      showOnKeyDown,
      showOnKeyPress = showOnKeyDown,
      blurActiveItemOnClick,
      setValueOnClick = true,
      moveOnKeyPress = true,
      autoComplete = "list"
    } = _b, props = (0,_chunks_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_3__.__objRest)(_b, [
      "store",
      "focusable",
      "autoSelect",
      "getAutoSelectId",
      "setValueOnChange",
      "showMinLength",
      "showOnChange",
      "showOnMouseDown",
      "showOnClick",
      "showOnKeyDown",
      "showOnKeyPress",
      "blurActiveItemOnClick",
      "setValueOnClick",
      "moveOnKeyPress",
      "autoComplete"
    ]);
    const context = (0,_chunks_J4NXMVZC_js__WEBPACK_IMPORTED_MODULE_4__.useComboboxProviderContext)();
    store = store || context;
    (0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_1__.invariant)(
      store,
       true && "Combobox must receive a `store` prop or be wrapped in a ComboboxProvider component."
    );
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const [valueUpdated, forceValueUpdate] = (0,_chunks_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_5__.useForceUpdate)();
    const canAutoSelectRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    const composingRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    const autoSelect = store.useState(
      (state) => state.virtualFocus && autoSelectProp
    );
    const inline = autoComplete === "inline" || autoComplete === "both";
    const [canInline, setCanInline] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(inline);
    (0,_chunks_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_5__.useUpdateLayoutEffect)(() => {
      if (!inline) return;
      setCanInline(true);
    }, [inline]);
    const storeValue = store.useState("value");
    const prevSelectedValueRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
      return (0,_ariakit_core_utils_store__WEBPACK_IMPORTED_MODULE_6__.sync)(store, ["selectedValue", "activeId"], (_, prev) => {
        prevSelectedValueRef.current = prev.selectedValue;
      });
    }, []);
    const inlineActiveValue = store.useState((state) => {
      var _a2;
      if (!inline) return;
      if (!canInline) return;
      if (state.activeValue && Array.isArray(state.selectedValue)) {
        if (state.selectedValue.includes(state.activeValue)) return;
        if ((_a2 = prevSelectedValueRef.current) == null ? void 0 : _a2.includes(state.activeValue)) return;
      }
      return state.activeValue;
    });
    const items = store.useState("renderedItems");
    const open = store.useState("open");
    const contentElement = store.useState("contentElement");
    const value = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
      if (!inline) return storeValue;
      if (!canInline) return storeValue;
      const firstItemAutoSelected = isFirstItemAutoSelected(
        items,
        inlineActiveValue,
        autoSelect
      );
      if (firstItemAutoSelected) {
        if (hasCompletionString(storeValue, inlineActiveValue)) {
          const slice = (inlineActiveValue == null ? void 0 : inlineActiveValue.slice(storeValue.length)) || "";
          return storeValue + slice;
        }
        return storeValue;
      }
      return inlineActiveValue || storeValue;
    }, [inline, canInline, items, inlineActiveValue, autoSelect, storeValue]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
      const element = ref.current;
      if (!element) return;
      const onCompositeItemMove = () => setCanInline(true);
      element.addEventListener("combobox-item-move", onCompositeItemMove);
      return () => {
        element.removeEventListener("combobox-item-move", onCompositeItemMove);
      };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
      if (!inline) return;
      if (!canInline) return;
      if (!inlineActiveValue) return;
      const firstItemAutoSelected = isFirstItemAutoSelected(
        items,
        inlineActiveValue,
        autoSelect
      );
      if (!firstItemAutoSelected) return;
      if (!hasCompletionString(storeValue, inlineActiveValue)) return;
      let cleanup = _ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_1__.noop;
      queueMicrotask(() => {
        const element = ref.current;
        if (!element) return;
        const { start: prevStart, end: prevEnd } = (0,_ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_7__.getTextboxSelection)(element);
        const nextStart = storeValue.length;
        const nextEnd = inlineActiveValue.length;
        (0,_ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_7__.setSelectionRange)(element, nextStart, nextEnd);
        cleanup = () => {
          if (!(0,_ariakit_core_utils_focus__WEBPACK_IMPORTED_MODULE_8__.hasFocus)(element)) return;
          const { start, end } = (0,_ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_7__.getTextboxSelection)(element);
          if (start !== nextStart) return;
          if (end !== nextEnd) return;
          (0,_ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_7__.setSelectionRange)(element, prevStart, prevEnd);
        };
      });
      return () => cleanup();
    }, [
      valueUpdated,
      inline,
      canInline,
      inlineActiveValue,
      items,
      autoSelect,
      storeValue
    ]);
    const scrollingElementRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const getAutoSelectIdProp = (0,_chunks_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_5__.useEvent)(getAutoSelectId);
    const autoSelectIdRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
      if (!open) return;
      if (!contentElement) return;
      const scrollingElement = (0,_ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_7__.getScrollingElement)(contentElement);
      if (!scrollingElement) return;
      scrollingElementRef.current = scrollingElement;
      const onUserScroll = () => {
        canAutoSelectRef.current = false;
      };
      const onScroll = () => {
        if (!store) return;
        if (!canAutoSelectRef.current) return;
        const { activeId } = store.getState();
        if (activeId === null) return;
        if (activeId === autoSelectIdRef.current) return;
        canAutoSelectRef.current = false;
      };
      const options = { passive: true, capture: true };
      scrollingElement.addEventListener("wheel", onUserScroll, options);
      scrollingElement.addEventListener("touchmove", onUserScroll, options);
      scrollingElement.addEventListener("scroll", onScroll, options);
      return () => {
        scrollingElement.removeEventListener("wheel", onUserScroll, true);
        scrollingElement.removeEventListener("touchmove", onUserScroll, true);
        scrollingElement.removeEventListener("scroll", onScroll, true);
      };
    }, [open, contentElement, store]);
    (0,_chunks_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_5__.useSafeLayoutEffect)(() => {
      if (!storeValue) return;
      if (composingRef.current) return;
      canAutoSelectRef.current = true;
    }, [storeValue]);
    (0,_chunks_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_5__.useSafeLayoutEffect)(() => {
      if (autoSelect !== "always" && open) return;
      canAutoSelectRef.current = open;
    }, [autoSelect, open]);
    const resetValueOnSelect = store.useState("resetValueOnSelect");
    (0,_chunks_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_5__.useUpdateEffect)(() => {
      var _a2, _b2;
      const canAutoSelect = canAutoSelectRef.current;
      if (!store) return;
      if (!open) return;
      if ((!autoSelect || !canAutoSelect) && !resetValueOnSelect) return;
      const { baseElement, contentElement: contentElement2, activeId } = store.getState();
      if (baseElement && !(0,_ariakit_core_utils_focus__WEBPACK_IMPORTED_MODULE_8__.hasFocus)(baseElement)) return;
      if (contentElement2 == null ? void 0 : contentElement2.hasAttribute("data-placing")) {
        const observer = new MutationObserver(forceValueUpdate);
        observer.observe(contentElement2, { attributeFilter: ["data-placing"] });
        return () => observer.disconnect();
      }
      if (autoSelect && canAutoSelect) {
        const userAutoSelectId = getAutoSelectIdProp(items);
        const autoSelectId = userAutoSelectId !== void 0 ? userAutoSelectId : (_a2 = getDefaultAutoSelectId(items)) != null ? _a2 : store.first();
        autoSelectIdRef.current = autoSelectId;
        store.move(autoSelectId != null ? autoSelectId : null);
      } else {
        const element = (_b2 = store.item(activeId)) == null ? void 0 : _b2.element;
        if (element && "scrollIntoView" in element) {
          element.scrollIntoView({ block: "nearest", inline: "nearest" });
        }
      }
      return;
    }, [
      store,
      open,
      valueUpdated,
      storeValue,
      autoSelect,
      resetValueOnSelect,
      getAutoSelectIdProp,
      items
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
      if (!inline) return;
      const combobox = ref.current;
      if (!combobox) return;
      const elements = [combobox, contentElement].filter(
        (value2) => !!value2
      );
      const onBlur2 = (event) => {
        if (elements.every((el) => (0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_9__.isFocusEventOutside)(event, el))) {
          store == null ? void 0 : store.setValue(value);
        }
      };
      for (const element of elements) {
        element.addEventListener("focusout", onBlur2);
      }
      return () => {
        for (const element of elements) {
          element.removeEventListener("focusout", onBlur2);
        }
      };
    }, [inline, contentElement, store, value]);
    const canShow = (event) => {
      const currentTarget = event.currentTarget;
      return currentTarget.value.length >= showMinLength;
    };
    const onChangeProp = props.onChange;
    const showOnChangeProp = (0,_chunks_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_5__.useBooleanEvent)(showOnChange != null ? showOnChange : canShow);
    const setValueOnChangeProp = (0,_chunks_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_5__.useBooleanEvent)(
      // If the combobox is combined with tags, the value will be set by the tag
      // input component.
      setValueOnChange != null ? setValueOnChange : !store.tag
    );
    const onChange = (0,_chunks_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_5__.useEvent)((event) => {
      onChangeProp == null ? void 0 : onChangeProp(event);
      if (event.defaultPrevented) return;
      if (!store) return;
      const currentTarget = event.currentTarget;
      const { value: value2, selectionStart, selectionEnd } = currentTarget;
      const nativeEvent = event.nativeEvent;
      canAutoSelectRef.current = true;
      if (isInputEvent(nativeEvent)) {
        if (nativeEvent.isComposing) {
          canAutoSelectRef.current = false;
          composingRef.current = true;
        }
        if (inline) {
          const textInserted = nativeEvent.inputType === "insertText" || nativeEvent.inputType === "insertCompositionText";
          const caretAtEnd = selectionStart === value2.length;
          setCanInline(textInserted && caretAtEnd);
        }
      }
      if (setValueOnChangeProp(event)) {
        const isSameValue = value2 === store.getState().value;
        store.setValue(value2);
        queueMicrotask(() => {
          (0,_ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_7__.setSelectionRange)(currentTarget, selectionStart, selectionEnd);
        });
        if (inline && autoSelect && isSameValue) {
          forceValueUpdate();
        }
      }
      if (showOnChangeProp(event)) {
        store.show();
      }
      if (!autoSelect || !canAutoSelectRef.current) {
        store.setActiveId(null);
      }
    });
    const onCompositionEndProp = props.onCompositionEnd;
    const onCompositionEnd = (0,_chunks_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_5__.useEvent)((event) => {
      canAutoSelectRef.current = true;
      composingRef.current = false;
      onCompositionEndProp == null ? void 0 : onCompositionEndProp(event);
      if (event.defaultPrevented) return;
      if (!autoSelect) return;
      forceValueUpdate();
    });
    const onMouseDownProp = props.onMouseDown;
    const blurActiveItemOnClickProp = (0,_chunks_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_5__.useBooleanEvent)(
      blurActiveItemOnClick != null ? blurActiveItemOnClick : () => !!(store == null ? void 0 : store.getState().includesBaseElement)
    );
    const setValueOnClickProp = (0,_chunks_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_5__.useBooleanEvent)(setValueOnClick);
    const showOnClickProp = (0,_chunks_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_5__.useBooleanEvent)(showOnClick != null ? showOnClick : canShow);
    const onMouseDown = (0,_chunks_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_5__.useEvent)((event) => {
      onMouseDownProp == null ? void 0 : onMouseDownProp(event);
      if (event.defaultPrevented) return;
      if (event.button) return;
      if (event.ctrlKey) return;
      if (!store) return;
      if (blurActiveItemOnClickProp(event)) {
        store.setActiveId(null);
      }
      if (setValueOnClickProp(event)) {
        store.setValue(value);
      }
      if (showOnClickProp(event)) {
        (0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_9__.queueBeforeEvent)(event.currentTarget, "mouseup", store.show);
      }
    });
    const onKeyDownProp = props.onKeyDown;
    const showOnKeyPressProp = (0,_chunks_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_5__.useBooleanEvent)(showOnKeyPress != null ? showOnKeyPress : canShow);
    const onKeyDown = (0,_chunks_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_5__.useEvent)((event) => {
      onKeyDownProp == null ? void 0 : onKeyDownProp(event);
      if (!event.repeat) {
        canAutoSelectRef.current = false;
      }
      if (event.defaultPrevented) return;
      if (event.ctrlKey) return;
      if (event.altKey) return;
      if (event.shiftKey) return;
      if (event.metaKey) return;
      if (!store) return;
      const { open: open2, activeId } = store.getState();
      if (open2) return;
      if (activeId !== null) return;
      if (event.key === "ArrowUp" || event.key === "ArrowDown") {
        if (showOnKeyPressProp(event)) {
          event.preventDefault();
          store.show();
        }
      }
    });
    const onBlurProp = props.onBlur;
    const onBlur = (0,_chunks_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_5__.useEvent)((event) => {
      canAutoSelectRef.current = false;
      onBlurProp == null ? void 0 : onBlurProp(event);
      if (event.defaultPrevented) return;
    });
    const id = (0,_chunks_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_5__.useId)(props.id);
    const ariaAutoComplete = isAriaAutoCompleteValue(autoComplete) ? autoComplete : void 0;
    const isActiveItem = store.useState((state) => state.activeId === null);
    props = (0,_chunks_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_3__.__spreadProps)((0,_chunks_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_3__.__spreadValues)({
      id,
      role: "combobox",
      "aria-autocomplete": ariaAutoComplete,
      "aria-haspopup": (0,_ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_7__.getPopupRole)(contentElement, "listbox"),
      "aria-expanded": open,
      "aria-controls": contentElement == null ? void 0 : contentElement.id,
      "data-active-item": isActiveItem || void 0,
      value
    }, props), {
      ref: (0,_chunks_WX6L4ACS_js__WEBPACK_IMPORTED_MODULE_5__.useMergeRefs)(ref, props.ref),
      onChange,
      onCompositionEnd,
      onMouseDown,
      onKeyDown,
      onBlur
    });
    props = (0,_chunks_Y54YOYNA_js__WEBPACK_IMPORTED_MODULE_10__.useComposite)((0,_chunks_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_3__.__spreadProps)((0,_chunks_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_3__.__spreadValues)({
      store,
      focusable
    }, props), {
      // Enable inline autocomplete when the user moves from the combobox input
      // to an item.
      moveOnKeyPress: (event) => {
        if ((0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_1__.isFalsyBooleanCallback)(moveOnKeyPress, event)) return false;
        if (inline) setCanInline(true);
        return true;
      }
    }));
    props = (0,_chunks_2JP3PD4E_js__WEBPACK_IMPORTED_MODULE_11__.usePopoverAnchor)((0,_chunks_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_3__.__spreadValues)({ store }, props));
    return (0,_chunks_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_3__.__spreadValues)({ autoComplete: "off" }, props);
  }
);
var Combobox = (0,_chunks_PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(function Combobox2(props) {
  const htmlProps = useCombobox(props);
  return (0,_chunks_PTCNA5XT_js__WEBPACK_IMPORTED_MODULE_2__.createElement)(TagName, htmlProps);
});



/***/ }),

/***/ "./node_modules/clsx/dist/clsx.mjs":
/*!*****************************************!*\
  !*** ./node_modules/clsx/dist/clsx.mjs ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clsx: () => (/* binding */ clsx),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clsx);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkdevblog_dataview_example"] = self["webpackChunkdevblog_dataview_example"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map