/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/// <reference types="cypress" />
import {
  delay,
  TEST_QUERIES,
  landOnEventVisualizations,
  renderDataConfig
} from '../utils/event_constants';
import { supressResizeObserverIssue } from '../utils/constants';

const renderPieChart = () => {
  querySearch(TEST_QUERIES[5].query, TEST_QUERIES[5].dateRangeDOM);
  cy.get('[data-test-subj="configPane__vizTypeSelector"] [data-test-subj="comboBoxInput"]').click();
  cy.get('[data-test-subj="comboBoxOptionsList "] button span').contains('Pie').click();
  cy.wait(delay);
  cy.get('#configPanel__panelOptions .euiFieldText').click().type('Pie chart');
  cy.get('.euiFlexItem .euiFormRow [placeholder="Description"]')
    .click()
    .type('This is the description for Pie chart');
  cy.get('[aria-controls="configPanel__legend"]').contains('Legen');
  cy.get('#configPanel__legend .euiTitle.euiTitle--xxsmall').eq(0).contains('Show Legend');
  cy.get('.euiButtonGroup__buttons [title="Show"]').should('be.checked');
  cy.get('#configPanel__legend .euiTitle.euiTitle--xxsmall').eq(1).contains('Position');
  cy.get('.euiButtonGroup__buttons [title="Right"]').should('be.checked');
  cy.get('#configPanel__legend .euiTitle.euiTitle--xxsmall').eq(2).contains('Legend Size');
  cy.get('#configPanel__legend [data-test-subj="valueFieldNumber"]').type('12');
  cy.get('.scrollbox .legendtext[style*="152px"]').eq(0).should('exist');
  cy.get('[aria-controls="configPanel__chartStyles"]').contains('Chart Styles');
  cy.get('#configPanel__chartStyles .euiTitle.euiTitle--xxsmall').eq(0).contains('Mode');
  cy.get('.euiFormControlLayoutClearButton').eq(3).click();
  cy.get('.euiFilterSelectItem').
  // cy.get('[data-test-subj="comboBoxInput"]').eq(1).click();
  // cy.get('[data-test-subj="comboBoxToggleListButton"]').eq(0).click();
  // cy.get('[data-test-subj="comboBoxInput"]').eq(2).click();
};

const aggregationValues = ["COUNT", "SUM", "AVERAGE", "MAX", "MIN", "VAR_SAMP", "VAR_POP", "STDDEV_SAMP", "STDDEV_POP"];

describe('Renders pie charts', () => {
  beforeEach(() => {
    landOnEventVisualizations();
  });

  it('Renders pie chart', () => {
    querySearch(TEST_QUERIES[3].query, TEST_QUERIES[3].dateRangeDOM);
    cy.get(
      '[data-test-subj="configPane__vizTypeSelector"] [data-test-subj="comboBoxInput"]'
    ).click();
    cy.get('[data-test-subj="comboBoxOptionsList "] button span').contains('Pie').click();
    cy.wait(delay);
    cy.get('g.pielayer').should('exist');
  });
});

describe('Renders Data Configurations section for Pie chart', () => {
  beforeEach(() => {
    landOnEventVisualizations();
  });

  it('Renders Dimensions and Metrics under Data Configurations for Pie chart', () => {
    renderPieChart();
    renderDataConfig();
  });

  it('Validate "Add" and "X" buttons', () => {
    renderPieChart();
    cy.get('.euiResizablePanel.euiResizablePanel--middle').contains('Data Configurations');
    cy.get('.euiButton.euiButton--primary.euiButton--fullWidth').contains('Add').click();
    cy.get('.euiFormRow__fieldWrapper .euiComboBox').eq(3).click();
    cy.get('.euiComboBoxOption__content').eq(2).click();
    cy.get('.first-division .euiFormLabel.euiFormRow__label').eq(4).click();
    cy.get('.euiComboBoxOption__content').eq(1).click();
    cy.get('.euiFieldText[placeholder="Custom label"]').eq(1).type('Demo field');
    cy.get('.euiIcon.euiIcon--medium.euiIcon--danger').eq(1).click();
    cy.get('.euiButton.euiButton--primary.euiButton--fullWidth').contains('Add').should('exist');
  });

  it('Verify drop down values for Aggregation', () => {
    renderPieChart();
    cy.get('.euiResizablePanel.euiResizablePanel--middle').contains('Data Configurations');
    cy.get('.euiTitle.euiTitle--xxsmall').eq(1).contains('Dimensions').should('exist');
    cy.get('.first-division .euiFormLabel.euiFormRow__label').eq(0).contains('Aggregation');
    cy.get('[data-test-subj="comboBoxSearchInput"]').eq(0).click();
    aggregationValues.forEach(function (value) {
      cy.get('.euiComboBoxOption__content').contains(value);
    });
  });

  it('Collapsible mode for Data Configuration panel', () => {
    renderPieChart();
    cy.get('.euiResizablePanel.euiResizablePanel--middle').contains('Data Configurations');
    cy.get('.euiResizableButton.euiResizableButton--horizontal').eq(1).click();
    cy.get('[data-test-subj="panel-1-toggle"]').click();
    cy.get('[class*="euiResizableToggleButton-isCollapsed"]').eq(1).should('exist');
  });
});
