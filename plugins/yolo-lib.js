import Vue from 'vue'

import ViApp from 'yolo/src/components/vi-app'
import {ViAvatar, ViAvatarChip} from 'yolo/src/components/vi-avatar'
import ViChip from 'yolo/src/components/vi-chip'
import {ViCheckbox} from 'yolo/src/components/vi-checkbox'
import ViIcon from 'yolo/src/components/vi-icon'
import {ViInput, ViInputError, ViInputLabel} from 'yolo/src/components/vi-input'
import {ViButton, ViButtonRow, ViCloseButton} from 'yolo/src/components/vi-button'
import {ViItem, ViItemAction, ViItemAvatar, ViItemContent, ViItemTitle, ViItemSubTitle} from 'yolo/src/components/vi-item'
import {ViSectionHeader, ViPageTitle} from 'yolo/src/components/vi-section-header'
import ViMenu from 'yolo/src/components/vi-menu'
import ViSelect from 'yolo/src/components/vi-select'
import ViDrawer from 'yolo/src/components/vi-drawer'
import {ViExpansionPanel} from 'yolo/src/components/vi-expansion-panel'
import {ViExpandTransition} from 'yolo/src/components/transitions'
import ViTooltip from 'yolo/src/components/vi-tooltip'
import {ViSpacer, ViContainer, ViCol, ViRow, ViDivider} from 'yolo/src/components/vi-grid'
import ViYearMonthDaySelect from 'yolo/src/components/vi-year-month-day-select'
import {ViDataTable, ViTableCol} from 'yolo/src/components/vi-data-table'
import ViMessage from 'yolo/src/components/vi-message/vi-message.vue'
import ViSwitch from 'yolo/src/components/vi-switch'
import ViSidebar from 'yolo/src/components/vi-sidebar'
import ViSpinner from 'yolo/src/components/vi-spinner'
import ViNoData from 'yolo/src/components/vi-no-data'
import {ViTabs, ViTab} from 'yolo/src/components/vi-tabs'
import {ViCard, ViCardContent} from 'yolo/src/components/vi-card'
import {ViDialog, ViDialogTitle} from 'yolo/src/components/vi-dialog'
import ViTimepicker from 'yolo/src/components/vi-timepicker'
import ViDatePicker from 'yolo/src/components/vi-date-picker'

Vue.component('vi-app', ViApp)
Vue.component('vi-expand-transition', ViExpandTransition)
Vue.component('vi-avatar', ViAvatar)
Vue.component('vi-avatar-chip', ViAvatarChip)
Vue.component('vi-chip', ViChip)
Vue.component('vi-card', ViCard)
Vue.component('vi-card-content', ViCardContent)
Vue.component('vi-container', ViContainer)
Vue.component('vi-checkbox', ViCheckbox)
Vue.component('vi-data-table', ViDataTable)
Vue.component('vi-date-picker', ViDatePicker)
Vue.component('vi-table-col', ViTableCol)
Vue.component('vi-icon', ViIcon)
Vue.component('vi-input', ViInput)
Vue.component('vi-input-error', ViInputError)
Vue.component('vi-input-label', ViInputLabel)
Vue.component('vi-button', ViButton)
Vue.component('vi-button-row', ViButtonRow)
Vue.component('vi-close-button', ViCloseButton)
Vue.component('vi-section-header', ViSectionHeader)
Vue.component('vi-menu', ViMenu)
Vue.component('vi-message', ViMessage)
Vue.component('vi-item', ViItem)
Vue.component('vi-item-action', ViItemAction)
Vue.component('vi-item-avatar', ViItemAvatar)
Vue.component('vi-item-content', ViItemContent)
Vue.component('vi-item-title', ViItemTitle)
Vue.component('vi-item-subtitle', ViItemSubTitle)
Vue.component('vi-select', ViSelect)
Vue.component('vi-sidebar', ViSidebar)
Vue.component('vi-drawer', ViDrawer)
Vue.component('vi-expansion-panel', ViExpansionPanel)
Vue.component('vi-tooltip', ViTooltip)
Vue.component('vi-spacer', ViSpacer)
Vue.component('vi-switch', ViSwitch)
Vue.component('vi-spinner', ViSpinner)
Vue.component('vi-year-month-day-select', ViYearMonthDaySelect)
Vue.component('vi-page-title', ViPageTitle)
Vue.component('vi-tabs', ViTabs)
Vue.component('vi-tab', ViTab)
Vue.component('vi-dialog', ViDialog)
Vue.component('vi-dialog-title', ViDialogTitle)
Vue.component('vi-col', ViCol)
Vue.component('vi-row', ViRow)
Vue.component('vi-divider', ViDivider)
Vue.component('vi-no-data', ViNoData)
Vue.component('vi-timepicker', ViTimepicker)

import 'yolo/src/components/vi-icon/collection'
