# New Purchase & Inventory

Config:
- 字段
- 关联表单
- workflow
- 视图
- business rules
- 权限设置

## 采购模块各表单及结构：

## Purchase:
### 1. 采购申请 | Purchase Request

#### 字段

- Status of Request (auto)：
    - Submitted: 提交后初始状态
    - Compeleted: 所有Purchase item已签收 （Status of Goods 为 **Received**）。

- 采购用途 | Justification（required）
- PurchaseRequest_ID (auto)
- Requestor (auto): 当前用户
- Purchase Request Date (auto): 当前时间
- 备注 | Remark: 用户可以通过此字段备注需要采购人员了解的事项。
- 预估请购总价 | Estimated Total (auto)
- 到货数 (auto)
- 请购项目数 (auto)

#### 关联表单
- Purchase Item

#### 视图
- All

#### Business Rules
- None

#### 权限设置
- APTC Members:
    - View (All)
    - Edit (Owner)

### 2. 采购明细 | Purchase Item

#### 字段

##### Tab - Basic:
- Status of Goods (auto):
    - Initial: 提交后初始状态
    - Purchasing: 采购人员提交采购单 **Create PO确认购买** 后
    - Reveived: 采购人员收到货 **签收** 后
    - Stocked: 货物执行 **入库** 后
    - Rejected: 驳回

- Project Related:
    - RMP/PTP: 勾选后所购买项目会被标记为RMP/PTP专用，也会方便后续统计此项目花费
    - Other: 其他项目也可添加选项或使用other
- Requisitioner | 请购员 (auto): 当前用户
- 购买数量 | Number
- 采购单位 | Unit
- 货号 | Product Number
- 单价 | Price
- 总价 | Total Price (auto)
- MSDS
- 报价单 | Quotation
- 备注 | Remark
- 纯度等级 | Purity Grade
- 纯度 | Purity

##### Tab - Stock Records:
- 入库数量: 此单下入库的数量，单位为采购单位。

##### Tab - Receipt Info.: 
由采购人员签收时填写
- Status of Package:
    - Good
    - Broken
    - Partial Received
- Receipt Information

#### 关联表单

##### Tab - Basic:
- Material: **物料清单 | Material List**
- Purchase Request: **采购申请 | Purchase Request**
- Purchase Order: **采购单 | Purchase Order**
- 供应商 | Supplier: **供应商清单 | Supplier List**

##### Tab - Stock Records:
- 入库单: **入库单**
- 入库明细: **库存明细 | Inventory Details**

#### 按钮
Single Data Source:
- 入库: 
    - Action: 弹出**入库单**，触发 **新建入库单** workflow。(参见Changelog-入库单-workflow)
    - Conditional: Status of Goods **Is one of** Received

- 签收:
    - Action:
        - 弹出窗口，填写 **Status of Package**, **Receipt Information**
        - 若 Status of Package 为 **Good**, 更新 Status of Goods 为 **Received**
            - 若入库数 = 采购，则更新采购单状态为 **GR**
            - 若入库数 < 采购，则更新采购单状态为 **Partial GR**
            - 若到货数 = 请购项目数，则更新请购单状态为 **Compeleted**
    - Conditional: Status of Goods **Is one of** Purchasing

Batch Data Source:
- 生成采购单:
    - Action: 合并采购项目生成一条 **采购单 | Purchase Order**
    - Conditional: Status of Goods **is** Initial

### 3. 采购单 | Purchase Order

#### 字段
- PurchaseOrder_ID
- Status of Order (auto):
    - Initial: 提交后初始状态
    - Purchasing: 点击 **Create PO确认采购** 后
    - Partial GR:
    - GR
    - Cancel: 取消该订单。
- PO Number
- 实际总花费 | Total: 采购人员填写该订单实际花费。
- 备注 | Remark
- 汇总金额 (auto): 汇总所列项目金额，原则上应与实际总花费一致。
- 入库明细数
- 采购明细数

#### 关联表单
-Purchase Item

#### 按钮
Single Data Source:
- Create PO确认采购:
    - Action: 弹出窗口，采购人员填写 PO Number， 实际总花费 | Total
    - Conditional: Status of Order **Is one of** Initial

- 取消采购:
    - Action: 将此采购单状态更改为Cancel
    - Conditional: Status of Order **Is one of** Initial

#### Business Rules

- When **Status of Order is Cancel** then **Read-only all fields**

## Change Log

### 1. 入库单

#### 字段
- 入库方式 | Stocking Method
- Operator
- Operate Date
- 入库数量 | Number
- Batch Number | 批号
- 有效期至 | Expired Date
- COA
- MSDS

#### 关联表单
- 采购明细 | Purchase Item
- 物料清单 | Material List
- Storage Area List
- 库存明细 | Inventory Details

#### Workflow

##### When adding new records:
- 当MSDS不为空，更新物料清单中的MSDS （可能会出问题，若有人上传错误文件，则该条目下物料则使用错误文件）
- 若入库方式为合并入库:
    - 当Material Type **is any of** 甲类，管控，标准品，Micro-key,Consumable-key:
        - 新建一条库存记录，call PBP - **出入库记录**
    - 当Material Type **is none of** 甲类，管控，标准品，Micro-key,Consumable-key:
        - 若不存在该物料:
            - 新建一条库存记录，call PBP - **出入库记录**
        - 若已存在该物料:
            - 更新该物料批号，入库日期
- 若入库方式为拆分入库:
    - 根据入库数量，创建n个相同的库存记录。call PBP - **出入库记录**

- 更新 Status of Goods 为 **Stocked**

### 2. 盘点单

#### 字段

- Operator
- Operate Date
- 实际库存 | Number
- 库存单位 | Unit

#### 关联表单
- 库存明细 | Inventory Details



