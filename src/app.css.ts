import { style } from '@vanilla-extract/css';

import { color } from '~/styles/shared.ts';

export const red = style({
	width: 100,
	height: 100,
	display: 'grid',
	placeItems: 'center',
	backgroundColor: color,
	color: 'white',
})
