# JTranslator

JTransalator is a javascript library for converting a JSON request to a different key structure using a config 

## Getting Started

Download the translator.js and link it to your html

## Usage
```
  var translatedData = translate(in_data, config, null, "")
```
## Config Example 
```
  var config = {
    "order_ref": {
        "in_data_type": "string",
        "out_data_type": "string",
        "formatter": "",
        "out_key": "order_reference"
    },
    "payment_method": {
        "in_data_type": "string",
        "out_data_type": "string",
        "formatter": "",
        "out_key": "payment_type"
    },
    "consolidate_orders": {
        "in_data_type": "boolean",
        "out_data_type": "boolean",
        "formatter": "",
        "out_key": "consolidate_orders"
    },
    "express_delivery": {
        "in_data_type": "boolean",
        "out_data_type": "boolean",
        "formatter": "",
        "out_key": "is_express_delivery"
    },
    "receiver_info": {
        "in_data_type": "object",
        "out_data_type": "object",
        "formatter": "",
        "out_key": "receiver_data"
    },
    "receiver_info:name": {
        "in_data_type": "string",
        "out_data_type": "string",
        "formatter": "",
        "out_key": "name"
    },
    "receiver_info:phone": {
        "in_data_type": "string",
        "out_data_type": "string",
        "formatter": "",
        "out_key": "phone"
    },
    "receiver_info:phone_2": {
        "in_data_type": "string",
        "out_data_type": "string",
        "formatter": "",
        "out_key": "alternate_phone"
    },
    "receiver_info:email": {
        "in_data_type": "string",
        "out_data_type": "string",
        "formatter": "",
        "out_key": "email"
    },
    "receiver_info:country": {
        "in_data_type": "string",
        "out_data_type": "string",
        "formatter": "",
        "out_key": "country"
    },
    "receiver_info:state": {
        "in_data_type": "string",
        "out_data_type": "string",
        "formatter": "",
        "out_key": "state"
    },
    "receiver_info:city": {
        "in_data_type": "string",
        "out_data_type": "string",
        "formatter": "",
        "out_key": "city"
    },
    "receiver_info:street_one": {
        "in_data_type": "string",
        "out_data_type": "string",
        "formatter": "",
        "out_key": "street_one"
    },
    "receiver_info:street_two": {
        "in_data_type": "string",
        "out_data_type": "string",
        "formatter": "",
        "out_key": "street_two"
    },
    "receiver_info:street_three": {
        "in_data_type": "string",
        "out_data_type": "string",
        "formatter": "",
        "out_key": "street_three"
    },
    "receiver_info::instructions": {
        "in_data_type": "string",
        "out_data_type": "string",
        "formatter": "",
        "out_key": "instructions"
    },
    "package": {
        "in_data_type": "array",
        "out_data_type": "array",
        "formatter": "",
        "out_key": "package_data"
    },
    "package::location_id": {
        "in_data_type": "string",
        "out_data_type": "string",
        "formatter": "",
        "out_key": "pickup_address_id"
    },
    "package::package_reference": {
        "in_data_type": "string",
        "out_data_type": "string",
        "formatter": "",
        "out_key": "package_reference"
    },
    "package::description": {
        "in_data_type": "string",
        "out_data_type": "string",
        "formatter": "",
        "out_key": "description"
    },
    "package::price": {
        "in_data_type": "float",
        "out_data_type": "float",
        "formatter": "",
        "out_key": "price"
    },
    "package::order_value": {
        "in_data_type": "string",
        "out_data_type": "string",
        "formatter": "",
        "out_key": "order_value"
    },
    "package::bag_count": {
        "in_data_type": "int",
        "out_data_type": "int",
        "formatter": "",
        "out_key": "bag_count"
    },
    "package::weight": {
        "in_data_type": "string",
        "out_data_type": "string",
        "formatter": "",
        "out_key": "weight"
    },
    "package::dimension_weight": {
        "in_data_type": "string",
        "out_data_type": "string",
        "formatter": "",
        "out_key": "dimension_weight"
    }
}
```
## Input Sample
```
  var in_data = {
    "order_ref": "1234",
    "payment_method": "cd",
    "consolidate_orders": true,
    "express_delivery": false,
    "receiver_info": {
        "name": "",
        "phone": "+",
        "phone_2": "+",
        "email": "",
        "country": "United Arab Emirates",
        "state": "",
        "city": "Abu Dhabi",
        "street_one": "ABC Street",
        "street_two": "",
        "street_three": "",
        "postal_code": "",
        "instructions": "is"
    },
    "package": [
        {
            "location_id": "",
            "package_reference": "{{randint}}",
            "brief_info": "fragile",
            "price": 0,
            "order_value": "",
            "description": "This is Testing of  project",
            "bag_count": 1,
            "weight": "",
            "dimension_weight": "",
            "width": "",
            "height": "",
            "depth": "",
            "dimension_unit": ""
        },
        {
            "location_id": "",
            "package_reference": "",
            "brief_info": "fragile",
            "price": 0,
            "order_value": "",
            "description": "This is Testing of  project",
            "bag_count": 1,
            "weight": "",
            "dimension_weight": "",
            "width": "",
            "height": "",
            "depth": "",
            "dimension_unit": ""
        }
    ]
}

```

## Authors

* **Agwasim Emmanuel** - *Initial work* - [Eagwasim](https://github.com/eagwasim)

See also the list of [contributors](https://github.com/eagwasim/jtranslator/contributors) who participated in this project.

## License

This project is licensed under the MIT License

## Acknowledgments

* None for now

