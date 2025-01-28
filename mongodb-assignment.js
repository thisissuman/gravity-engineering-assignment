// This is my first attempt at writing an aggregate function in MongoDB. 
// Below is the code I have tried.
// this can be checked in https://mongoplayground.net/

db.collection.aggregate([
    {
      $unwind: "$items"
    },
    {
      $group: {
        _id: {
          store: "$store",
          month: "$date"
        },
        totalRevenue: {
          $sum: {
            $multiply: [
              "$items.quantity",
              "$items.price"
            ]
          }
        },
        averagePrice: {
          $avg: "$items.price"
        }
      }
    }
  ])

