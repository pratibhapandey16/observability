/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/// <reference types="cypress" />
import {
  delay,
  TEST_QUERIES,
  querySearch,
  landOnEventVisualizations,
  saveVisualizationAndVerify,
  deleteVisualization,
} from '../../utils/event_constants';

const renderLogsView = () => {
  landOnEventVisualizations();
  querySearch(TEST_QUERIES[8].query, TEST_QUERIES[8].dateRangeDOM);
  cy.get('[data-test-subj="configPane__vizTypeSelector"] [data-test-subj="comboBoxInput"]')
    .type('Logs view')
    .type('{enter}');
};

const renderLogsViewChart = () => {
  landOnEventVisualizations();
  querySearch(TEST_QUERIES[2].query, TEST_QUERIES[2].dateRangeDOM);
  cy.get('[data-test-subj="configPane__vizTypeSelector"] [data-test-subj="comboBoxInput"]')
    .type('Logs view')
    .type('{enter}');
};

describe('Render Logs view and verify default behavior', () => {
  beforeEach(() => {
    renderLogsView();
  });

  it('Render Logs view and verify the default data', () => {
    cy.get('.logs-view-container').should('exist');
  });

  it('Render Logs view and verify Data Configuration panel default behavior', () => {
    cy.get('.euiTitle.euiTitle--xxsmall').contains('Data Configurations').should('exist');
    cy.get('.euiTitle.euiTitle--xxsmall').contains('Columns');
    cy.get('.euiFormLabel.euiFormRow__label').contains('Field');
    cy.get('.euiButton__text').contains('Add').should('be.disabled');
    cy.get('.euiButton__text').contains('Update Chart').should('be.disabled');
  });

  it('Render Logs view and verify Style section for Logs view', () => {
    cy.get('.vis-config-tabs .euiTab__content').contains('Style').should('exist');
    cy.get('.euiAccordion__triggerWrapper').contains('Panel options').should('exist');
    cy.get('#configPanel__panelOptions .euiFormRow__labelWrapper')
      .contains('Title')
      .should('exist');
    cy.get('#configPanel__panelOptions .euiFormRow__labelWrapper')
      .contains('Description')
      .should('exist');
  });

  it('Table view should be enabled for Logs view', () => {
    cy.get('.euiSwitch__label').contains('Table view').should('exist');
    cy.get('[data-test-subj="workspace__dataTableViewSwitch"][aria-checked="false"]').click();
    cy.get('.ag-header.ag-pivot-off').should('exist');
  });

  it('Verify that Logs view details are appearing in tabular form', () => {
    cy.get('[data-test-subj = "docTable"]').should('exist');
  });
});

describe('Save and Delete Visualization', () => {
  beforeEach(() => {
    renderLogsView();
  });

  it('Render Logs view, Save and Delete Visualization', () => {
    saveVisualizationAndVerify();
    deleteVisualization();
  });
});

describe('', () => {
  beforeEach(() => {
    renderLogsView();
  });



});
