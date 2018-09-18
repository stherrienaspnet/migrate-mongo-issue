'use strict';

module.exports = {

    up(db, next)
    {
        db.createCollection("physical-type", {
            validator: {
                $jsonSchema: {
                    bsonType: "object",
                    required: ["PhysicalTypeCode", "LegacyPhysicalTypeCode", "MinLimit", "MaxLimit", "VisibleOnUI", "SupportsDifferential"],
                    properties: {
                        PhysicalTypeCode: {
                            bsonType: "int",
                            description: "must be an integer and is required"
                        },
                        LegacyPhysicalTypeCode: {
                            bsonType: "int",
                            description: "must be a integer and is required"
                        },
                        MinLimit: {
                            bsonType: "double",
                            description: "must be a double and is required"
                        },
                        MaxLimit: {
                            bsonType: "double",
                            description: "must be a double and is required"
                        },
                        VisibleOnUI: {
                            bsonType: "bool",
                            description: "must be a boolean and is required"
                        },
                        SupportsDifferential: {
                            bsonType: [ "bool" ],
                            description: "must be a boolean and is required"
                        }
                    }
                }
            }
        });

        db.collection('physical-type').insertMany([
            {PhysicalTypeCode: 1, LegacyPhysicalTypeCode: 17, MinLimit: -3.4E+38, MaxLimit: 3.4E+38, VisibleOnUI: true, SupportsDifferential: true, Name: {en: 'Float 32', fr: 'Float 32'}, Units: {UnitCode: 1, Symbol: '', SymbolDifferential: '', Gain: 0, Precision: 3, Description: {en: 'Float 32', fr: 'Float 32'}}},
            ]);

        next();
    },

    down(db, next) {
        next();
    }

};