/*

 * Copyright OpenSearch Contributors

 * SPDX-License-Identifier: Apache-2.0

 */



import { TreeMap } from './treemaps';
import { getPlotlySharedConfigs, getPlotlyCategory } from '../shared/shared_configs';
import { LensIconChartBar } from '../../assets/chart_bar';
import { VizDataPanel } from '../../../event_analytics/explorer/visualizations/config_panel/config_panes/default_vis_editor';
import { ConfigEditor } from '../../../event_analytics/explorer/visualizations/config_panel/config_panes/json_editor';
import {
  ConfigValueOptions,
  ColorPalettePicker,
  ConfigChartOptions,
} from '../../../event_analytics/explorer/visualizations/config_panel/config_panes/config_controls';
import { DEFAULT_PALETTE, TREEMAP_PALETTES } from '../../../../../common/constants/colors';

const sharedConfigs = getPlotlySharedConfigs();
const VIS_CATEGORY = getPlotlyCategory();

export interface BarTypeParams { }
export const createTreeMapDefinition = (params: BarTypeParams = {}) => ({
  name: 'tree_map',
  type: 'tree_map',
  id: 'tree_map',
  label: 'Tree Map',
  fullLabel: 'Tree Map',
  selection: {
    dataLoss: 'nothing',
  },

  category: VIS_CATEGORY.BASICS,
  iconType: 'heatmap',
  icon: LensIconChartBar,
  categoryAxis: 'xaxis',
  orientation: 'v',
  component: TreeMap,
  editorConfig: {
    panelTabs: [
      {
        id: 'data-panel',
        name: 'Data',
        mapTo: 'dataConfig',
        editor: VizDataPanel,
        sections: [
          {
            id: 'value_options',
            name: 'Value options',
            editor: ConfigValueOptions,
            mapTo: 'valueOptions',
            schemas: [
              {
                name: 'Child Field',
                isSingleSelection: true,
                component: null,
                mapTo: 'childField',
              },
              {
                name: 'Parent Field',
                isSingleSelection: true,
                component: null,
                mapTo: 'parentField',
              },
              {
                name: 'Value Field',
                isSingleSelection: true,
                component: null,
                mapTo: 'valueField',
              },
            ],
          },
          {
            id: 'treemap_options',
            name: 'Treemap',
            editor: ConfigValueOptions,
            mapTo: 'treemapOptions',
            schemas: [
              {
                name: 'Tiling Algorithm',
                isSingleSelection: true,
                component: null,
                mapTo: 'tilingAlgorithm',
                options: [
                  { name: 'Squarify', label: 'Squarify', value: 'squarify' },
                  { name: 'Binary', label: 'Binary', value: 'binary' },
                  { name: 'Dice', label: 'Dice', value: 'dice' },
                  { name: 'Slice', label: 'Slice', value: 'slice' },
                  { name: 'Slice Dice', label: 'Slice Dice', value: 'slice-dice' },
                  { name: 'Dice Slice', label: 'Dice Slice', value: 'dice-slice' },
                ],
              },
            ],
          },
          {
            id: 'chart_styles',
            name: 'Chart Styles',
            editor: ConfigChartOptions,
            mapTo: 'chartStyles',
            schemas: [
              {
                name: 'Color Theme',
                isSingleSelection: true,
                component: ColorPalettePicker,
                mapTo: 'colorTheme',
                eleType: 'colorpicker',
                options: TREEMAP_PALETTES,
                defaultState: { name: DEFAULT_PALETTE },
              },
            ],
          },
          { id: 'chart_styles', name: 'Chart Styles', editor: ConfigValueOptions, mapTo: 'chartStyles', schemas: [{ name: 'Color Theme', isSingleSelection: true, component: ColorPalettePicker, mapTo: 'colorTheme', },], },],
      }, { id: 'style-panel', name: 'Layout', mapTo: 'layoutConfig', editor: ConfigEditor, content: [], },],
  }, visConfig: { layout: { ...sharedConfigs.layout, }, config: { ...sharedConfigs.config, }, isUniColor: false, },
});


