
<a name="App"></a>

## App
**Kind**: global class  

* [App](#App)
    * [new App(fromNumber, toNumber)](#new_App_new)
    * [.onClickAtNumberItem](#App+onClickAtNumberItem)
    * [.onInit()](#App+onInit)

<a name="new_App_new"></a>

### new App(fromNumber, toNumber)
Initialazation of the values in order to be able to configure our App from outside


| Param | Type | Default |
| --- | --- | --- |
| fromNumber | <code>Number</code> | <code>1</code> | 
| toNumber | <code>Number</code> | <code>144</code> | 

<a name="App+onClickAtNumberItem"></a>

### app.onClickAtNumberItem
When the user clicks a Number Item

**Kind**: instance property of [<code>App</code>](#App)  

| Param | Type | Description |
| --- | --- | --- |
| clickedNumber | <code>Number</code> | This is the number we clicked |
| isHighlighted | <code>Boolean</code> | This indicates the status for the clicked number |

<a name="App+onInit"></a>

### app.onInit()
OnInit is going to get called when the project is boostraped

**Kind**: instance method of [<code>App</code>](#App)  