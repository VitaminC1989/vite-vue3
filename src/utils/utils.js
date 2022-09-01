/**
 * 生成AVUE option.column数组
 */
export const generateAVUETmpl = () => {
  const str =
    "路线编码,公路名称,路幅,车道,检测年,病害类型,病害名称,开始桩号_千米,结束桩号_千米,长度_米,宽度_米,面积_平方米,所属管理中心,是否桥梁段,是否隧道段";
  const arr = str.split(",");

  let str2 = `
    /**
	* 高速公路编码
	*/
		@Excel(name = "路线编码")
		@ApiModelProperty(value = "高速公路编码")
		private String expresswayCode;
	/**
	* 高速公路简称
	*/
		@Excel(name = "公路名称")
		@ApiModelProperty(value = "高速公路简称")
		private String abbreviation;
	/**
	* 路幅
	*/
		@Excel(name = "路幅",replace = {"下行_1","上行_2"})
		@ApiModelProperty(value = "路幅")
		private String breadth;
	/**
	* 车道
	*/
		@Excel(name = "车道")
		@ApiModelProperty(value = "车道")
		private String roadway;
	/**
	* 检测年
	*/
		@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd")
		@Excel(name = "检测年",format = "yyyy-MM-dd")
		@ApiModelProperty(value = "检测年")
		private Date checkYear;
	/**
	* 病害类型
	*/
		@Excel(name = "病害类型")
		@ApiModelProperty(value = "病害类型")
		private String diseaseType;
	/**
	* 病害名称
	*/
		@Excel(name = "病害名称")
		@ApiModelProperty(value = "病害名称")
		private String diseaseName;
	/**
	* 起点桩号
	*/
		@Excel(name = "开始桩号_千米")
		@ApiModelProperty(value = "起点桩号")
		private String startPileString;
	/**
	* 起点桩号
	*/
		@ApiModelProperty(value = "起点桩号")
		private Float startPile;
	/**
	* 起点桩号单位
	*/
		@ApiModelProperty(value = "起点桩号单位")
		private String startUnit;
	/**
	* 终点桩号
	*/
		@Excel(name = "结束桩号_千米")
		@ApiModelProperty(value = "终点桩号")
		private String endPileString;
	/**
	* 终点桩号
	*/
		@ApiModelProperty(value = "终点桩号")
		private Float endPile;
	/**
	* 终点桩号单位
	*/
		@ApiModelProperty(value = "终点桩号单位")
		private String endUnit;
	/**
	* 中心桩号
	*/
		@ApiModelProperty(value = "中心桩号")
		private Float centerPile;
	/**
	* 长度
	*/
		@Excel(name = "长度_米")
		@ApiModelProperty(value = "长度")
		private Float diseaseLength;
	/**
	* 宽度
	*/
		@Excel(name = "宽度_米")
		@ApiModelProperty(value = "宽度")
		private Float diseaseWidth;
	/**
	* 平方米
	*/
		@Excel(name = "面积_平方米")
		@ApiModelProperty(value = "平方米")
		private Float squareMeters;
	/**
	* 病害位置
	*/
		@ApiModelProperty(value = "病害位置")
		private String diseaseLocation;
	/**
	 * 数据来源
	 */
		@ApiModelProperty(value = "数据来源")
		private String dataSource;
	/**
	 * 所属组织
	 */
		@Excel(name = "所属组织")
		@ApiModelProperty(value = "所属组织")
		private Long belongDept;
	/**
	 * 严重程度
	 */
	@ApiModelProperty(value = "严重程度")
	private String severity;

	/**
	 * 检测id
	 */
	@ApiModelProperty(value = "检测id")
	private Long regularEvaluateId;`;

  str2 = str2.replace(/\n/g, "").replace(/\t/g, "");
  const arr2 = str2.split("/**");
  arr2.shift();

  // console.log(arr2);
  const template = [];
  arr.forEach((field) => {
    const targetIndex = arr2.findIndex((item) => item.includes(field));
    if (targetIndex === -1) return;

    const target = arr2[targetIndex];
    const splited = target.split(" ");
    const propName = splited[splited.length - 1].replace(";", "");

    console.log(
      "targetIndex",
      field,
      targetIndex,
      // arr2[targetIndex],
      // target.split(" "),
      propName
    );

    template.push({
      label: field,
      prop: propName,
    });
  });

  console.log(template);
};
