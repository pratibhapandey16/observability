/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import {
    EuiTitle,
    EuiSpacer,
    EuiFlexItem,
    EuiFlexGroup,
    colorPalette,
    EuiColorPalettePicker,
    EuiColorPicker,
    EuiFormRow,
} from '@elastic/eui';
import {
    BLUERED_PALETTE,
    BLUES_PALETTE,
    GREENS_PALETTE,
    GREYS_PALETTE,
    RdBu_PALETTE,
    REDS_PALETTE,
    YlGnBu_PALETTE,
    YlOrRd_PALETTE,
} from '../../../../../../../../common/constants/shared';
import { EuiColorPalettePickerPaletteProps } from '@elastic/eui/src/components/color_picker/color_palette_picker';

const palettes: EuiColorPalettePickerPaletteProps[] = [
    {
        value: 'default',
        title: 'Default',
        type: 'text',
    },
    {
        value: 'singleColor',
        title: 'Single Color',
        type: 'text',
    },
    {
        value: BLUES_PALETTE.name,
        title: BLUES_PALETTE.label,
        palette: colorPalette(BLUES_PALETTE.colors, 20),
        type: 'gradient',
    },
    {
        value: REDS_PALETTE.name,
        title: REDS_PALETTE.label,
        palette: colorPalette(REDS_PALETTE.colors, 20),
        type: 'gradient',
    },
    {
        value: GREENS_PALETTE.name,
        title: GREENS_PALETTE.label,
        palette: colorPalette(GREENS_PALETTE.colors, 20),
        type: 'gradient',
    },
    {
        value: GREYS_PALETTE.name,
        title: GREYS_PALETTE.label,
        palette: colorPalette(GREYS_PALETTE.colors, 20),
        type: 'gradient',
    },
    {
        value: BLUERED_PALETTE.name,
        title: BLUERED_PALETTE.label,
        palette: colorPalette(BLUERED_PALETTE.colors, 20),
        type: 'gradient',
    },
    {
        value: RdBu_PALETTE.name,
        title: RdBu_PALETTE.label,
        palette: colorPalette(RdBu_PALETTE.colors, 20, true),
        type: 'gradient',
    },
    {
        value: YlOrRd_PALETTE.name,
        title: YlOrRd_PALETTE.label,
        palette: colorPalette(YlOrRd_PALETTE.colors, 20),
        type: 'gradient',
    },
    {
        value: YlGnBu_PALETTE.name,
        title: YlGnBu_PALETTE.label,
        palette: colorPalette(YlGnBu_PALETTE.colors, 20),
        type: 'gradient',
    },
];

export const ColorPalettePicker = ({
    paddingTitle,
    selectedAxis,
    dropdownList,
    onSelectChange,
    onHoverChange,
    isSingleSelection = false,
}: any) => {
    const [selectedPalette, setSelectedPalette] = useState(
        selectedAxis !== undefined ? selectedAxis.name : 'default'
    );

    const [singleColor, setSingleColor] = useState('#000000');

    useEffect(() => {
        if (selectedAxis === undefined) setSelectedPalette('default');
    }, [selectedAxis]);



    const onPaletteChange = (value: string) => {

        setSelectedPalette(value);

        onSelectChange({ name: value, value: value });

    };

    return (

        <>

            <EuiTitle size="xxs">

                <h3>{paddingTitle}</h3>

            </EuiTitle>

            <EuiSpacer size="s" />

            <EuiFlexGroup gutterSize={'xs'}>

                {selectedPalette === 'singleColor' && (

                    <EuiFlexItem grow={1}>

                        <EuiFormRow>

                            <EuiColorPicker

                                onChange={(value) => {

                                    setSingleColor(value);

                                    onSelectChange({

                                        name: 'singleColor',

                                        value: value,

                                    });

                                }}

                                color={singleColor}

                            />

                        </EuiFormRow>

                    </EuiFlexItem>

                )}

                <EuiFlexItem grow={3}>

                    <EuiColorPalettePicker

                        palettes={palettes}

                        onChange={onPaletteChange}

                        valueOfSelected={selectedPalette}

                        selectionDisplay={'title'}

                    />

                </EuiFlexItem>

            </EuiFlexGroup>

        </>

    );

};

