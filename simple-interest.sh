#!/bin/bash

echo "Enter principal:"
read p

echo "Enter rate:"
read r

echo "Enter time:"
read t

<<<<<<< HEAD
si=$((p*r*t/100))
=======
si=$((p * r * t / 100))
>>>>>>> 8550e3c5e7b336057acc8cea6d0f456bc63278a7

echo "Simple Interest: $si"