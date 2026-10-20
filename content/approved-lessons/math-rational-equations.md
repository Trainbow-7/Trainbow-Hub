# Trainbow Approved Lesson Note: Rational Algebraic Equations

**Subject:** Mathematics (Algebraic Processes)  
**Curriculum:** WAEC SSCE / NECO Senior Secondary  
**Level:** SS 2 & SS 3  
**Source ID:** LESSON-MATH-ALG-001  
**Copyright:** © Trainbow HUB Approved Academic Teaching Content. All Rights Reserved.

## 1. Definition and Non-Permissible Values (Restrictions)
A rational equation is an equation containing one or more rational expressions (fractions where numerator and denominator are polynomials).
Before performing any algebraic operations, always determine the **domain restrictions** (non-permissible values):
Values of the variable that make any denominator zero must be excluded from the domain.

Example: For $\frac{1}{3a-1} = \frac{2}{a+1} - \frac{3}{8}$:
* $3a - 1 = 0 \implies a = \frac{1}{3}$ (Restriction: $a \neq \frac{1}{3}$)
* $a + 1 = 0 \implies a = -1$ (Restriction: $a \neq -1$)

## 2. Clearing Fractions using the Lowest Common Denominator (LCD)
Find the Lowest Common Multiple (LCM) of all denominators in the equation.
Multiply each term on both the Left-Hand Side (LHS) and Right-Hand Side (RHS) by this LCD.
For denominators $(3a - 1)$, $(a + 1)$, and $8$, the LCD is $8(3a - 1)(a + 1)$.

Multiplying through:
$$8(a + 1) = 16(3a - 1) - 3(3a - 1)(a + 1)$$

## 3. Expanding, Collecting Like Terms, and Quadratic Reduction
Expand the products systematically:
$$8a + 8 = 48a - 16 - 3(3a^2 + 2a - 1)$$
$$8a + 8 = 48a - 16 - 9a^2 - 6a + 3$$
$$8a + 8 = -9a^2 + 42a - 13$$

Rearrange into standard quadratic form $ax^2 + bx + c = 0$:
$$9a^2 - 34a + 21 = 0$$

## 4. Solving the Resulting Quadratic
Using factorization:
Find two numbers that multiply to $9 \times 21 = 189$ and add to $-34$:
These numbers are $-27$ and $-7$.
$$9a^2 - 27a - 7a + 21 = 0 \implies 9a(a - 3) - 7(a - 3) = 0$$
$$(a - 3)(9a - 7) = 0$$
Roots: $a = 3$ or $a = \frac{7}{9}$.

## 5. Programmatic Check by Direct Substitution
Always substitute each calculated root into the original unsimplified LHS and RHS:
* Root $a = 3$:
  $$\text{LHS} = \frac{1}{3(3)-1} = \frac{1}{8}$$
  $$\text{RHS} = \frac{2}{3+1} - \frac{3}{8} = \frac{2}{4} - \frac{3}{8} = \frac{4}{8} - \frac{3}{8} = \frac{1}{8}$$
  Both sides equal $\frac{1}{8}$. Verified!
* Root $a = \frac{7}{9}$:
  $$\text{LHS} = \frac{1}{3(7/9)-1} = \frac{1}{\frac{7}{3}-1} = \frac{1}{\frac{4}{3}} = \frac{3}{4}$$
  $$\text{RHS} = \frac{2}{\frac{7}{9}+1} - \frac{3}{8} = \frac{2}{\frac{16}{9}} - \frac{3}{8} = \frac{18}{16} - \frac{3}{8} = \frac{9}{8} - \frac{3}{8} = \frac{6}{8} = \frac{3}{4}$$
  Both sides equal $\frac{3}{4}$. Verified!
