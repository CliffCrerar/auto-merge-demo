const
	$ = document,
	byID = (elementId) => $.getElementById(elementId),
	byClass = (className) => $.getElementsByClassName(className),
	byTag = (qualifiedName)=> $.getElementsByTagName(qualifiedName),
	byName =(elementName)=> $.getElementsByName(elementName);

Object.assign(window, {byID,byClass,byTag,byName});

