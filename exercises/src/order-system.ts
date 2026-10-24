/* Order Management System

Build a TypeScript type system for an order management API

Requirements:
- Order Updates: Create an OrderUpdate type that makes all updatable properties optional while excluding id and createdAt
- Order Summary: Create an OrderSummary type containing only id, customerName, total, and status
- Active Order Status: Create an ActiveOrderStatus type that excludes cancelled and delivered from OrderStatus
- Electronic Payments: Create an ElectronicPayment type that includes only pix, credit, and debit
- Generic API Response: Create a reusable ApiResponse<T> type containing data, success, and message
- Function Type Extraction: Define an order update function and use Utility Types to extract its parameter types and return type
- Discriminated Union: Model an operation result that can represent either a successful update containing an Order or a failure
containing an error message. Use a discriminant property to distinguish between the two cases
- Type-Safe Result Handling: Implement a function that handles both outcomes and accesses only the properties available in
each case

Constraints
- Do not use any or type assertions to bypass type checking
- Keep the original Order interface unchanged
- Reuse Utility Types whenever appropriate
- Ensure the code passes TypeScript type checking
*/

type OrderStatus = | "pending" | "processing" | "shipped" | "delivered" | "cancelled";

type PaymentMethod = "pix" | "credit" | "debit" | "cash";

interface Order {
    readonly id: number;
    customerName: string;
    customerEmail: string;
    items: string[];
    total: number;
    status: OrderStatus;
    paymentMethod: PaymentMethod;
    notes?: string;
    createdAt: Date;
}

type OrderUpdate = Partial<Omit<Order, "id" | "createdAt">>;

type OrderSummary = Pick<Order, "id" | "customerName" | "total" | "status">;

type ActiveOrderStatus = Exclude<OrderStatus, "cancelled" | "delivered">;

type ElectronicPayment = Extract<PaymentMethod, "pix" | "credit" | "debit">;

type ApiResponse<T> = {
    data: T;
    success: boolean;
    message: string;
};

const update: OrderUpdate = {
    total: 150,
    status: "processing"
};

type UpdateResult =
    | 
    {
        success: true;
        data: Order;
    }
    | {
        success: false;
        error: string;
    };

function handleResult(result: UpdateResult): void {
    if (result.success) {
        console.log(result.data.customerName);
    } else {
        console.log(result.error);
    }
}