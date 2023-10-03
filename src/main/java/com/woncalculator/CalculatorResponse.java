package com.woncalculator;

import lombok.Data;
import org.springframework.http.ResponseEntity;

@Data
public class CalculatorResponse {
    private double result;
    private String expression;
    private String errorMessage;  // Add an errorMessage field


    public CalculatorResponse(double result, String expression, String errorMessage) {
        this.result = result;
        this.expression = expression;
        this.errorMessage = errorMessage;
    }

    // Inside your CalculatorResponse class, add a method for creating an error response
    public static ResponseEntity<CalculatorResponse> createErrorResponse(String errorMessage) {
        CalculatorResponse errorResponse = new CalculatorResponse(0.0, "", errorMessage);
        return ResponseEntity.badRequest().body(errorResponse);
    }

}
