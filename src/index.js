import './index.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';

import $ from 'jquery'

import "popper.js/dist/popper.min.js";

import "bootstrap/js/dist/util.js";
import "bootstrap/js/dist/collapse.js";
import "bootstrap/js/dist/modal.js";
import "bootstrap/js/dist/dropdown.js";
// Add additional bootstrap component js

import bsCustomFileInput from 'bs-custom-file-input'

window.$ = window.jQuery = $

$(function () {
  bsCustomFileInput.init()
})
