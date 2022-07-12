/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useCallback, useContext, useMemo } from 'react';
import { EuiAccordion, EuiSpacer } from '@elastic/eui';
import { IConfigPanelOptionSection } from '../../../../../../../../common/types/explorer';
import { ButtonGroupItem } from './config_button_group';
import { TabContext } from '../../../../../../event_analytics/hooks';

export const ConfigLogsView = ({
  visualizations,
  schemas,
  vizState,
  handleConfigChange,
  sectionName,
  sectionId = 'chartStyles',
}) => {
  const { explorerData } = useContext<any>(TabContext);
  const rawData = explorerData.jsonData;

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

  const dimensions = useMemo(
    () =>
      schemas.map((schema: IConfigPanelOptionSection, index: string) => {
        let params = {
          title: schema.name,
          vizState,
          ...schema.props,
        };
        const DimensionComponent = schema.component || ButtonGroupItem;
        if (schema.eleType === 'buttons') {
          params = {
            title: schema.name,
            legend: schema.name,
            groupOptions: schema?.props?.options.map((btn: { name: string }) => ({
              ...btn,
              label: btn.name,
            })),
            idSelected: vizState[schema.mapTo] || schema?.props?.defaultSelections[0]?.id,
            handleButtonChange: handleConfigurationChange(schema.mapTo),
            vizState,
            ...schema.props,
          };
        } else if (schema.eleType === 'switch') {
          let isDisabled = false;
          if (schema.name === 'Time') {
            const isTimeAvailable = rawData && rawData.find((data) => data.timestamp !== undefined);
            isDisabled = isTimeAvailable === undefined ? true : false;
          }
          params = {
            label: schema.name,
            disabled: isDisabled,
            checked:
              vizState[schema.mapTo] !== undefined ? vizState[schema.mapTo] : schema?.defaultState,
            handleChange: handleConfigurationChange(schema.mapTo),
            vizState,
            ...schema.props,
          };
        } else {
          params = {
            title: schema.name,
            currentValue: vizState[schema.mapTo] || '',
            handleInputChange: handleConfigurationChange(schema.mapTo),
            vizState,
            ...schema.props,
          };
        }
        return (
          <>
            <DimensionComponent key={`viz-series-${index}`} {...params} />
            <EuiSpacer size="s" />
          </>
        );
      }),
    [schemas, vizState, handleConfigurationChange]
  );

  return (
    <EuiAccordion
      initialIsOpen
      id={`configPanel__${sectionId}`}
      buttonContent={sectionName}
      paddingSize="s"
    >
      {dimensions}
    </EuiAccordion>
  );
};
