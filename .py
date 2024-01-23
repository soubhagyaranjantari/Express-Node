l1=[5,4,3,2,1]
# for i in range(len(l1)-1):
#     for j in range(len(l1)-1-i):
#         if l1[j]>l1[j+1]:
#             l1[j],l1[j+1]=l1[j+1],l1[j]
#             print(l1)

# # print(l1)
n=len(l1)
for i in range(1,n):
    ele=l1[i]
    j=i-1
    print(j)
    while j>=0 and ele<l1[j]:
        l1[j+1]=l1[j]
        j=j-1
        print('j in whie',j)
    l1[j+1]=ele

print(l1)