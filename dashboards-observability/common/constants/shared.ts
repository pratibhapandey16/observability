/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import CSS from 'csstype';

// Client route
export const PPL_BASE = '/api/ppl';
export const PPL_SEARCH = '/search';
export const DSL_BASE = '/api/dsl';
export const DSL_SEARCH = '/search';
export const DSL_CAT = '/cat.indices';
export const DSL_MAPPING = '/indices.getFieldMapping';
export const OBSERVABILITY_BASE = '/api/observability';
export const EVENT_ANALYTICS = '/event_analytics';
export const SAVED_OBJECTS = '/saved_objects';
export const SAVED_QUERY = '/query';
export const SAVED_VISUALIZATION = '/vis';

// Server route
export const PPL_ENDPOINT = '/_plugins/_ppl';
export const SQL_ENDPOINT = '/_plugins/_sql';
export const DSL_ENDPOINT = '/_plugins/_dsl';

export const observabilityID = 'observability-dashboards';
export const observabilityTitle = 'Observability';
export const observabilityPluginOrder = 6000;

// Shared Constants
export const SQL_DOCUMENTATION_URL = 'https://opensearch.org/docs/latest/search-plugins/sql/index/';
export const PPL_DOCUMENTATION_URL =
  'https://opensearch.org/docs/latest/observability-plugin/ppl/commands/';
export const UI_DATE_FORMAT = 'MM/DD/YYYY hh:mm A';
export const PPL_DATE_FORMAT = 'YYYY-MM-DD HH:mm:ss.SSSSSS';
export const SPAN_REGEX = /span/;
export const PPL_SPAN_REGEX = /by\s*span/i;
export const PPL_STATS_REGEX = /\|\s*stats/i;
export const PPL_INDEX_INSERT_POINT_REGEX = /(search source|source|index)\s*=\s*([^|\s]+)(.*)/i;
export const PPL_INDEX_REGEX = /(search source|source|index)\s*=\s*([^|\s]+)/i;
export const PPL_NEWLINE_REGEX = /[\n\r]+/g;

// Observability plugin URI
const BASE_OBSERVABILITY_URI = '/_plugins/_observability';
export const OPENSEARCH_PANELS_API = {
  OBJECT: `${BASE_OBSERVABILITY_URI}/object`,
};

// Saved Objects
export const SAVED_OBJECT = '/object';

// Color Constants
export const PLOTLY_COLOR = [
  '#3CA1C7',
  '#8C55A3',
  '#DB748A',
  '#F2BE4B',
  '#68CCC2',
  '#2A7866',
  '#843769',
  '#374FB8',
  '#BD6F26',
  '#4C636F',
];

export const LONG_CHART_COLOR = PLOTLY_COLOR[1];

export const pageStyles: CSS.Properties = {
  float: 'left',
  width: '100%',
  maxWidth: '1130px',
};

export const NUMERICAL_FIELDS = ['short', 'integer', 'long', 'float', 'double'];

export const ENABLED_VIS_TYPES = ['bar', 'horizontal_bar', 'line', 'pie', 'heatmap', 'text', 'tree_map'];

//Live tail constants
export const LIVE_OPTIONS = [
  {
    label: '5s',
    startTime: 'now-5s',
    delayTime: 5000,
  },
  {
    label: '10s',
    startTime: 'now-10s',
    delayTime: 10000,
  },
  {
    label: '30s',
    startTime: 'now-30s',
    delayTime: 30000,
  },
  {
    label: '1m',
    startTime: 'now-1m',
    delayTime: 60000,
  },
  {
    label: '5m',
    startTime: 'now-5m',
    delayTime: 60000 * 5,
  },
  {
    label: '15m',
    startTime: 'now-15m',
    delayTime: 60000 * 15,
  },
  {
    label: '30m',
    startTime: 'now-30m',
    delayTime: 60000 * 30,
  },
  {
    label: '1h',
    startTime: 'now-1h',
    delayTime: 60000 * 60,
  },
  {
    label: '2h',
    startTime: 'now-2h',
    delayTime: 60000 * 120,
  },
];

export const LIVE_END_TIME = 'now';

export const BLUES_PALETTE = { name: 'Blues', label: 'Blues', colors: ['rgb(5,10,172)', 'rgb(40,60,190)', 'rgb(70,100,245)', 'rgb(90,120,245)', 'rgb(106,137,247)', 'rgb(220,220,220)',], }; 
export const REDS_PALETTE = { name: 'Reds', label: 'Reds', colors: ['rgb(220,220,220)', 'rgb(245,195,157)', 'rgb(245,160,105)', 'rgb(178,10,28)'], }; 
export const GREENS_PALETTE = { name: 'Greens', label: 'Greens', colors: ['rgb(0,68,27)', 'rgb(0,109,44)', 'rgb(35,139,69)', 'rgb(65,171,93)', 'rgb(116,196,118)', 'rgb(161,217,155)', 'rgb(199,233,192)', 'rgb(229,245,224)', 'rgb(247,252,245)',], }; 
export const GREYS_PALETTE = { name: 'Greys', label: 'Greys', colors: ['rgb(0,0,0)', 'rgb(255,255,255)'], };
export const BLUERED_PALETTE = { name: 'Bluered', label: 'Blue-Red', colors: ['rgb(0,0,255)', 'rgb(255,0,0)'], }; 
export const RdBu_PALETTE = { name: 'RdBu', label: 'Red-Blue', colors: ['rgb(5,10,172)', 'rgb(106,137,247)', 'rgb(190,190,190)', 'rgb(220,170,132)', 'rgb(230,145,90)', 'rgb(178,10,28)',], }; 
export const YlOrRd_PALETTE = { name: 'YlOrRd', label: 'Yellow-Orange-Red', colors: ['rgb(128,0,38)', 'rgb(189,0,38)', 'rgb(227,26,28)', 'rgb(252,78,42)', 'rgb(253,141,60)', 'rgb(254,178,76)', 'rgb(254,217,118)', 'rgb(255,237,160)', 'rgb(255,255,204)',], }; 
export const YlGnBu_PALETTE = { name: 'YlGnBu', label: 'Yellow-Green-Blue', colors: ['rgb(8,29,88)', 'rgb(37,52,148)', 'rgb(34,94,168)', 'rgb(29,145,192)', 'rgb(65,182,196)', 'rgb(127,205,187)', 'rgb(199,233,180)', 'rgb(237,248,217)', 'rgb(255,255,217)',], };

