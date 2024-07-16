# WiseStart Strategy Pattern

### Instructions for Engineers
1. Implement the provided classes to pass all the unit tests.
2. Run the tests to verify your implementation.
3. Ensure that your code follows good coding practices and is well-organized.

This should help you to not only understand the Strategy Design pattern but also practice writing and passing unit tests for their code.  

#### Task:
You are to implement a simple text formatter application using the Strategy Design pattern. The application should be able to format text based on different strategies: uppercase, lowercase, and title case.

#### Information:
* Strategy Interface: An interface TextFormatterStrategy with a method String format(String text).
* Concrete Strategies (to create):
   - UppercaseStrategy: Converts text to uppercase.  
   - LowercaseStrategy: Converts text to lowercase.  
   - TitleCaseStrategy: Converts the first letter of each word to uppercase and the rest to lowercase.  
* Context Class: A TextFormatterContext class that can accept any strategy object and apply the formatting to a given text.
* Unit Tests: Have been created using JUnit to verify the correctness of the strategies. Get them passing.
* Provided:
   - The TextFormatterStrategy interface.
   - A set of JUnit tests to validate the implementation.

#### Hint:
If you want to see how it is done checkout the `solution` branch.
