<template><div><h1 id="design-document" tabindex="-1"><a class="header-anchor" href="#design-document"><span>Design Document</span></a></h1>
<blockquote>
<p>Document Structure:</p>
<ul>
<li>分组
<ul>
<li>表单
<ul>
<li>字段</li>
<li>关联表单</li>
<li>按钮</li>
<li>业务规则</li>
<li>工作流</li>
<li>视图</li>
</ul>
</li>
</ul>
</li>
</ul>
</blockquote>
<h2 id="inventory" tabindex="-1"><a class="header-anchor" href="#inventory"><span>Inventory</span></a></h2>
<h3 id="index" tabindex="-1"><a class="header-anchor" href="#index"><span>Index</span></a></h3>
<blockquote>
<p>此表单的作用在于规范命名，便于库存查询和统计分析。</p>
</blockquote>
<h4 id="字段" tabindex="-1"><a class="header-anchor" href="#字段"><span>字段</span></a></h4>
<ul>
<li>Title (auto):
<ul>
<li>[Chinese Name] | [English Name]</li>
</ul>
</li>
<li>Has CAS Number？
<ul>
<li>Yes</li>
<li>No</li>
</ul>
</li>
<li>Chinese Name</li>
<li>English Name</li>
<li>别名 | Synonyms: 此处可写任意多个中文或英文名称，仅为方便查找，不会改变标准命名</li>
</ul>
<h4 id="关联表单" tabindex="-1"><a class="header-anchor" href="#关联表单"><span>关联表单</span></a></h4>
<ul>
<li>物料清单 | Material List</li>
</ul>
<h4 id="按钮" tabindex="-1"><a class="header-anchor" href="#按钮"><span>按钮</span></a></h4>
<ul>
<li>Add Synonyms:
<ul>
<li>Action: 弹出窗口，可修改当前物料 <strong>别名 | Synonyms</strong></li>
</ul>
</li>
</ul>
<h4 id="业务规则" tabindex="-1"><a class="header-anchor" href="#业务规则"><span>业务规则</span></a></h4>
<ul>
<li>When Material Index is <strong>00_无需目录收录的物品 | Do not need Index</strong>
<ul>
<li>Show <strong>Material name</strong></li>
</ul>
</li>
</ul>
<h4 id="工作流" tabindex="-1"><a class="header-anchor" href="#工作流"><span>工作流</span></a></h4>
<ul>
<li>None</li>
</ul>
<h4 id="视图" tabindex="-1"><a class="header-anchor" href="#视图"><span>视图</span></a></h4>
<ul>
<li>All</li>
</ul>
<h3 id="物料清单-material-list" tabindex="-1"><a class="header-anchor" href="#物料清单-material-list"><span>物料清单 | Material List</span></a></h3>
<blockquote>
<p>此表单定义了与物质本身性质相关的内容，不包括批次信息。</p>
</blockquote>
<h4 id="字段-1" tabindex="-1"><a class="header-anchor" href="#字段-1"><span>字段</span></a></h4>
<h5 id="tab-basic" tabindex="-1"><a class="header-anchor" href="#tab-basic"><span>Tab - Basic</span></a></h5>
<ul>
<li>Title (auto):
<ul>
<li>[规格 / 浓度 / 当量 /etc.] [Material Name], [包装 | Package] - [品牌 (生产商) | Brand]</li>
</ul>
</li>
<li>Material_ID</li>
<li>领用方式 | Use Type:
<ul>
<li>单次领用 | Single Use</li>
<li>用后归还 | Return After Use</li>
<li>无需领用 | No Required</li>
</ul>
</li>
<li>Material Type（多选）:
<blockquote>
<p>此处分类决定后续采购及领用流程。</p>
</blockquote>
<ul>
<li>甲类危险品 | Class A</li>
<li>管控物质 | Controlled
<ul>
<li>领用时需通过危化品领用单，双人双签。</li>
</ul>
</li>
<li>标准品 | Reference Material
<ul>
<li>常规领用单，入库后需验收。</li>
</ul>
</li>
<li>Consumable - key
<ul>
<li>常规领用单，需填写领用记录。</li>
</ul>
</li>
<li>Consumable - Regular
<ul>
<li>由采购人员定期盘点库存，无需领用。</li>
<li>当库存不足时，任何人都可以点击 <strong>盘点</strong> 按钮以标注实际库存，从而触发安全库存预警，方便采购人员及时补货。用户也可以直接点击 <strong>再次购买</strong> 按钮，系统将自动生成采购申请单。</li>
</ul>
</li>
<li>Others
<ul>
<li>无需库存管理的物品。</li>
</ul>
</li>
</ul>
</li>
<li>MSDS</li>
<li>包装 | Package</li>
<li>规格 / 浓度 / 当量 /etc.</li>
</ul>
<blockquote>
<p>规格是产品的具体描述，包装是产品的外部包装方式。如一包50ml离心管，其规格为“50ml”,包装为“25个/包”。如2L 37%盐酸溶液，其规格或浓度为“37%”，包装为“2L”或“2L/瓶”。同一个物品可以有不同包装，但规格不同一定是不同的物品。</p>
</blockquote>
<ul>
<li>品牌 (生产商) | Brand (Required)</li>
<li>货号 | Product Number</li>
<li>预估单价</li>
<li>采购单位 | Unit (Required)</li>
<li>领用单位 | Unit (Required)</li>
<li>库存换算系数</li>
</ul>
<blockquote>
<p>库存数量 = 库存换算系数 * 采购数量。如一瓶溶液包装为“500ml（/瓶）”，领用单位为“ml”，因采购单位为“瓶”，，则库存换算系数应设为“500”。此设计旨在确保领用时准确扣除库存。</p>
</blockquote>
<h5 id="tab-inventory-info" tabindex="-1"><a class="header-anchor" href="#tab-inventory-info"><span>Tab - Inventory Info.</span></a></h5>
<ul>
<li>安全库存</li>
<li>当前库存总量 (auto)
<ul>
<li>Rollup <strong>当前库存总量</strong></li>
<li>Sum</li>
</ul>
</li>
</ul>
<h4 id="关联表单-1" tabindex="-1"><a class="header-anchor" href="#关联表单-1"><span>关联表单</span></a></h4>
<ul>
<li>Material Index</li>
<li>默认存放位置 | Storage Area</li>
<li>库存明细 | Inventory Details</li>
<li>供应商清单 | Supplier List</li>
</ul>
<h4 id="按钮-1" tabindex="-1"><a class="header-anchor" href="#按钮-1"><span>按钮</span></a></h4>
<ul>
<li>None</li>
</ul>
<h4 id="业务规则-1" tabindex="-1"><a class="header-anchor" href="#业务规则-1"><span>业务规则</span></a></h4>
<ul>
<li>None</li>
</ul>
<h4 id="工作流-1" tabindex="-1"><a class="header-anchor" href="#工作流-1"><span>工作流</span></a></h4>
<ul>
<li>None</li>
</ul>
<h4 id="视图-1" tabindex="-1"><a class="header-anchor" href="#视图-1"><span>视图</span></a></h4>
<ul>
<li>All</li>
<li>库存不足
<ul>
<li>Filter:
<ul>
<li><strong>安全库存</strong> is not empty</li>
<li><strong>当前库存总量</strong> &lt; <strong>安全库存</strong></li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="库存明细-inventory-details" tabindex="-1"><a class="header-anchor" href="#库存明细-inventory-details"><span>库存明细 | Inventory Details</span></a></h3>
<h4 id="字段-2" tabindex="-1"><a class="header-anchor" href="#字段-2"><span>字段</span></a></h4>
<h5 id="tab-basic-1" tabindex="-1"><a class="header-anchor" href="#tab-basic-1"><span>Tab-Basic</span></a></h5>
<ul>
<li>Material Status (auto):
<ul>
<li>可用的 | Available</li>
<li>待归还 | Pending Return</li>
<li>已过期 | Expired</li>
<li>已停用 | Disabled</li>
</ul>
</li>
<li>领用方式 | Use Type：默认来自上一级 <strong>物料清单 | Material List</strong></li>
<li>Batch Number | 批号</li>
<li>Project Related</li>
<li>入库日期 | Receive Date</li>
<li>有效期至 | Expired Date</li>
<li>纯度等级 | Purity Grade</li>
<li>纯度 | Purity:
<ul>
<li>range: 0-1</li>
</ul>
</li>
<li>COA</li>
<li>MSDS: 来自上一级 <strong>物料清单 | Material List</strong></li>
<li>当前库存数量
<ul>
<li>Rollup <strong>变动数量 | Number - Changed</strong></li>
<li>Sum</li>
</ul>
</li>
<li>领用单位 | Unit</li>
<li>备注 | Remarks</li>
<li>货号 | Product Number</li>
<li>预估单价</li>
</ul>
<h5 id="tab-fm-03i-耗品验收-服务评估记录" tabindex="-1"><a class="header-anchor" href="#tab-fm-03i-耗品验收-服务评估记录"><span>Tab - FM-03I 耗品验收/服务评估记录</span></a></h5>
<ul>
<li>Product ( or Service) Quality | 产品(或服务) 质量</li>
<li>On-time Delivery | 物流速度</li>
<li>评估结果 | ResultL:
<ul>
<li>Pass</li>
<li>Pending Evaluation</li>
<li>Reject</li>
</ul>
</li>
<li>技术评估 | Evaluation</li>
<li>评价/追评 | Comments</li>
<li>File</li>
</ul>
<h4 id="关联表单-2" tabindex="-1"><a class="header-anchor" href="#关联表单-2"><span>关联表单</span></a></h4>
<ul>
<li>物料清单 | Material List</li>
<li>库区库位 | Storage Area</li>
<li>供应商 | Supplier</li>
<li>库存变动明细 | Stock Change Record</li>
</ul>
<h4 id="业务规则-2" tabindex="-1"><a class="header-anchor" href="#业务规则-2"><span>业务规则</span></a></h4>
<ul>
<li>When Material Status <strong>Is one of</strong> 已停用 | Disabled，已过期 | Expired
<ul>
<li>Read-only all fields</li>
</ul>
</li>
</ul>
<h3 id="按钮-2" tabindex="-1"><a class="header-anchor" href="#按钮-2"><span>按钮</span></a></h3>
<ul>
<li>领用</li>
<li>盘点</li>
<li>危化品领用</li>
<li>再次购买
<ul>
<li>Action:
<ul>
<li>弹出窗口，填写采购数量，Workflow会通过正则表达式确认输出为数字型。</li>
<li>以当前库存为模板，生成一条采购申请及其关联的采购明细。</li>
</ul>
</li>
</ul>
</li>
<li>评价/验收:
<ul>
<li>弹出Tab - Rating &amp; Evaluation，添加评价和评估信息后，Workflow将同步同一入库单下的同批号库存评价内容。</li>
</ul>
</li>
<li>停用</li>
<li>归还</li>
</ul>
<h2 id="purchase" tabindex="-1"><a class="header-anchor" href="#purchase"><span>Purchase:</span></a></h2>
<h3 id="采购申请-purchase-request" tabindex="-1"><a class="header-anchor" href="#采购申请-purchase-request"><span>采购申请 | Purchase Request</span></a></h3>
<h4 id="字段-3" tabindex="-1"><a class="header-anchor" href="#字段-3"><span>字段</span></a></h4>
<ul>
<li>
<p>Status of Request (auto)：</p>
<ul>
<li>Submitted: 已下单条目=0</li>
<li>Purchasing 已下单条目&gt;0,已完成条目&lt;条目总数</li>
<li>Compeleted: 非以上条件</li>
</ul>
</li>
<li>
<p>采购用途 | Justification（required）</p>
</li>
<li>
<p>PurchaseRequest_ID (auto)</p>
</li>
<li>
<p>Requestor (auto): 当前用户</p>
</li>
<li>
<p>Purchase Request Date (auto): 当前时间</p>
</li>
<li>
<p>备注 | Remark: 用户可以通过此字段备注需要采购人员了解的事项。</p>
</li>
<li>
<p>预估请购总价 | Estimated Total (auto)</p>
</li>
<li>
<p>已下单条目 (auto):</p>
<ul>
<li>Rollup: Number of Records</li>
<li>Filter: Status of Goods <strong>not any of</strong> Initial,Cancel</li>
</ul>
</li>
<li>
<p>已完成条目 (auto):</p>
<ul>
<li>Rollup: Number of Records</li>
<li>Filter: Status of Goods <strong>Is one of</strong> Received,Cancel</li>
</ul>
</li>
<li>
<p>请购项目数 (auto):</p>
<ul>
<li>所关联条目总数</li>
</ul>
</li>
</ul>
<h4 id="关联表单-3" tabindex="-1"><a class="header-anchor" href="#关联表单-3"><span>关联表单</span></a></h4>
<ul>
<li>Purchase Item</li>
</ul>
<h4 id="按钮-3" tabindex="-1"><a class="header-anchor" href="#按钮-3"><span>按钮</span></a></h4>
<ul>
<li>Cancel
<ul>
<li>Action:
<ul>
<li>将该申请单下的采购条目状态更新为 <strong>Cancel</strong></li>
</ul>
</li>
<li>Conditional: 已下单条目=0</li>
</ul>
</li>
</ul>
<h4 id="视图-2" tabindex="-1"><a class="header-anchor" href="#视图-2"><span>视图</span></a></h4>
<ul>
<li>All</li>
</ul>
<h4 id="业务规则-3" tabindex="-1"><a class="header-anchor" href="#业务规则-3"><span>业务规则</span></a></h4>
<ul>
<li>When Status of Request <strong>not equal to</strong> Submitted
<ul>
<li>Read-only all fields</li>
</ul>
</li>
</ul>
<h4 id="权限设置" tabindex="-1"><a class="header-anchor" href="#权限设置"><span>权限设置</span></a></h4>
<ul>
<li>APTC Members:
<ul>
<li>View (All)</li>
<li>Edit (Owner)</li>
</ul>
</li>
</ul>
<h3 id="采购明细-purchase-item" tabindex="-1"><a class="header-anchor" href="#采购明细-purchase-item"><span>采购明细 | Purchase Item</span></a></h3>
<h4 id="字段-4" tabindex="-1"><a class="header-anchor" href="#字段-4"><span>字段</span></a></h4>
<h5 id="tab-basic-2" tabindex="-1"><a class="header-anchor" href="#tab-basic-2"><span>Tab - Basic:</span></a></h5>
<ul>
<li>
<p>Status of Goods (auto):</p>
<ul>
<li>Initial: 提交后初始状态</li>
<li>Purchasing: 采购人员提交采购单 <strong>Create PO确认购买</strong> 后</li>
<li>Reveived: 采购人员收到货 <strong>签收</strong> 后</li>
<li>Stocked: 货物执行 <strong>入库</strong> 后</li>
<li>Cancel</li>
</ul>
</li>
<li>
<p>Project Related:</p>
<ul>
<li>RMP/PTP: 勾选后所购买项目会被标记为RMP/PTP专用，也会方便后续统计此项目花费</li>
<li>Other: 其他项目也可添加选项或使用other</li>
</ul>
</li>
<li>
<p>Requisitioner | 请购员 (auto): 当前用户</p>
</li>
<li>
<p>购买数量 | Number</p>
</li>
<li>
<p>采购单位 | Unit</p>
</li>
<li>
<p>货号 | Product Number</p>
</li>
<li>
<p>单价 | Price</p>
</li>
<li>
<p>总价 | Total Price (auto)</p>
</li>
<li>
<p>MSDS</p>
</li>
<li>
<p>报价单 | Quotation</p>
</li>
<li>
<p>备注 | Remark</p>
</li>
<li>
<p>纯度等级 | Purity Grade</p>
</li>
<li>
<p>纯度 | Purity</p>
</li>
</ul>
<h5 id="tab-stock-records" tabindex="-1"><a class="header-anchor" href="#tab-stock-records"><span>Tab - Stock Records:</span></a></h5>
<ul>
<li>入库数量: 此单下入库的数量，单位为采购单位。</li>
</ul>
<h5 id="tab-receipt-info" tabindex="-1"><a class="header-anchor" href="#tab-receipt-info"><span>Tab - Receipt Info.:</span></a></h5>
<p>由采购人员签收时填写</p>
<ul>
<li>Status of Package:
<ul>
<li>Good</li>
<li>Broken</li>
<li>Partial Received</li>
</ul>
</li>
<li>Receipt Information</li>
</ul>
<h4 id="关联表单-4" tabindex="-1"><a class="header-anchor" href="#关联表单-4"><span>关联表单</span></a></h4>
<h5 id="tab-basic-3" tabindex="-1"><a class="header-anchor" href="#tab-basic-3"><span>Tab - Basic:</span></a></h5>
<ul>
<li>Material: <strong>物料清单 | Material List</strong></li>
<li>Purchase Request: <strong>采购申请 | Purchase Request</strong></li>
<li>Purchase Order: <strong>采购单 | Purchase Order</strong></li>
<li>供应商 | Supplier: <strong>供应商清单 | Supplier List</strong></li>
</ul>
<h5 id="tab-stock-records-1" tabindex="-1"><a class="header-anchor" href="#tab-stock-records-1"><span>Tab - Stock Records:</span></a></h5>
<ul>
<li>入库单: <strong>入库单</strong></li>
<li>入库明细: <strong>库存明细 | Inventory Details</strong></li>
</ul>
<h4 id="按钮-4" tabindex="-1"><a class="header-anchor" href="#按钮-4"><span>按钮</span></a></h4>
<p>Single Data Source:</p>
<ul>
<li>
<p>入库:</p>
<ul>
<li>Action: 弹出<strong>入库单</strong>，触发 <strong>新建入库单</strong> workflow。(参见Changelog-入库单-工作流)</li>
<li>Conditional: Status of Goods <strong>Is one of</strong> Received</li>
</ul>
</li>
<li>
<p>签收:</p>
<ul>
<li>Action:
<ul>
<li>弹出窗口，填写 <strong>Status of Package</strong>, <strong>Receipt Information</strong></li>
<li>若 Status of Package 为 <strong>Good</strong>, 更新 Status of Goods 为 <strong>Received</strong>
<ul>
<li>若入库数 = 采购，则更新采购单状态为 <strong>GR</strong></li>
<li>若入库数 &lt; 采购，则更新采购单状态为 <strong>Partial GR</strong></li>
</ul>
</li>
</ul>
</li>
<li>Conditional: Status of Goods <strong>Is one of</strong> Purchasing</li>
</ul>
</li>
</ul>
<p>Batch Data Source:</p>
<ul>
<li>生成采购单:
<ul>
<li>Action: 合并采购项目生成一条 <strong>采购单 | Purchase Order</strong></li>
<li>Conditional: Status of Goods <strong>is</strong> Initial</li>
</ul>
</li>
</ul>
<h3 id="采购单-purchase-order" tabindex="-1"><a class="header-anchor" href="#采购单-purchase-order"><span>采购单 | Purchase Order</span></a></h3>
<h4 id="字段-5" tabindex="-1"><a class="header-anchor" href="#字段-5"><span>字段</span></a></h4>
<ul>
<li>PurchaseOrder_ID</li>
<li>Status of Order (auto):
<ul>
<li>Initial: 提交后初始状态</li>
<li>Purchasing: 点击 <strong>Create PO确认采购</strong> 后</li>
<li>Partial GR:</li>
<li>GR</li>
<li>Cancel: 取消该订单。</li>
</ul>
</li>
<li>PO Number</li>
<li>实际总花费 | Total: 采购人员填写该订单实际花费。</li>
<li>备注 | Remark</li>
<li>汇总金额 (auto): 汇总所列项目金额，原则上应与实际总花费一致。</li>
<li>入库明细数</li>
<li>采购明细数</li>
</ul>
<h4 id="关联表单-5" tabindex="-1"><a class="header-anchor" href="#关联表单-5"><span>关联表单</span></a></h4>
<ul>
<li>Purchase Item</li>
</ul>
<h4 id="按钮-5" tabindex="-1"><a class="header-anchor" href="#按钮-5"><span>按钮</span></a></h4>
<p>Single Data Source:</p>
<ul>
<li>
<p>Create PO确认采购:</p>
<ul>
<li>Action:
<ul>
<li>弹出窗口，采购人员填写 PO Number， 实际总花费 | Total</li>
<li>更新采购单及其采购明细的状态为Purchasing</li>
<li>以此次采购信息更新所关联的物料清单中的 <strong>Purchase Info.</strong></li>
</ul>
</li>
<li>Conditional: Status of Order <strong>Is one of</strong> Initial</li>
</ul>
</li>
<li>
<p>取消采购:</p>
<ul>
<li>Action: 将此采购单状态更改为Cancel</li>
<li>Conditional: Status of Order <strong>Is one of</strong> Initial</li>
</ul>
</li>
</ul>
<h4 id="业务规则-4" tabindex="-1"><a class="header-anchor" href="#业务规则-4"><span>业务规则</span></a></h4>
<ul>
<li>When Status of Order <strong>is</strong> Cancel
<ul>
<li>Read-only all fields</li>
</ul>
</li>
</ul>
<h2 id="change-log" tabindex="-1"><a class="header-anchor" href="#change-log"><span>Change Log</span></a></h2>
<h3 id="库存变动明细-stock-change-record" tabindex="-1"><a class="header-anchor" href="#库存变动明细-stock-change-record"><span>库存变动明细 | Stock Change Record</span></a></h3>
<h4 id="字段-6" tabindex="-1"><a class="header-anchor" href="#字段-6"><span>字段</span></a></h4>
<ul>
<li>Operator</li>
<li>Operate Date</li>
<li>Operation</li>
<li>变动前库存 | Number - Before</li>
<li>变动后库存 | Number - After</li>
<li>变动数量 | Number - Changed</li>
<li>库存单位 | Unit</li>
</ul>
<h4 id="关联表单-6" tabindex="-1"><a class="header-anchor" href="#关联表单-6"><span>关联表单</span></a></h4>
<ul>
<li>库存明细 | Inventory Details</li>
</ul>
<h3 id="入库单" tabindex="-1"><a class="header-anchor" href="#入库单"><span>入库单</span></a></h3>
<h4 id="字段-7" tabindex="-1"><a class="header-anchor" href="#字段-7"><span>字段</span></a></h4>
<ul>
<li>入库方式 | Stocking Method</li>
<li>Operator</li>
<li>Operate Date</li>
<li>入库数量 | Number
<ul>
<li>Limit numerical range: [0,Max]</li>
<li>采购单位 | Unit</li>
</ul>
</li>
<li>Batch Number | 批号</li>
<li>有效期至 | Expired Date</li>
<li>COA</li>
<li>MSDS</li>
</ul>
<h4 id="关联表单-7" tabindex="-1"><a class="header-anchor" href="#关联表单-7"><span>关联表单</span></a></h4>
<ul>
<li>采购明细 | Purchase Item</li>
<li>物料清单 | Material List</li>
<li>Storage Area List</li>
<li>库存明细 | Inventory Details</li>
</ul>
<h4 id="工作流-2" tabindex="-1"><a class="header-anchor" href="#工作流-2"><span>工作流</span></a></h4>
<h5 id="when-adding-new-records" tabindex="-1"><a class="header-anchor" href="#when-adding-new-records"><span>When adding new records:</span></a></h5>
<ul>
<li>当MSDS不为空，更新物料清单中的MSDS</li>
</ul>
<blockquote>
<p>（可能会出问题，若有人上传错误文件，则该条目下物料则使用错误文件）</p>
</blockquote>
<ul>
<li>
<p>若入库方式为合并入库:</p>
<ul>
<li>当Material Type <strong>is any of</strong> 甲类，管控，标准品，Consumable-key:
<ul>
<li>新建一条库存记录，call PBP - <strong>出入库记录</strong></li>
</ul>
</li>
<li>当Material Type <strong>is none of</strong> 甲类，管控，标准品,Consumable-key:
<ul>
<li>若不存在该物料:
<ul>
<li>新建一条库存记录，call PBP - <strong>出入库记录</strong></li>
</ul>
</li>
<li>若已存在该物料:
<ul>
<li>更新该物料批号，入库日期，库区库位，call PBP - <strong>出入库记录</strong></li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p>若入库方式为拆分入库:</p>
<ul>
<li>根据入库数量，创建n个相同的库存记录。call PBP - <strong>出入库记录</strong></li>
</ul>
</li>
<li>
<p>更新 Status of Goods 为 <strong>Stocked</strong></p>
</li>
</ul>
<h3 id="盘点单" tabindex="-1"><a class="header-anchor" href="#盘点单"><span>盘点单</span></a></h3>
<h4 id="字段-8" tabindex="-1"><a class="header-anchor" href="#字段-8"><span>字段</span></a></h4>
<ul>
<li>Operator</li>
<li>Operate Date</li>
<li>实际库存 | Number
<ul>
<li>Limit numerical range: [0,Max]</li>
</ul>
</li>
<li>领用单位 | Unit</li>
</ul>
<h4 id="关联表单-8" tabindex="-1"><a class="header-anchor" href="#关联表单-8"><span>关联表单</span></a></h4>
<ul>
<li>库存明细 | Inventory Details</li>
</ul>
<h4 id="工作流-3" tabindex="-1"><a class="header-anchor" href="#工作流-3"><span>工作流</span></a></h4>
<h5 id="when-adding-new-records-1" tabindex="-1"><a class="header-anchor" href="#when-adding-new-records-1"><span>When adding new records:</span></a></h5>
<ul>
<li>更新相关库存记录，call PBP - <strong>出入库记录</strong></li>
</ul>
<h3 id="领用单-general" tabindex="-1"><a class="header-anchor" href="#领用单-general"><span>领用单（General）</span></a></h3>
<h4 id="字段-9" tabindex="-1"><a class="header-anchor" href="#字段-9"><span>字段</span></a></h4>
<ul>
<li>领用量 | Number
<ul>
<li>Limit numerical range: [0,Max]</li>
</ul>
</li>
<li>领用单位 | Unit</li>
<li>领用人 | User</li>
<li>领用日期 | Usage Date</li>
</ul>
<h4 id="关联表单-9" tabindex="-1"><a class="header-anchor" href="#关联表单-9"><span>关联表单</span></a></h4>
<ul>
<li>库存明细 | Inventory Details</li>
</ul>
<h4 id="业务规则-5" tabindex="-1"><a class="header-anchor" href="#业务规则-5"><span>业务规则</span></a></h4>
<ul>
<li>When <strong>领用方式 | Use Type</strong> is <strong>单次领用 | Single Use</strong>
<ul>
<li>Show <strong>领用量 | Number</strong></li>
<li>Required <strong>领用量 | Number</strong></li>
</ul>
</li>
</ul>
<h4 id="工作流-4" tabindex="-1"><a class="header-anchor" href="#工作流-4"><span>工作流</span></a></h4>
<h5 id="when-adding-new-records-2" tabindex="-1"><a class="header-anchor" href="#when-adding-new-records-2"><span>When adding new records:</span></a></h5>
<ul>
<li>更新相关库存记录，call PBP - <strong>出入库记录</strong></li>
<li>当领用方式为单次领用时:
<ul>
<li>扣减库存为领用量，标记operation为<strong>单次领用</strong></li>
</ul>
</li>
<li>当领用方式为用后归还时，
<ul>
<li>扣减库存为0，标记operation为<strong>领用待归还</strong></li>
</ul>
</li>
</ul>
<h3 id="领用单-controlled" tabindex="-1"><a class="header-anchor" href="#领用单-controlled"><span>领用单 (Controlled)</span></a></h3>
<h4 id="字段-10" tabindex="-1"><a class="header-anchor" href="#字段-10"><span>字段</span></a></h4>
<ul>
<li>Title (auto)
<ul>
<li><strong>库存明细 | Inventory Details</strong>, <strong>申请人</strong></li>
</ul>
</li>
<li>申请日期</li>
<li>使用目的</li>
<li>用前称重</li>
<li>用后称重</li>
<li>实际使用量 (auto):
<ul>
<li>用后称重 - 用前称重</li>
</ul>
</li>
<li>申请人</li>
<li>审批人</li>
<li>申请人签字</li>
<li>审批人签字</li>
</ul>
<h4 id="关联表单-10" tabindex="-1"><a class="header-anchor" href="#关联表单-10"><span>关联表单</span></a></h4>
<ul>
<li>库存明细 | Inventory Details</li>
</ul>
<h4 id="工作流-5" tabindex="-1"><a class="header-anchor" href="#工作流-5"><span>工作流</span></a></h4>
<h5 id="when-adding-new-records-3" tabindex="-1"><a class="header-anchor" href="#when-adding-new-records-3"><span>When adding new records:</span></a></h5>
<ul>
<li>Action:
<ul>
<li>若Index包含 <strong>Caffeine</strong>
<ul>
<li>通知咖啡因审批人审批，审批需签名。</li>
</ul>
</li>
<li>其他情况
<ul>
<li>通知危化品审批人审批，审批需签名。</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="归还单" tabindex="-1"><a class="header-anchor" href="#归还单"><span>归还单</span></a></h3>
<h4 id="字段-11" tabindex="-1"><a class="header-anchor" href="#字段-11"><span>字段</span></a></h4>
<ul>
<li>领用量 | Number
<ul>
<li>Limit numerical range: [0,Max]</li>
</ul>
</li>
<li>库存单位 | Unit</li>
<li>归还员 | Returner</li>
<li>归还日期 | Return Date</li>
</ul>
<h4 id="关联表单-11" tabindex="-1"><a class="header-anchor" href="#关联表单-11"><span>关联表单</span></a></h4>
<ul>
<li>库存明细 | Inventory Details</li>
</ul>
<h4 id="工作流-6" tabindex="-1"><a class="header-anchor" href="#工作流-6"><span>工作流</span></a></h4>
<h5 id="when-adding-new-records-4" tabindex="-1"><a class="header-anchor" href="#when-adding-new-records-4"><span>When adding new records:</span></a></h5>
<ul>
<li>更新相关库存记录，call PBP - <strong>出入库记录</strong></li>
</ul>
<h2 id="self-made" tabindex="-1"><a class="header-anchor" href="#self-made"><span>Self-Made</span></a></h2>
<h3 id="self-made-phychem" tabindex="-1"><a class="header-anchor" href="#self-made-phychem"><span>Self-made - PhyChem</span></a></h3>
<h3 id="self-made-micro" tabindex="-1"><a class="header-anchor" href="#self-made-micro"><span>Self-Made - Micro</span></a></h3>
<h4 id="字段-12" tabindex="-1"><a class="header-anchor" href="#字段-12"><span>字段</span></a></h4>
<ul>
<li>Status of Self-Made:
<ul>
<li>可用的</li>
<li>已过期</li>
<li>已停用</li>
</ul>
</li>
<li>Name | 名称</li>
<li>Batch Number | 批号</li>
<li>数量 | Quantity</li>
<li>Package | 包装</li>
<li>Preparation Date</li>
<li>Expiration Date</li>
<li>灭菌后pH</li>
<li>灭菌条件</li>
<li>无菌培养:
<ul>
<li>合格</li>
<li>不合格</li>
</ul>
</li>
<li>HazardClass
<ul>
<li>General</li>
<li>Corrosive</li>
<li>Flammable</li>
<li>Toxic</li>
</ul>
</li>
<li>Prepared by (auto): 新建时当前用户</li>
<li>Signature</li>
<li>Remark</li>
</ul>
<h4 id="关联表单-12" tabindex="-1"><a class="header-anchor" href="#关联表单-12"><span>关联表单</span></a></h4>
<ul>
<li>Storage Area List</li>
<li>Preparation - Micro</li>
<li>Equipment</li>
</ul>
<h4 id="按钮-6" tabindex="-1"><a class="header-anchor" href="#按钮-6"><span>按钮</span></a></h4>
<ul>
<li>Disable: 将状态更新为已停用，只读所有字段。</li>
<li>Print</li>
<li>Reproduce:
<ul>
<li>Action:
<ul>
<li>复制当前Record及其子表，去除必要字段信息。</li>
</ul>
</li>
<li>Purpose:
<ul>
<li>为重复配置Self-Made提供便利。</li>
</ul>
</li>
</ul>
</li>
</ul>
<h4 id="业务规则-6" tabindex="-1"><a class="header-anchor" href="#业务规则-6"><span>业务规则</span></a></h4>
<ul>
<li>When Status of Self-Made <strong>Is one of</strong> 已停用，已过期:
<ul>
<li>Read-only all fields</li>
</ul>
</li>
</ul>
</div></template>


