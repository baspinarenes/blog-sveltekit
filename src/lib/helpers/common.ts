export function capitalize(str: string) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

export function isExternal(url: string) {
	return /^(https?:)?\/\//.test(url);
}
