package com.woncalculator;

import lombok.Data;

@Data
public class CalculatorRequest {
    private double num1;
    private double num2;
    private String operator;
}
