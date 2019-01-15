 window.MyEmployComponent = zoid.create({

    // The html tag used to render my component

    tag: 'my-employ-component',

    // The url that will be loaded in the iframe or popup, when someone includes my component on their page

    url: 'http://localhost:6060/vendor-a/employ.html',

    // The size of the component on their page. Only px and % strings are supported

    dimensions: {
        width: '400px',
        height: '200px'
    },

    // The properties they can (or must) pass down to my component. This is optional.

});