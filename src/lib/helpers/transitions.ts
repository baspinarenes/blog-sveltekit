import { cubicOut } from 'svelte/easing';

export function fly(
	node: Element,
	{
		delay = 0,
		duration = 400,
		easing = cubicOut,
		x = 0,
		y = 0,
		opacity = 0
	} = {}
) {
	const style = getComputedStyle(node);
	const target_opacity = +style.opacity;
	const transform = style.transform === 'none' ? '' : style.transform;

	const od = target_opacity * (1 - opacity);

	let xValue = x;
	let xUnit = 'px';
	if (typeof x === 'string') {
		const xMatch = (x as string).match(/([-\d.]+)(\D+)/);

		if (xMatch) {
			xValue = Number(xMatch[1]);
			xUnit = xMatch[2];
		}
	}

	let yValue = y;
	let yUnit = 'px';
	if (typeof y === 'string') {
		const yMatch = (y as string).match(/([-\d.]+)(\D+)/);

		if (yMatch) {
			yValue = Number(yMatch[1]);
			yUnit = yMatch[2];
		}
	}

	return {
		delay,
		duration,
		easing,
		css: (t: number, u: number) => {
			return `
      transform: ${transform} translate(${(1 - t) * xValue}${xUnit}, ${(1 - t) * yValue}${yUnit});
      opacity: ${target_opacity - od * u}`;
		}
	};
}
