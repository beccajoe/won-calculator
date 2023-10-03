package com.woncalculator;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/calculator")
@CrossOrigin(origins = "http://localhost:3000")
public class CalculatorController {

    @PostMapping("/add")
    public ResponseEntity<CalculatorResponse> add(@RequestBody CalculatorRequest request) {
        double result = request.getNum1() + request.getNum2();
        String expression = request.getNum1() + " + " + request.getNum2();
        CalculatorResponse response = new CalculatorResponse(result, expression, ""); // Provide an empty errorMessage);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/subtract")
    public ResponseEntity<CalculatorResponse> subtract(@RequestBody CalculatorRequest request) {
        double result = request.getNum1() - request.getNum2();
        String expression = request.getNum1() + " - " + request.getNum2();
        CalculatorResponse response = new CalculatorResponse(result, expression, ""); // Provide an empty errorMessage
        return ResponseEntity.ok(response);
    }

    @PostMapping("/multiply")
    public ResponseEntity<CalculatorResponse> multiply(@RequestBody CalculatorRequest request) {
        double result = request.getNum1() * request.getNum2();
        String expression = request.getNum1() + " * " + request.getNum2();
        CalculatorResponse response = new CalculatorResponse(result, expression, ""); // Provide an empty errorMessage
        return ResponseEntity.ok(response);
    }

    @PostMapping("/divide")
    public ResponseEntity<CalculatorResponse> divide(@RequestBody CalculatorRequest request) {
        if (request.getNum2() == 0) {
            return ResponseEntity.badRequest().body(new CalculatorResponse(0.0, "Division by zero is not allowed", "Division by zero is not allowed"));
        }
        double result = request.getNum1() / request.getNum2();
        String expression = request.getNum1() + " / " + request.getNum2();
        CalculatorResponse response = new CalculatorResponse(result, expression, ""); // Provide an empty errorMessage for successful response
        return ResponseEntity.ok(response);
    }


    // Default endpoint for calculation
    @PostMapping
    public ResponseEntity<CalculatorResponse> calculate(@RequestBody List<String> history) {
        // Initialize result and expression
        double result = 0.0;
        String expression = "";

        for (String operation : history) {
            // Split the operation into its components
            String[] parts = operation.split(" ");

            if (parts.length == 3) {
                // Assuming the operation has three parts: num1, operator, num2
                double num1 = Double.parseDouble(parts[0]);
                String operator = parts[1];
                double num2 = Double.parseDouble(parts[2]);

                // Perform calculations based on the operator
                switch (operator) {
                    case "+":
                        result += num1 + num2;
                        break;
                    case "-":
                        result += num1 - num2;
                        break;
                    case "x":
                        result += num1 * num2;
                        break;
                    case "/":
                        if (num2 != 0) {
                            result += num1 / num2;
                        } else {
                            // Handle division by zero error
                            String errorMessage = "Division by zero is not allowed";
                            return ResponseEntity.badRequest().body(new CalculatorResponse(0.0, "", errorMessage));
                        }
                        break;
                    default:
                        // Handle invalid operator
                        String errorMessage = "Invalid operator: " + operator;
                        return ResponseEntity.badRequest().body(new CalculatorResponse(0.0, "", errorMessage));
                }

                // Update the expression
                expression += num1 + " " + operator + " " + num2 + " ";
            } else {
                // Handle invalid operation format
                String errorMessage = "Invalid operation format: " + operation;
                return ResponseEntity.badRequest().body(new CalculatorResponse(0.0, "", errorMessage));
            }
        }

        // Create a CalculatorResponse object with the calculated result and expression
        CalculatorResponse calculationResponse = new CalculatorResponse(result, expression, "");

        // Return the result and expression in the ResponseEntity
        return ResponseEntity.ok(calculationResponse);
    }




}
