/**
 * Created by emmanuel on 2/26/17.
 */

function isArray(data) {
    return Array.isArray(data)
}

function isObject(data) {
    return typeof data === "object" && !Array.isArray(data)
}

function translate(in_data, config, out_data, parent_key) {
    if (out_data == undefined || out_data == null) {
        if (parent_key == "" || !config.hasOwnProperty(parent_key) || config[parent_key]["out_data_type"] === "object") {
            out_data = {}
        } else {
            out_data = []
        }
    }

    if (isObject(in_data) && isObject(out_data)) {
        for (var key in in_data) {
            if (!config.hasOwnProperty(parent_key + key)) {
                out_data[key] = in_data[key]
            } else if (isObject(in_data[key])) {
                if (config[parent_key + key]["out_data_type"] == "object") {
                    var child_out_data = {}
                    child_out_data = translate(in_data[key], config, child_out_data, parent_key + key + ":")
                    out_data[config[parent_key + key]["out_key"]] = child_out_data
                }
            } else if (isArray(in_data[key])) {
                if (config[parent_key + key]["out_data_type"] == "array") {
                    var child_out_data = []
                    child_out_data = translate(in_data[key], config, child_out_data, parent_key + key + ":")
                    out_data[config[parent_key + key]["out_key"]] = child_out_data
                }
            } else {
                out_data[config[parent_key + key]["out_key"]] = in_data[key]
            }
        }
    } else if (isArray(in_data) && isArray(out_data)) {
        for (var index = 0; index < in_data.length; index++) {
            out_data.push(translate(in_data[index], config, null, parent_key + ":"))
        }
    }

    return out_data
}

var in_data = {
    "order_ref": "1234",
    "payment_method": "cd",
    "consolidate_orders": true,
    "express_delivery": false,
    "receiver_info": {
        "name": "Ismail",
        "phone": "+971568238335",
        "phone_2": "+971568238335",
        "email": "i.isleem@fetchr.us",
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
            "location_id": "ADDR808070_1300",
            "package_reference": "{{randint}}",
            "brief_info": "fragile",
            "price": 0,
            "order_value": "",
            "description": "This is Testing of Altayer project",
            "bag_count": 1,
            "weight": "",
            "dimension_weight": "",
            "width": "",
            "height": "",
            "depth": "",
            "dimension_unit": ""
        },
        {
            "location_id": "ADDR808070_1300",
            "package_reference": "{{randint}}",
            "brief_info": "fragile",
            "price": 0,
            "order_value": "",
            "description": "This is Testing of Altayer project",
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


console.log(JSON.stringify(translate(in_data, config, null, "")))