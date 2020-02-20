
/**
 * Element methods
 */
const $ = document;
Object.assign(window,
	{
		byID: (elementId) => $.getElementById(elementId),
		byClass: (className) => $.getElementsByClassName(className),
		byTag: (qualifiedName) => $.getElementsByTagName(qualifiedName),
		byName: (elementName) => $.getElementsByName(elementName)
	}
);

