/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo, useCallback } from 'react';
import { EuiAccordion, EuiSpacer, EuiForm } from '@elastic/eui';
import { SliderConfig } from './config_style_slider';

export const ConfigChartOptions = ({
  visualizations,
  schemas,
  vizState,
  handleConfigChange,
}: any) => {
  const handleConfigurationChange = useCallback(
    (stateFiledName) => {
      return (changes) => {
        handleConfigChange({
          ...vizState,
          [stateFiledName]: changes,
        });
      };
    },
    [handleConfigChange, vizState]
  );

  const dimensions = useMemo(() => {
    return schemas.map((schema, index) => {
      let params;
      const DimensionComponent = schema.component || SliderConfig;
      if (schema.eleType === 'input') {
        params = {
          title: schema.name,
          currentValue: vizState[schema.mapTo] || '',
          handleInputChange: handleConfigurationChange(schema.mapTo),
          vizState,
          ...schema.props,
        };
      } else if (schema.eleType === 'slider') {
        params = {
          maxRange: schema.max,
          title: schema.name,
          currentRange: vizState[schema.mapTo] || schema?.defaultState,
          handleSliderChange: handleConfigurationChange(schema.mapTo),
          vizState,
          ...schema.props,
        };
      }
      return (
        <>
          <EuiForm component="form">
            <DimensionComponent key={`viz-series-${index}`} {...params} />
            <EuiSpacer size="s" />
          </EuiForm>
        </>
      );
    });
  }, [vizState, handleConfigurationChange]);

  return (
    <EuiAccordion
      initialIsOpen
      id="configPanel__chartStyles"
      buttonContent="Chart Styles"
      paddingSize="s"
    >
      {dimensions}
    </EuiAccordion>
  );
};
