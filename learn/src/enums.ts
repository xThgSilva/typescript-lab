// Set of values
// Numeric enum
enum NumericOrderStatus {
    Pending,    // Start 0, but can be modify
    Paid,
    Shipped,
    Cancelled
};
// Case NumericOrderStatus.Pending, prints Pending

// String enum
enum Directions {
    Up = "up",
    Down = "down",
    Left = "left",
    Right = "right"
}
// Case Directions.Right, prints "right"
