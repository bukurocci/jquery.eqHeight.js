# jquery.eqheight.js

A simple jQuery plugin that equalize the height of elements

## Usage
Specify the parent element of the elements which you would like to equalize the height,
and call the method for equalizing their height

```js
$('.example').eqHeight();
```

* [examples](http://bukurocci.github.io/jquery.eqHeight.js/example/)

## Option
You can also apply height equalization to each groups.  
if `group` is specified,  they are split into groups of N（N is a specified number）

```js
$('.example').eqHeight({
	group: 2 
});
```

## Methods
```js
$('.example').eqHeight('refresh', options);
```
Invoke `refresh` method to restore their height and re-equalize them.  
`refresh` method can takes an `options` argument.


```js
$('.example').eqHeight('destroy');
```
Invoke `destroy` method to restore equalized height to default.

## License
MIT License
