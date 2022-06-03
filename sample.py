
import math
m1 = int(input("enter m1 (kg): "))
m2 = int(input("enter m2 (kg): "))
m_3 = int(input("enter m3 (kg): "))
m_4 = int(input("enter m4 (kg): "))

r_1 = float(input("enter radius of m1 "))
r_2 = float(input("enter radius of m2 "))
r3 = float(input("enter radius of m3 "))
r4 = float(input("enter radius of m4 "))
rc = float(input("enter radius of  M "))
t1 = float(input("enter angle of m1 "))
t_2 = float(input("enter angle of m2 "))
t_3 = float(input("enter angle of m3 "))
t_4 = float(input("enter angle of m4 "))

t1 = math.radians(t1)
t2 = math.radians(t_2)
t3 = math.radians(t_3)
t4 = math.radians(t_4)

horizontal_force = ((m1*r_1*math.cos(t1))+(m2*r_2*math.cos(t2))+(m_3*r3*math.cos(t3))+(m_4*r4*math.cos(t4)))
print(f"{horizontal_force=}")

verticle_force = ((m1*r_1*math.sin(t1))+(m2*r_2*math.sin(t2))+(m_3*r3*math.sin(t3))+(m_4*r4*math.sin(t4)))
print(f"{verticle_force=}")

resultant_force = (pow(horizontal_force,2)+pow(verticle_force,2))**0.5
print(f"{resultant_force=}")

x = abs(verticle_force/horizontal_force)
t_r = math.tan(x)

print(f"angle: {math.degrees(t_r)}")

M = resultant_force/rc

print(f"{M=}")

t_c=180-math.degrees(t_r)
print(t_c)
