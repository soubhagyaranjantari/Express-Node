# l1=[5,4,3,2,1]
# # for i in range(len(l1)-1):
# #     for j in range(len(l1)-1-i):
# #         if l1[j]>l1[j+1]:
# #             l1[j],l1[j+1]=l1[j+1],l1[j]
# #             print(l1)

# # # print(l1)
# n=len(l1)
# for i in range(1,n):
#     ele=l1[i]
#     j=i-1
#     print(j)
#     while j>=0 and ele<l1[j]:
#         l1[j+1]=l1[j]
#         j=j-1
#         print('j in whie',j)
#     l1[j+1]=ele

# print(l1)


# def any():
#     print("JHello")
# any()    


# print(sum(l1))

# for i in range(11,1,-3):
#         print(i)  
for i in range(5):
    for j in range(5-i):
        print(' ',end=" ")
    for k in range(i+1):
        print('*',end=" ")
    for l in range(i):
        print('*',end=" ")
    print()
for i in range(5):
    for a in range(i):
        print(' ',end=" ")
    for v in range(i,5):
        print('*',end=" ")
    for c in range(i,5+1):
        print('*',end=" ")
    print()