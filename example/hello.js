'use strict';
var $linkingInfo = Object.freeze({
  "esVersion": 6,
  "assumingES6": true,
  "productionMode": true,
  "linkerVersion": "1.14.0",
  "fileLevelThis": this
});
var $getOwnPropertyDescriptors = (Object.getOwnPropertyDescriptors || (() => {
  var ownKeysFun;
  if ((((typeof Reflect) !== "undefined") && Reflect.ownKeys)) {
    ownKeysFun = Reflect.ownKeys
  } else {
    var getOwnPropertySymbols = (Object.getOwnPropertySymbols || ((o) => []));
    ownKeysFun = ((o) => Object.getOwnPropertyNames(o).concat(getOwnPropertySymbols(o)))
  };
  return ((o) => {
    var ownKeys = ownKeysFun(o);
    var descriptors = {};
    var len = (ownKeys.length | 0);
    var i = 0;
    while ((i !== len)) {
      var key = ownKeys[i];
      Object.defineProperty(descriptors, key, {
        "configurable": true,
        "enumerable": true,
        "writable": true,
        "value": Object.getOwnPropertyDescriptor(o, key)
      });
      i = ((i + 1) | 0)
    };
    return descriptors
  })
})());
var $L0;
function $propertyName(arg0) {
  for (var prop in arg0) {
    return prop
  }
}
function $Char(c) {
  this.c = c
}
$Char.prototype.toString = (function() {
  return String.fromCharCode(this.c)
});
function $noIsInstance(arg0) {
  throw new TypeError("Cannot call isInstance() on a Class representing a JS trait/object")
}
function $newArrayObject(arg0, arg1) {
  return $newArrayObjectInternal(arg0, arg1, 0)
}
function $newArrayObjectInternal(arg0, arg1, arg2) {
  var result = new arg0.constr(arg1[arg2]);
  if ((arg2 < (arg1.length - 1))) {
    var subArrayClassData = arg0.componentData;
    var subLengthIndex = (arg2 + 1);
    var underlying = result.u;
    for (var i = 0; (i < underlying.length); (i++)) {
      underlying[i] = $newArrayObjectInternal(subArrayClassData, arg1, subLengthIndex)
    }
  };
  return result
}
function $objectClone(arg0) {
  return Object.create(Object.getPrototypeOf(arg0), $getOwnPropertyDescriptors(arg0))
}
function $objectOrArrayClone(arg0) {
  return (arg0.$classData.isArrayClass ? arg0.clone__O() : $objectClone(arg0))
}
function $objectGetClass(arg0) {
  switch ((typeof arg0)) {
    case "string": {
      return $d_T.getClassOf()
    }
    case "number": {
      if ($isInt(arg0)) {
        if ((((arg0 << 24) >> 24) === arg0)) {
          return $d_jl_Byte.getClassOf()
        } else if ((((arg0 << 16) >> 16) === arg0)) {
          return $d_jl_Short.getClassOf()
        } else {
          return $d_jl_Integer.getClassOf()
        }
      } else if ($isFloat(arg0)) {
        return $d_jl_Float.getClassOf()
      } else {
        return $d_jl_Double.getClassOf()
      }
    }
    case "boolean": {
      return $d_jl_Boolean.getClassOf()
    }
    case "undefined": {
      return $d_jl_Void.getClassOf()
    }
    default: {
      if ((arg0 === null)) {
        return arg0.getClass__jl_Class()
      } else if ((arg0 instanceof $c_RTLong)) {
        return $d_jl_Long.getClassOf()
      } else if ((arg0 instanceof $Char)) {
        return $d_jl_Character.getClassOf()
      } else if ((!(!(arg0 && arg0.$classData)))) {
        return arg0.$classData.getClassOf()
      } else {
        return null
      }
    }
  }
}
function $objectClassName(arg0) {
  switch ((typeof arg0)) {
    case "string": {
      return "java.lang.String"
    }
    case "number": {
      if ($isInt(arg0)) {
        if ((((arg0 << 24) >> 24) === arg0)) {
          return "java.lang.Byte"
        } else if ((((arg0 << 16) >> 16) === arg0)) {
          return "java.lang.Short"
        } else {
          return "java.lang.Integer"
        }
      } else if ($isFloat(arg0)) {
        return "java.lang.Float"
      } else {
        return "java.lang.Double"
      }
    }
    case "boolean": {
      return "java.lang.Boolean"
    }
    case "undefined": {
      return "java.lang.Void"
    }
    default: {
      if ((arg0 === null)) {
        return arg0.getClass__jl_Class()
      } else if ((arg0 instanceof $c_RTLong)) {
        return "java.lang.Long"
      } else if ((arg0 instanceof $Char)) {
        return "java.lang.Character"
      } else if ((!(!(arg0 && arg0.$classData)))) {
        return arg0.$classData.name
      } else {
        return null.getName__T()
      }
    }
  }
}
function $dp_booleanValue__Z(instance) {
  if (((typeof instance) === "boolean")) {
    return $f_jl_Boolean__booleanValue__Z(instance)
  } else {
    return instance.booleanValue__Z()
  }
}
function $dp_byteValue__B(instance) {
  if ($isByte(instance)) {
    return $f_jl_Byte__byteValue__B(instance)
  } else {
    return instance.byteValue__B()
  }
}
function $dp_charAt__I__C(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__charAt__I__C(instance, x0)
  } else {
    return instance.charAt__I__C(x0)
  }
}
function $dp_charValue__C(instance) {
  if ((instance instanceof $Char)) {
    return $f_jl_Character__charValue__C($uC(instance))
  } else {
    return instance.charValue__C()
  }
}
function $dp_doubleValue__D(instance) {
  if (((typeof instance) === "number")) {
    return $f_jl_Double__doubleValue__D(instance)
  } else {
    return instance.doubleValue__D()
  }
}
function $dp_floatValue__F(instance) {
  if ($isFloat(instance)) {
    return $f_jl_Float__floatValue__F(instance)
  } else {
    return instance.floatValue__F()
  }
}
function $dp_getClass__jl_Class(instance) {
  if (((!(!(instance && instance.$classData))) || (instance === null))) {
    return instance.getClass__jl_Class()
  } else {
    return $c_O.prototype.getClass__jl_Class.call(instance)
  }
}
function $dp_hashCode__I(instance) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__hashCode__I(instance)
    }
    case "number": {
      return $f_jl_Double__hashCode__I(instance)
    }
    case "boolean": {
      return $f_jl_Boolean__hashCode__I(instance)
    }
    case "undefined": {
      return $f_jl_Void__hashCode__I(instance)
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.hashCode__I()
      } else if ((instance instanceof $c_RTLong)) {
        return $f_jl_Long__hashCode__I(instance)
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I($uC(instance))
      } else {
        return $c_O.prototype.hashCode__I.call(instance)
      }
    }
  }
}
function $dp_intValue__I(instance) {
  if ($isInt(instance)) {
    return $f_jl_Integer__intValue__I(instance)
  } else {
    return instance.intValue__I()
  }
}
function $dp_java$lang$_String$$thisString__T(instance) {
  if (((typeof instance) === "string")) {
    return $f_T__java$lang$_String$$thisString__T(instance)
  } else {
    return instance.java$lang$_String$$thisString__T()
  }
}
function $dp_length__I(instance) {
  if (((typeof instance) === "string")) {
    return $f_T__length__I(instance)
  } else {
    return instance.length__I()
  }
}
function $dp_longValue__J(instance) {
  if ((instance instanceof $c_RTLong)) {
    return $f_jl_Long__longValue__J(instance)
  } else {
    return instance.longValue__J()
  }
}
function $dp_shortValue__S(instance) {
  if ($isShort(instance)) {
    return $f_jl_Short__shortValue__S(instance)
  } else {
    return instance.shortValue__S()
  }
}
function $dp_toString__T(instance) {
  return ((instance === (void 0)) ? "undefined" : instance.toString())
}
function $intDiv(arg0, arg1) {
  if ((arg1 === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero")
  } else {
    return ((arg0 / arg1) | 0)
  }
}
function $intMod(arg0, arg1) {
  if ((arg1 === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero")
  } else {
    return ((arg0 % arg1) | 0)
  }
}
function $doubleToInt(arg0) {
  return ((arg0 > 2147483647) ? 2147483647 : ((arg0 < (-2147483648)) ? (-2147483648) : (arg0 | 0)))
}
function $resolveSuperRef(arg0, arg1) {
  var getPrototypeOf = Object.getPrototyeOf;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var superProto = arg0.prototype;
  while ((superProto !== null)) {
    var desc = getOwnPropertyDescriptor(superProto, arg1);
    if ((desc !== (void 0))) {
      return desc
    };
    superProto = getPrototypeOf(superProto)
  }
}
function $superGet(arg0, arg1, arg2) {
  var desc = $resolveSuperRef(arg0, arg2);
  if ((desc !== (void 0))) {
    var getter = desc.get;
    return ((getter !== (void 0)) ? getter.call(arg1) : getter.value)
  }
}
function $superSet(arg0, arg1, arg2, arg3) {
  var desc = $resolveSuperRef(arg0, arg2);
  if ((desc !== (void 0))) {
    var setter = desc.set;
    if ((setter !== (void 0))) {
      setter.call(arg1, arg3);
      return (void 0)
    }
  };
  throw new TypeError((("super has no setter '" + arg2) + "'."))
}
function $arraycopyGeneric(arg0, arg1, arg2, arg3, arg4) {
  if ((((arg0 !== arg2) || (arg3 < arg1)) || (((arg1 + arg4) | 0) < arg3))) {
    for (var i = 0; (i < arg4); i = ((i + 1) | 0)) {
      arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)]
    }
  } else {
    for (var i = ((arg4 - 1) | 0); (i >= 0); i = ((i - 1) | 0)) {
      arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)]
    }
  }
}
var $lastIDHash = 0;
var $idHashCodeMap = new WeakMap();
function $systemIdentityHashCode(obj) {
  switch ((typeof obj)) {
    case "string": {
      return $f_T__hashCode__I(obj)
    }
    case "number": {
      return $f_jl_Double__hashCode__I(obj)
    }
    case "bigint": {
      var biHash = 0;
      if ((obj < BigInt(0))) {
        obj = (~obj)
      };
      while ((obj !== BigInt(0))) {
        biHash = (biHash ^ Number(BigInt.asIntN(32, obj)));
        obj = (obj >> BigInt(32))
      };
      return biHash
    }
    case "boolean": {
      return (obj ? 1231 : 1237)
    }
    case "undefined": {
      return 0
    }
    case "symbol": {
      var description = obj.description;
      return ((description === (void 0)) ? 0 : $f_T__hashCode__I(description))
    }
    default: {
      if ((obj === null)) {
        return 0
      } else {
        var hash = $idHashCodeMap.get(obj);
        if ((hash === (void 0))) {
          hash = (($lastIDHash + 1) | 0);
          $lastIDHash = hash;
          $idHashCodeMap.set(obj, hash)
        };
        return hash
      }
    }
  }
}
function $isByte(arg0) {
  return ((((typeof arg0) === "number") && (((arg0 << 24) >> 24) === arg0)) && ((1 / arg0) !== (1 / (-0))))
}
function $isShort(arg0) {
  return ((((typeof arg0) === "number") && (((arg0 << 16) >> 16) === arg0)) && ((1 / arg0) !== (1 / (-0))))
}
function $isInt(arg0) {
  return ((((typeof arg0) === "number") && ((arg0 | 0) === arg0)) && ((1 / arg0) !== (1 / (-0))))
}
function $isFloat(arg0) {
  return (((typeof arg0) === "number") && ((arg0 !== arg0) || (Math.fround(arg0) === arg0)))
}
function $bC(arg0) {
  return new $Char(arg0)
}
var $bC0 = $bC(0);
function $uC(arg0) {
  return ((arg0 === null) ? 0 : arg0.c)
}
function $uJ(arg0) {
  return ((arg0 === null) ? $L0 : arg0)
}
function $ct_O__($thiz) {
  return $thiz
}
/** @constructor */
function $c_O() {
  /*<skip>*/
}
$c_O.prototype.constructor = $c_O;
/** @constructor */
function $h_O() {
  /*<skip>*/
}
$h_O.prototype = $c_O.prototype;
$c_O.prototype.getClass__jl_Class = (function() {
  return $objectGetClass(this)
});
$c_O.prototype.hashCode__I = (function() {
  return $systemIdentityHashCode(this)
});
$c_O.prototype.toString__T = (function() {
  return ((this.getClass__jl_Class().getName__T() + "@") + $m_jl_Integer$().toHexString__I__T(this.hashCode__I()))
});
$c_O.prototype.toString = (function() {
  return this.toString__T()
});
function $ac_O(arg) {
  if (((typeof arg) === "number")) {
    this.u = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.u[i] = null
    }
  } else {
    this.u = arg
  }
}
$ac_O.prototype = new $h_O();
$ac_O.prototype.constructor = $ac_O;
$ac_O.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length)
});
$ac_O.prototype.clone__O = (function() {
  return new $ac_O(this.u.slice())
});
function $ah_O() {
  /*<skip>*/
}
$ah_O.prototype = $ac_O.prototype;
function $ac_Z(arg) {
  if (((typeof arg) === "number")) {
    this.u = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.u[i] = false
    }
  } else {
    this.u = arg
  }
}
$ac_Z.prototype = new $h_O();
$ac_Z.prototype.constructor = $ac_Z;
$ac_Z.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length)
});
$ac_Z.prototype.clone__O = (function() {
  return new $ac_Z(this.u.slice())
});
function $ac_C(arg) {
  if (((typeof arg) === "number")) {
    this.u = new Uint16Array(arg)
  } else {
    this.u = arg
  }
}
$ac_C.prototype = new $h_O();
$ac_C.prototype.constructor = $ac_C;
$ac_C.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos)
});
$ac_C.prototype.clone__O = (function() {
  return new $ac_C(this.u.slice())
});
function $ac_B(arg) {
  if (((typeof arg) === "number")) {
    this.u = new Int8Array(arg)
  } else {
    this.u = arg
  }
}
$ac_B.prototype = new $h_O();
$ac_B.prototype.constructor = $ac_B;
$ac_B.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos)
});
$ac_B.prototype.clone__O = (function() {
  return new $ac_B(this.u.slice())
});
function $ac_S(arg) {
  if (((typeof arg) === "number")) {
    this.u = new Int16Array(arg)
  } else {
    this.u = arg
  }
}
$ac_S.prototype = new $h_O();
$ac_S.prototype.constructor = $ac_S;
$ac_S.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos)
});
$ac_S.prototype.clone__O = (function() {
  return new $ac_S(this.u.slice())
});
function $ac_I(arg) {
  if (((typeof arg) === "number")) {
    this.u = new Int32Array(arg)
  } else {
    this.u = arg
  }
}
$ac_I.prototype = new $h_O();
$ac_I.prototype.constructor = $ac_I;
$ac_I.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos)
});
$ac_I.prototype.clone__O = (function() {
  return new $ac_I(this.u.slice())
});
function $ac_J(arg) {
  if (((typeof arg) === "number")) {
    this.u = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.u[i] = $L0
    }
  } else {
    this.u = arg
  }
}
$ac_J.prototype = new $h_O();
$ac_J.prototype.constructor = $ac_J;
$ac_J.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length)
});
$ac_J.prototype.clone__O = (function() {
  return new $ac_J(this.u.slice())
});
function $ac_F(arg) {
  if (((typeof arg) === "number")) {
    this.u = new Float32Array(arg)
  } else {
    this.u = arg
  }
}
$ac_F.prototype = new $h_O();
$ac_F.prototype.constructor = $ac_F;
$ac_F.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos)
});
$ac_F.prototype.clone__O = (function() {
  return new $ac_F(this.u.slice())
});
function $ac_D(arg) {
  if (((typeof arg) === "number")) {
    this.u = new Float64Array(arg)
  } else {
    this.u = arg
  }
}
$ac_D.prototype = new $h_O();
$ac_D.prototype.constructor = $ac_D;
$ac_D.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos)
});
$ac_D.prototype.clone__O = (function() {
  return new $ac_D(this.u.slice())
});
function $TypeData() {
  this.constr = (void 0);
  this.ancestors = null;
  this.componentData = null;
  this.arrayBase = null;
  this.arrayDepth = 0;
  this.zero = null;
  this.arrayEncodedName = "";
  this._classOf = (void 0);
  this._arrayOf = (void 0);
  this.isAssignableFromFun = (void 0);
  this.wrapArray = (void 0);
  this.isJSType = false;
  this.name = "";
  this.isPrimitive = false;
  this.isInterface = false;
  this.isArrayClass = false;
  this.isInstance = (void 0)
}
$TypeData.prototype.initPrim = (function(zero, arrayEncodedName, displayName, arrayClass, typedArrayClass) {
  this.ancestors = {};
  this.zero = zero;
  this.arrayEncodedName = arrayEncodedName;
  var self = this;
  this.isAssignableFromFun = ((that) => (that === self));
  this.name = displayName;
  this.isPrimitive = true;
  this.isInstance = ((obj) => false);
  if ((arrayClass !== (void 0))) {
    this._arrayOf = new $TypeData().initSpecializedArray(this, arrayClass, typedArrayClass)
  };
  return this
});
$TypeData.prototype.initClass = (function(internalNameObj, isInterface, fullName, ancestors, isJSType, parentData, isInstance) {
  var internalName = $propertyName(internalNameObj);
  this.ancestors = ancestors;
  this.arrayEncodedName = (("L" + fullName) + ";");
  this.isAssignableFromFun = ((that) => (!(!that.ancestors[internalName])));
  this.isJSType = (!(!isJSType));
  this.name = fullName;
  this.isInterface = isInterface;
  this.isInstance = (isInstance || ((obj) => (!(!((obj && obj.$classData) && obj.$classData.ancestors[internalName])))));
  return this
});
$TypeData.prototype.initSpecializedArray = (function(componentData, arrayClass, typedArrayClass, isAssignableFromFun) {
  arrayClass.prototype.$classData = this;
  var name = ("[" + componentData.arrayEncodedName);
  this.constr = arrayClass;
  this.ancestors = {
    O: 1,
    jl_Cloneable: 1,
    Ljava_io_Serializable: 1
  };
  this.componentData = componentData;
  this.arrayBase = componentData;
  this.arrayDepth = 1;
  this.arrayEncodedName = name;
  this.name = name;
  this.isArrayClass = true;
  var self = this;
  this.isAssignableFromFun = (isAssignableFromFun || ((that) => (self === that)));
  this.wrapArray = (typedArrayClass ? ((array) => new arrayClass(new typedArrayClass(array))) : ((array) => new arrayClass(array)));
  this.isInstance = ((obj) => (obj instanceof arrayClass));
  return this
});
$TypeData.prototype.initArray = (function(componentData) {
  function ArrayClass(arg) {
    if (((typeof arg) === "number")) {
      this.u = new Array(arg);
      for (var i = 0; (i < arg); (i++)) {
        this.u[i] = null
      }
    } else {
      this.u = arg
    }
  }
  ArrayClass.prototype = new $ah_O();
  ArrayClass.prototype.constructor = ArrayClass;
  ArrayClass.prototype.copyTo = (function(srcPos, dest, destPos, length) {
    $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length)
  });
  ArrayClass.prototype.clone__O = (function() {
    return new ArrayClass(this.u.slice())
  });
  var arrayBase = (componentData.arrayBase || componentData);
  var arrayDepth = (componentData.arrayDepth + 1);
  ArrayClass.prototype.$classData = this;
  var name = ("[" + componentData.arrayEncodedName);
  this.constr = ArrayClass;
  this.ancestors = {
    O: 1,
    jl_Cloneable: 1,
    Ljava_io_Serializable: 1
  };
  this.componentData = componentData;
  this.arrayBase = arrayBase;
  this.arrayDepth = arrayDepth;
  this.arrayEncodedName = name;
  this.name = name;
  this.isArrayClass = true;
  var isAssignableFromFun = ((that) => {
    var thatDepth = that.arrayDepth;
    return ((thatDepth === arrayDepth) ? arrayBase.isAssignableFromFun(that.arrayBase) : ((thatDepth > arrayDepth) && (arrayBase === $d_O)))
  });
  this.isAssignableFromFun = isAssignableFromFun;
  this.wrapArray = ((array) => new ArrayClass(array));
  var self = this;
  this.isInstance = ((obj) => {
    var data = (obj && obj.$classData);
    return ((!(!data)) && ((data === self) || isAssignableFromFun(data)))
  });
  return this
});
$TypeData.prototype.getArrayOf = (function() {
  if ((!this._arrayOf)) {
    this._arrayOf = new $TypeData().initArray(this)
  };
  return this._arrayOf
});
$TypeData.prototype.getClassOf = (function() {
  if ((!this._classOf)) {
    this._classOf = new $c_jl_Class(this)
  };
  return this._classOf
});
$TypeData.prototype.isAssignableFrom = (function(that) {
  return ((this === that) || this.isAssignableFromFun(that))
});
$TypeData.prototype.checkCast = (function(obj) {
  /*<skip>*/
});
$TypeData.prototype.getSuperclass = (function() {
  return (this.parentData ? this.parentData.getClassOf() : null)
});
$TypeData.prototype.getComponentType = (function() {
  return (this.componentData ? this.componentData.getClassOf() : null)
});
$TypeData.prototype.newArrayOfThisClass = (function(lengths) {
  var arrayClassData = this;
  for (var i = 0; (i < lengths.length); (i++)) {
    arrayClassData = arrayClassData.getArrayOf()
  };
  return $newArrayObject(arrayClassData, lengths)
});
function $isArrayOf_O(obj, depth) {
  var data = (obj && obj.$classData);
  if ((!data)) {
    return false
  } else {
    var arrayDepth = data.arrayDepth;
    return ((arrayDepth === depth) ? (!data.arrayBase.isPrimitive) : (arrayDepth > depth))
  }
}
function $isArrayOf_Z(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_Z))))
}
function $isArrayOf_C(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_C))))
}
function $isArrayOf_B(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_B))))
}
function $isArrayOf_S(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_S))))
}
function $isArrayOf_I(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_I))))
}
function $isArrayOf_J(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_J))))
}
function $isArrayOf_F(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_F))))
}
function $isArrayOf_D(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_D))))
}
var $d_O = new $TypeData();
$d_O.ancestors = {
  O: 1
};
$d_O.arrayEncodedName = "Ljava.lang.Object;";
$d_O.isAssignableFromFun = ((that) => (!that.isPrimitive));
$d_O.name = "java.lang.Object";
$d_O.isInstance = ((obj) => (obj !== null));
$d_O._arrayOf = new $TypeData().initSpecializedArray($d_O, $ac_O, (void 0), ((that) => {
  var thatDepth = that.arrayDepth;
  return ((thatDepth === 1) ? (!that.arrayBase.isPrimitive) : (thatDepth > 1))
}));
$c_O.prototype.$classData = $d_O;
var $d_V = new $TypeData().initPrim((void 0), "V", "void", (void 0), (void 0));
var $d_Z = new $TypeData().initPrim(false, "Z", "boolean", $ac_Z, (void 0));
var $d_C = new $TypeData().initPrim(0, "C", "char", $ac_C, Uint16Array);
var $d_B = new $TypeData().initPrim(0, "B", "byte", $ac_B, Int8Array);
var $d_S = new $TypeData().initPrim(0, "S", "short", $ac_S, Int16Array);
var $d_I = new $TypeData().initPrim(0, "I", "int", $ac_I, Int32Array);
var $d_J = new $TypeData().initPrim(null, "J", "long", $ac_J, (void 0));
var $d_F = new $TypeData().initPrim(0.0, "F", "float", $ac_F, Float32Array);
var $d_D = new $TypeData().initPrim(0.0, "D", "double", $ac_D, Float64Array);
/** @constructor */
function $c_Lexample_Hello$() {
  $ct_O__(this);
  $n_Lexample_Hello$ = this
}
$c_Lexample_Hello$.prototype = new $h_O();
$c_Lexample_Hello$.prototype.constructor = $c_Lexample_Hello$;
/** @constructor */
function $h_Lexample_Hello$() {
  /*<skip>*/
}
$h_Lexample_Hello$.prototype = $c_Lexample_Hello$.prototype;
$c_Lexample_Hello$.prototype.hello__T__T = (function(name) {
  return (("Hello, " + name) + "!")
});
$c_Lexample_Hello$.prototype.$js$exported$meth$hello__T__O = (function(name) {
  return this.hello__T__T(name)
});
$c_Lexample_Hello$.prototype.hello = (function(arg) {
  var prep0 = arg;
  return this.$js$exported$meth$hello__T__O(prep0)
});
var $d_Lexample_Hello$ = new $TypeData().initClass({
  Lexample_Hello$: 0
}, false, "example.Hello$", {
  Lexample_Hello$: 1,
  O: 1
});
$c_Lexample_Hello$.prototype.$classData = $d_Lexample_Hello$;
var $n_Lexample_Hello$;
function $m_Lexample_Hello$() {
  if ((!$n_Lexample_Hello$)) {
    $n_Lexample_Hello$ = new $c_Lexample_Hello$()
  };
  return $n_Lexample_Hello$
}
function $p_jl_FloatingPointBits$__areTypedArraysSupported__Z($thiz) {
  return ((($linkingInfo.esVersion | 0) >= 6) || $thiz.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$_areTypedArraysSupported)
}
function $p_jl_FloatingPointBits$__arrayBuffer__O($thiz) {
  return $thiz.jl_FloatingPointBits$__f_arrayBuffer
}
function $p_jl_FloatingPointBits$__int32Array__O($thiz) {
  return $thiz.jl_FloatingPointBits$__f_int32Array
}
function $p_jl_FloatingPointBits$__float64Array__O($thiz) {
  return $thiz.jl_FloatingPointBits$__f_float64Array
}
function $p_jl_FloatingPointBits$__areTypedArraysBigEndian__Z($thiz) {
  return $thiz.jl_FloatingPointBits$__f_areTypedArraysBigEndian
}
function $p_jl_FloatingPointBits$__makePowsOf2__I__D__O($thiz, len, minNormal) {
  var r = new Array(len);
  r[0] = 0.0;
  var i = 1;
  var next = minNormal;
  while ((i !== ((len - 1) | 0))) {
    r[i] = next;
    i = ((i + 1) | 0);
    next = (next * 2)
  };
  r[((len - 1) | 0)] = Infinity;
  return r
}
function $p_jl_FloatingPointBits$__doubleHashCodePolyfill__D__I($thiz, value) {
  return $m_jl_Long$().hashCode__J__I($p_jl_FloatingPointBits$__doubleToLongBitsPolyfillInline__D__J($thiz, value))
}
function $p_jl_FloatingPointBits$__doubleToLongBitsPolyfillInline__D__J($thiz, value) {
  var ebits = 11;
  var fbits = 52;
  var hifbits = ((fbits - 32) | 0);
  var sign = (((value < 0.0) || ((value === 0.0) && ((1.0 / value) < 0.0))) ? (-1) : 1);
  var s = (sign & (-2147483648));
  var av = (sign * value);
  var powsOf2 = $thiz.java$lang$FloatingPointBits$$doublePowsOf2__O();
  var e = $thiz.java$lang$FloatingPointBits$$encodeIEEE754Exponent__I__O__D__I(ebits, powsOf2, av);
  var f = $thiz.java$lang$FloatingPointBits$$encodeIEEE754MantissaBits__I__I__O__D__D__I__D(ebits, fbits, powsOf2, 4.9E-324, av, e);
  var hi = ((s | (e << hifbits)) | $thiz.java$lang$FloatingPointBits$$rawToInt__D__I((f / new $c_RTLong(0, 1).toDouble__D())));
  var lo = $thiz.java$lang$FloatingPointBits$$rawToInt__D__I(f);
  return $m_RTLong$().fromInt__I__RTLong(hi).$less$less__I__RTLong(32).$bar__RTLong__RTLong($m_RTLong$().fromInt__I__RTLong(lo).$amp__RTLong__RTLong(new $c_RTLong((-1), 0)))
}
/** @constructor */
function $c_jl_FloatingPointBits$() {
  this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$_areTypedArraysSupported = false;
  this.jl_FloatingPointBits$__f_arrayBuffer = null;
  this.jl_FloatingPointBits$__f_int32Array = null;
  this.jl_FloatingPointBits$__f_float32Array = null;
  this.jl_FloatingPointBits$__f_float64Array = null;
  this.jl_FloatingPointBits$__f_areTypedArraysBigEndian = false;
  this.jl_FloatingPointBits$__f_highOffset = 0;
  this.jl_FloatingPointBits$__f_lowOffset = 0;
  this.jl_FloatingPointBits$__f_floatPowsOf2 = null;
  this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$doublePowsOf2 = null;
  $ct_O__(this);
  $n_jl_FloatingPointBits$ = this;
  this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$_areTypedArraysSupported = ((($linkingInfo.esVersion | 0) >= 6) || ((((!Object.is((typeof ArrayBuffer), "undefined")) && (!Object.is((typeof Int32Array), "undefined"))) && (!Object.is((typeof Float32Array), "undefined"))) && (!Object.is((typeof Float64Array), "undefined"))));
  this.jl_FloatingPointBits$__f_arrayBuffer = ($p_jl_FloatingPointBits$__areTypedArraysSupported__Z(this) ? new ArrayBuffer(8) : null);
  this.jl_FloatingPointBits$__f_int32Array = ($p_jl_FloatingPointBits$__areTypedArraysSupported__Z(this) ? new Int32Array($p_jl_FloatingPointBits$__arrayBuffer__O(this), 0, 2) : null);
  this.jl_FloatingPointBits$__f_float32Array = ($p_jl_FloatingPointBits$__areTypedArraysSupported__Z(this) ? new Float32Array($p_jl_FloatingPointBits$__arrayBuffer__O(this), 0, 2) : null);
  this.jl_FloatingPointBits$__f_float64Array = ($p_jl_FloatingPointBits$__areTypedArraysSupported__Z(this) ? new Float64Array($p_jl_FloatingPointBits$__arrayBuffer__O(this), 0, 1) : null);
  if ($p_jl_FloatingPointBits$__areTypedArraysSupported__Z(this)) {
    $p_jl_FloatingPointBits$__int32Array__O(this)[0] = 16909060;
    var $$x1 = ((new Int8Array($p_jl_FloatingPointBits$__arrayBuffer__O(this), 0, 8)[0] | 0) === 1)
  } else {
    var $$x1 = true
  };
  this.jl_FloatingPointBits$__f_areTypedArraysBigEndian = $$x1;
  this.jl_FloatingPointBits$__f_highOffset = ($p_jl_FloatingPointBits$__areTypedArraysBigEndian__Z(this) ? 0 : 1);
  this.jl_FloatingPointBits$__f_lowOffset = ($p_jl_FloatingPointBits$__areTypedArraysBigEndian__Z(this) ? 1 : 0);
  this.jl_FloatingPointBits$__f_floatPowsOf2 = ($p_jl_FloatingPointBits$__areTypedArraysSupported__Z(this) ? null : $p_jl_FloatingPointBits$__makePowsOf2__I__D__O(this, 256, 1.1754943508222875E-38));
  this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$doublePowsOf2 = ($p_jl_FloatingPointBits$__areTypedArraysSupported__Z(this) ? null : $p_jl_FloatingPointBits$__makePowsOf2__I__D__O(this, 2048, 2.2250738585072014E-308))
}
$c_jl_FloatingPointBits$.prototype = new $h_O();
$c_jl_FloatingPointBits$.prototype.constructor = $c_jl_FloatingPointBits$;
/** @constructor */
function $h_jl_FloatingPointBits$() {
  /*<skip>*/
}
$h_jl_FloatingPointBits$.prototype = $c_jl_FloatingPointBits$.prototype;
$c_jl_FloatingPointBits$.prototype.java$lang$FloatingPointBits$$doublePowsOf2__O = (function() {
  return this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$doublePowsOf2
});
$c_jl_FloatingPointBits$.prototype.numberHashCode__D__I = (function(value) {
  var iv = this.java$lang$FloatingPointBits$$rawToInt__D__I(value);
  if (((iv === value) && ((1.0 / value) !== (-Infinity)))) {
    return iv
  } else if ($p_jl_FloatingPointBits$__areTypedArraysSupported__Z(this)) {
    $p_jl_FloatingPointBits$__float64Array__O(this)[0] = value;
    return (($p_jl_FloatingPointBits$__int32Array__O(this)[0] | 0) ^ ($p_jl_FloatingPointBits$__int32Array__O(this)[1] | 0))
  } else {
    return $p_jl_FloatingPointBits$__doubleHashCodePolyfill__D__I(this, value)
  }
});
$c_jl_FloatingPointBits$.prototype.java$lang$FloatingPointBits$$encodeIEEE754Exponent__I__O__D__I = (function(ebits, powsOf2, av) {
  var eMin = 0;
  var eMax = (1 << ebits);
  while ((((eMin + 1) | 0) < eMax)) {
    var e = (((eMin + eMax) | 0) >> 1);
    if ((av < (+powsOf2[e]))) {
      eMax = e
    } else {
      eMin = e
    }
  };
  return eMin
});
$c_jl_FloatingPointBits$.prototype.java$lang$FloatingPointBits$$encodeIEEE754MantissaBits__I__I__O__D__D__I__D = (function(ebits, fbits, powsOf2, minPositiveValue, av, e) {
  var specialExponent = (((1 << ebits) - 1) | 0);
  var twoPowFbits = new $c_RTLong(1, 0).$less$less__I__RTLong(fbits).toDouble__D();
  return ((e === specialExponent) ? ((av !== av) ? new $c_RTLong(1, 0).$less$less__I__RTLong(((fbits - 1) | 0)).toDouble__D() : 0.0) : ((e === 0) ? (av / minPositiveValue) : (((av / (+powsOf2[e])) - 1.0) * twoPowFbits)))
});
$c_jl_FloatingPointBits$.prototype.java$lang$FloatingPointBits$$rawToInt__D__I = (function(x) {
  return ((x | 0.0) | 0)
});
var $d_jl_FloatingPointBits$ = new $TypeData().initClass({
  jl_FloatingPointBits$: 0
}, false, "java.lang.FloatingPointBits$", {
  jl_FloatingPointBits$: 1,
  O: 1
});
$c_jl_FloatingPointBits$.prototype.$classData = $d_jl_FloatingPointBits$;
var $n_jl_FloatingPointBits$;
function $m_jl_FloatingPointBits$() {
  if ((!$n_jl_FloatingPointBits$)) {
    $n_jl_FloatingPointBits$ = new $c_jl_FloatingPointBits$()
  };
  return $n_jl_FloatingPointBits$
}
/** @constructor */
function $c_jl_StackTrace$() {
  $ct_O__(this);
  $n_jl_StackTrace$ = this
}
$c_jl_StackTrace$.prototype = new $h_O();
$c_jl_StackTrace$.prototype.constructor = $c_jl_StackTrace$;
/** @constructor */
function $h_jl_StackTrace$() {
  /*<skip>*/
}
$h_jl_StackTrace$.prototype = $c_jl_StackTrace$.prototype;
$c_jl_StackTrace$.prototype.captureJSError__jl_Throwable__O = (function(throwable) {
  var reference = (false ? throwable.sjs_js_JavaScriptException__f_exception : throwable);
  var identifyingString = Object.prototype.toString.call(reference);
  return (Object.is("[object Error]", identifyingString) ? reference : ((Error.captureStackTrace === (void 0)) ? new Error() : (Error.captureStackTrace(throwable), throwable)))
});
var $d_jl_StackTrace$ = new $TypeData().initClass({
  jl_StackTrace$: 0
}, false, "java.lang.StackTrace$", {
  jl_StackTrace$: 1,
  O: 1
});
$c_jl_StackTrace$.prototype.$classData = $d_jl_StackTrace$;
var $n_jl_StackTrace$;
function $m_jl_StackTrace$() {
  if ((!$n_jl_StackTrace$)) {
    $n_jl_StackTrace$ = new $c_jl_StackTrace$()
  };
  return $n_jl_StackTrace$
}
function $f_jl_Void__hashCode__I($thiz) {
  return 0
}
function $f_jl_Void__toString__T($thiz) {
  return "undefined"
}
var $d_jl_Void = new $TypeData().initClass({
  jl_Void: 0
}, false, "java.lang.Void", {
  jl_Void: 1,
  O: 1
}, (void 0), (void 0), ((x) => (x === (void 0))));
/** @constructor */
function $c_RTLong(lo, hi) {
  this.RTLong__f_lo = 0;
  this.RTLong__f_hi = 0;
  this.RTLong__f_lo = lo;
  this.RTLong__f_hi = hi;
  $ct_O__(this)
}
$c_RTLong.prototype = new $h_O();
$c_RTLong.prototype.constructor = $c_RTLong;
/** @constructor */
function $h_RTLong() {
  /*<skip>*/
}
$h_RTLong.prototype = $c_RTLong.prototype;
$c_RTLong.prototype.lo__I = (function() {
  return this.RTLong__f_lo
});
$c_RTLong.prototype.hi__I = (function() {
  return this.RTLong__f_hi
});
$c_RTLong.prototype.equals__O__Z = (function(that) {
  var x1 = that;
  if ((x1 instanceof $c_RTLong)) {
    var x2 = x1;
    return this.org$scalajs$linker$runtime$RuntimeLong$$inline_equals__RTLong__Z(x2)
  } else {
    return false
  }
});
$c_RTLong.prototype.hashCode__I = (function() {
  return (this.lo__I() ^ this.hi__I())
});
$c_RTLong.prototype.toString__T = (function() {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T(this.lo__I(), this.hi__I())
});
$c_RTLong.prototype.toByte__B = (function() {
  return ((this.lo__I() << 24) >> 24)
});
$c_RTLong.prototype.toShort__S = (function() {
  return ((this.lo__I() << 16) >> 16)
});
$c_RTLong.prototype.toInt__I = (function() {
  return this.lo__I()
});
$c_RTLong.prototype.toLong__J = (function() {
  return $uJ(this)
});
$c_RTLong.prototype.toFloat__F = (function() {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toFloat__I__I__F(this.lo__I(), this.hi__I())
});
$c_RTLong.prototype.toDouble__D = (function() {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(this.lo__I(), this.hi__I())
});
$c_RTLong.prototype.byteValue__B = (function() {
  return this.toByte__B()
});
$c_RTLong.prototype.shortValue__S = (function() {
  return this.toShort__S()
});
$c_RTLong.prototype.intValue__I = (function() {
  return this.toInt__I()
});
$c_RTLong.prototype.longValue__J = (function() {
  return this.toLong__J()
});
$c_RTLong.prototype.floatValue__F = (function() {
  return this.toFloat__F()
});
$c_RTLong.prototype.doubleValue__D = (function() {
  return this.toDouble__D()
});
$c_RTLong.prototype.compareTo__O__I = (function(that) {
  return this.compareTo__RTLong__I(that)
});
$c_RTLong.prototype.compareTo__jl_Long__I = (function(that) {
  return this.compareTo__RTLong__I(that)
});
$c_RTLong.prototype.compareTo__RTLong__I = (function(b) {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I(this.lo__I(), this.hi__I(), b.lo__I(), b.hi__I())
});
$c_RTLong.prototype.org$scalajs$linker$runtime$RuntimeLong$$inline_equals__RTLong__Z = (function(b) {
  return ((this.lo__I() === b.lo__I()) && (this.hi__I() === b.hi__I()))
});
$c_RTLong.prototype.equals__RTLong__Z = (function(b) {
  return this.org$scalajs$linker$runtime$RuntimeLong$$inline_equals__RTLong__Z(b)
});
$c_RTLong.prototype.notEquals__RTLong__Z = (function(b) {
  return (!this.org$scalajs$linker$runtime$RuntimeLong$$inline_equals__RTLong__Z(b))
});
$c_RTLong.prototype.$less__RTLong__Z = (function(b) {
  var ahi = this.hi__I();
  var bhi = b.hi__I();
  return ((ahi === bhi) ? ((this.lo__I() ^ (-2147483648)) < (b.lo__I() ^ (-2147483648))) : (ahi < bhi))
});
$c_RTLong.prototype.$less$eq__RTLong__Z = (function(b) {
  var ahi = this.hi__I();
  var bhi = b.hi__I();
  return ((ahi === bhi) ? ((this.lo__I() ^ (-2147483648)) <= (b.lo__I() ^ (-2147483648))) : (ahi < bhi))
});
$c_RTLong.prototype.$greater__RTLong__Z = (function(b) {
  var ahi = this.hi__I();
  var bhi = b.hi__I();
  return ((ahi === bhi) ? ((this.lo__I() ^ (-2147483648)) > (b.lo__I() ^ (-2147483648))) : (ahi > bhi))
});
$c_RTLong.prototype.$greater$eq__RTLong__Z = (function(b) {
  var ahi = this.hi__I();
  var bhi = b.hi__I();
  return ((ahi === bhi) ? ((this.lo__I() ^ (-2147483648)) >= (b.lo__I() ^ (-2147483648))) : (ahi > bhi))
});
$c_RTLong.prototype.unary_$tilde__RTLong = (function() {
  return new $c_RTLong((~this.lo__I()), (~this.hi__I()))
});
$c_RTLong.prototype.$bar__RTLong__RTLong = (function(b) {
  return new $c_RTLong((this.lo__I() | b.lo__I()), (this.hi__I() | b.hi__I()))
});
$c_RTLong.prototype.$amp__RTLong__RTLong = (function(b) {
  return new $c_RTLong((this.lo__I() & b.lo__I()), (this.hi__I() & b.hi__I()))
});
$c_RTLong.prototype.$up__RTLong__RTLong = (function(b) {
  return new $c_RTLong((this.lo__I() ^ b.lo__I()), (this.hi__I() ^ b.hi__I()))
});
$c_RTLong.prototype.$less$less__I__RTLong = (function(n) {
  var lo = this.lo__I();
  return new $c_RTLong((((n & 32) === 0) ? (lo << n) : 0), (((n & 32) === 0) ? (((((lo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (this.hi__I() << n)) : (lo << n)))
});
$c_RTLong.prototype.$greater$greater$greater__I__RTLong = (function(n) {
  var hi = this.hi__I();
  return new $c_RTLong((((n & 32) === 0) ? (((this.lo__I() >>> n) | 0) | ((hi << 1) << ((31 - n) | 0))) : ((hi >>> n) | 0)), (((n & 32) === 0) ? ((hi >>> n) | 0) : 0))
});
$c_RTLong.prototype.$greater$greater__I__RTLong = (function(n) {
  var hi = this.hi__I();
  return new $c_RTLong((((n & 32) === 0) ? (((this.lo__I() >>> n) | 0) | ((hi << 1) << ((31 - n) | 0))) : (hi >> n)), (((n & 32) === 0) ? (hi >> n) : (hi >> 31)))
});
$c_RTLong.prototype.unary_$minus__RTLong = (function() {
  var lo = this.lo__I();
  var hi = this.hi__I();
  return new $c_RTLong($m_RTLong$().inline_lo_unary_$minus__I__I(lo), $m_RTLong$().inline_hi_unary_$minus__I__I__I(lo, hi))
});
$c_RTLong.prototype.$plus__RTLong__RTLong = (function(b) {
  var alo = this.lo__I();
  var ahi = this.hi__I();
  var bhi = b.hi__I();
  var lo = ((alo + b.lo__I()) | 0);
  return new $c_RTLong(lo, ($m_RTLong$().inlineUnsignedInt_$less__I__I__Z(lo, alo) ? ((((ahi + bhi) | 0) + 1) | 0) : ((ahi + bhi) | 0)))
});
$c_RTLong.prototype.$minus__RTLong__RTLong = (function(b) {
  var alo = this.lo__I();
  var ahi = this.hi__I();
  var bhi = b.hi__I();
  var lo = ((alo - b.lo__I()) | 0);
  return new $c_RTLong(lo, ($m_RTLong$().inlineUnsignedInt_$greater__I__I__Z(lo, alo) ? ((((ahi - bhi) | 0) - 1) | 0) : ((ahi - bhi) | 0)))
});
$c_RTLong.prototype.$times__RTLong__RTLong = (function(b) {
  var alo = this.lo__I();
  var blo = b.lo__I();
  var a0 = (alo & 65535);
  var a1 = ((alo >>> 16) | 0);
  var b0 = (blo & 65535);
  var b1 = ((blo >>> 16) | 0);
  var a0b0 = Math.imul(a0, b0);
  var a1b0 = Math.imul(a1, b0);
  var a0b1 = Math.imul(a0, b1);
  var lo = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
  var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
  var hi = ((((((((Math.imul(alo, b.hi__I()) + Math.imul(this.hi__I(), blo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((c1part & 65535) + a1b0) | 0) >>> 16) | 0)) | 0);
  return new $c_RTLong(lo, hi)
});
$c_RTLong.prototype.$div__RTLong__RTLong = (function(b) {
  return $m_RTLong$().divide__RTLong__RTLong__RTLong(this, b)
});
$c_RTLong.prototype.$percent__RTLong__RTLong = (function(b) {
  return $m_RTLong$().remainder__RTLong__RTLong__RTLong(this, b)
});
function $isArrayOf_RTLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.RTLong)))
}
var $d_RTLong = new $TypeData().initClass({
  RTLong: 0
}, false, "org.scalajs.linker.runtime.RuntimeLong", {
  RTLong: 1,
  O: 1
});
$c_RTLong.prototype.$classData = $d_RTLong;
function $p_RTLong$__toUnsignedString__I__I__T($thiz, lo, hi) {
  return ($thiz.isUnsignedSafeDouble__I__Z(hi) ? $f_jl_Double__toString__T($thiz.asUnsignedSafeDouble__I__I__D(lo, hi)) : $p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, lo, hi, 1000000000, 0, 2))
}
function $p_RTLong$__unsigned_$div__I__I__I__I__I($thiz, alo, ahi, blo, bhi) {
  if ($thiz.isUnsignedSafeDouble__I__Z(ahi)) {
    if ($thiz.isUnsignedSafeDouble__I__Z(bhi)) {
      var aDouble = $thiz.asUnsignedSafeDouble__I__I__D(alo, ahi);
      var bDouble = $thiz.asUnsignedSafeDouble__I__I__D(blo, bhi);
      var rDouble = (aDouble / bDouble);
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = $thiz.unsignedSafeDoubleHi__D__I(rDouble);
      return $thiz.unsignedSafeDoubleLo__D__I(rDouble)
    } else {
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return 0
    }
  } else if (((bhi === 0) && $thiz.isPowerOfTwo_IKnowItsNot0__I__Z(blo))) {
    var pow = $thiz.log2OfPowerOfTwo__I__I(blo);
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((ahi >>> pow) | 0);
    return (((alo >>> pow) | 0) | ((ahi << 1) << ((31 - pow) | 0)))
  } else if (((blo === 0) && $thiz.isPowerOfTwo_IKnowItsNot0__I__Z(bhi))) {
    var pow$2 = $thiz.log2OfPowerOfTwo__I__I(bhi);
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
    return ((ahi >>> pow$2) | 0)
  } else {
    return ($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, 0) | 0)
  }
}
function $p_RTLong$__unsigned_$percent__I__I__I__I__I($thiz, alo, ahi, blo, bhi) {
  if ($thiz.isUnsignedSafeDouble__I__Z(ahi)) {
    if ($thiz.isUnsignedSafeDouble__I__Z(bhi)) {
      var aDouble = $thiz.asUnsignedSafeDouble__I__I__D(alo, ahi);
      var bDouble = $thiz.asUnsignedSafeDouble__I__I__D(blo, bhi);
      var rDouble = (aDouble % bDouble);
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = $thiz.unsignedSafeDoubleHi__D__I(rDouble);
      return $thiz.unsignedSafeDoubleLo__D__I(rDouble)
    } else {
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ahi;
      return alo
    }
  } else if (((bhi === 0) && $thiz.isPowerOfTwo_IKnowItsNot0__I__Z(blo))) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
    return (alo & ((blo - 1) | 0))
  } else if (((blo === 0) && $thiz.isPowerOfTwo_IKnowItsNot0__I__Z(bhi))) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (ahi & ((bhi - 1) | 0));
    return alo
  } else {
    return ($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, 1) | 0)
  }
}
function $p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, ask) {
  var shift = (($thiz.inlineNumberOfLeadingZeros__I__I__I(blo, bhi) - $thiz.inlineNumberOfLeadingZeros__I__I__I(alo, ahi)) | 0);
  var initialBShift = new $c_RTLong(blo, bhi).$less$less__I__RTLong(shift);
  var bShiftLo = initialBShift.lo__I();
  var bShiftHi = initialBShift.hi__I();
  var remLo = alo;
  var remHi = ahi;
  var quotLo = 0;
  var quotHi = 0;
  while (((shift >= 0) && ((remHi & (-2097152)) !== 0))) {
    if ($thiz.inlineUnsigned_$greater$eq__I__I__I__I__Z(remLo, remHi, bShiftLo, bShiftHi)) {
      var newRem = new $c_RTLong(remLo, remHi).$minus__RTLong__RTLong(new $c_RTLong(bShiftLo, bShiftHi));
      remLo = newRem.lo__I();
      remHi = newRem.hi__I();
      if ((shift < 32)) {
        quotLo = (quotLo | (1 << shift))
      } else {
        quotHi = (quotHi | (1 << shift))
      }
    };
    shift = ((shift - 1) | 0);
    var newBShift = new $c_RTLong(bShiftLo, bShiftHi).$greater$greater$greater__I__RTLong(1);
    bShiftLo = newBShift.lo__I();
    bShiftHi = newBShift.hi__I()
  };
  if ($thiz.inlineUnsigned_$greater$eq__I__I__I__I__Z(remLo, remHi, blo, bhi)) {
    var remDouble = $thiz.asUnsignedSafeDouble__I__I__D(remLo, remHi);
    var bDouble = $thiz.asUnsignedSafeDouble__I__I__D(blo, bhi);
    if ((ask !== 1)) {
      var rem_div_bDouble = $thiz.fromUnsignedSafeDouble__D__RTLong((remDouble / bDouble));
      var newQuot = new $c_RTLong(quotLo, quotHi).$plus__RTLong__RTLong(rem_div_bDouble);
      quotLo = newQuot.lo__I();
      quotHi = newQuot.hi__I()
    };
    if ((ask !== 0)) {
      var rem_mod_bDouble = (remDouble % bDouble);
      remLo = $thiz.unsignedSafeDoubleLo__D__I(rem_mod_bDouble);
      remHi = $thiz.unsignedSafeDoubleHi__D__I(rem_mod_bDouble)
    }
  };
  if ((ask === 0)) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = quotHi;
    return quotLo
  } else if ((ask === 1)) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = remHi;
    return remLo
  } else {
    var quot = $thiz.asUnsignedSafeDouble__I__I__D(quotLo, quotHi);
    var remStr = $f_jl_Integer__toString__T(remLo);
    return ((("" + $f_jl_Double__toString__T(quot)) + $p_RTLong$__substring__T__I__T($thiz, "000000000", $f_T__length__I(remStr))) + remStr)
  }
}
function $p_RTLong$__inline_hiReturn_unary_$minus__I__I__I($thiz, lo, hi) {
  $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = $thiz.inline_hi_unary_$minus__I__I__I(lo, hi);
  return $thiz.inline_lo_unary_$minus__I__I(lo)
}
function $p_RTLong$__substring__T__I__T($thiz, s, start) {
  return s.substring(start)
}
/** @constructor */
function $c_RTLong$() {
  this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
  $ct_O__(this);
  $n_RTLong$ = this
}
$c_RTLong$.prototype = new $h_O();
$c_RTLong$.prototype.constructor = $c_RTLong$;
/** @constructor */
function $h_RTLong$() {
  /*<skip>*/
}
$h_RTLong$.prototype = $c_RTLong$.prototype;
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T = (function(lo, hi) {
  return (this.isInt32__I__I__Z(lo, hi) ? $f_jl_Integer__toString__T(lo) : ((hi < 0) ? ("-" + $p_RTLong$__toUnsignedString__I__I__T(this, this.inline_lo_unary_$minus__I__I(lo), this.inline_hi_unary_$minus__I__I__I(lo, hi))) : $p_RTLong$__toUnsignedString__I__I__T(this, lo, hi)))
});
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D = (function(lo, hi) {
  return ((hi < 0) ? (-((this.asUint__I__D(this.inline_hi_unary_$minus__I__I__I(lo, hi)) * 4.294967296E9) + this.asUint__I__D(this.inline_lo_unary_$minus__I__I(lo)))) : ((hi * 4.294967296E9) + this.asUint__I__D(lo)))
});
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$toFloat__I__I__F = (function(lo, hi) {
  var abs = this.inline_abs__I__I__RTLong(lo, hi);
  var compressedAbsLo = ((this.isUnsignedSafeDouble__I__Z(abs.hi__I()) || ((abs.lo__I() & 65535) === 0)) ? abs.lo__I() : ((abs.lo__I() & (~65535)) | 32768));
  var absRes = ((this.asUint__I__D(abs.hi__I()) * 4.294967296E9) + this.asUint__I__D(compressedAbsLo));
  return Math.fround(((hi < 0) ? (-absRes) : absRes))
});
$c_RTLong$.prototype.fromInt__I__RTLong = (function(value) {
  return new $c_RTLong(value, (value >> 31))
});
$c_RTLong$.prototype.fromDouble__D__RTLong = (function(value) {
  var lo = this.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(value);
  return new $c_RTLong(lo, this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn)
});
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I = (function(value) {
  if ((value < (-9.223372036854776E18))) {
    this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (-2147483648);
    return 0
  } else if ((value >= 9.223372036854776E18)) {
    this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 2147483647;
    return (-1)
  } else {
    var rawLo = this.rawToInt__D__I(value);
    var rawHi = this.rawToInt__D__I((value / 4.294967296E9));
    this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (((value < 0) && (rawLo !== 0)) ? ((rawHi - 1) | 0) : rawHi);
    return rawLo
  }
});
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo === blo) ? 0 : (this.inlineUnsignedInt_$less__I__I__Z(alo, blo) ? (-1) : 1)) : ((ahi < bhi) ? (-1) : 1))
});
$c_RTLong$.prototype.divide__RTLong__RTLong__RTLong = (function(a, b) {
  var lo = this.divideImpl__I__I__I__I__I(a.lo__I(), a.hi__I(), b.lo__I(), b.hi__I());
  return new $c_RTLong(lo, this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn)
});
$c_RTLong$.prototype.divideImpl__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
  if (this.isZero__I__I__Z(blo, bhi)) {
    throw new $c_jl_ArithmeticException("/ by zero")
  };
  if (this.isInt32__I__I__Z(alo, ahi)) {
    if (this.isInt32__I__I__Z(blo, bhi)) {
      if (((alo === (-2147483648)) && (blo === (-1)))) {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
        return (-2147483648)
      } else {
        var lo = $intDiv(alo, blo);
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (lo >> 31);
        return lo
      }
    } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (-1);
      return (-1)
    } else {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return 0
    }
  } else {
    var aAbs = this.inline_abs__I__I__RTLong(alo, ahi);
    var bAbs = this.inline_abs__I__I__RTLong(blo, bhi);
    var absRLo = $p_RTLong$__unsigned_$div__I__I__I__I__I(this, aAbs.lo__I(), aAbs.hi__I(), bAbs.lo__I(), bAbs.hi__I());
    return (((ahi ^ bhi) >= 0) ? absRLo : $p_RTLong$__inline_hiReturn_unary_$minus__I__I__I(this, absRLo, this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn))
  }
});
$c_RTLong$.prototype.remainder__RTLong__RTLong__RTLong = (function(a, b) {
  var lo = this.remainderImpl__I__I__I__I__I(a.lo__I(), a.hi__I(), b.lo__I(), b.hi__I());
  return new $c_RTLong(lo, this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn)
});
$c_RTLong$.prototype.remainderImpl__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
  if (this.isZero__I__I__Z(blo, bhi)) {
    throw new $c_jl_ArithmeticException("/ by zero")
  };
  if (this.isInt32__I__I__Z(alo, ahi)) {
    if (this.isInt32__I__I__Z(blo, bhi)) {
      if ((blo !== (-1))) {
        var lo = $intMod(alo, blo);
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (lo >> 31);
        return lo
      } else {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
        return 0
      }
    } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return 0
    } else {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ahi;
      return alo
    }
  } else {
    var aAbs = this.inline_abs__I__I__RTLong(alo, ahi);
    var bAbs = this.inline_abs__I__I__RTLong(blo, bhi);
    var absRLo = $p_RTLong$__unsigned_$percent__I__I__I__I__I(this, aAbs.lo__I(), aAbs.hi__I(), bAbs.lo__I(), bAbs.hi__I());
    return ((ahi < 0) ? $p_RTLong$__inline_hiReturn_unary_$minus__I__I__I(this, absRLo, this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn) : absRLo)
  }
});
$c_RTLong$.prototype.isZero__I__I__Z = (function(lo, hi) {
  return ((lo | hi) === 0)
});
$c_RTLong$.prototype.isInt32__I__I__Z = (function(lo, hi) {
  return (hi === (lo >> 31))
});
$c_RTLong$.prototype.isUnsignedSafeDouble__I__Z = (function(hi) {
  return ((hi & (-2097152)) === 0)
});
$c_RTLong$.prototype.asUnsignedSafeDouble__I__I__D = (function(lo, hi) {
  return ((hi * 4.294967296E9) + this.asUint__I__D(lo))
});
$c_RTLong$.prototype.fromUnsignedSafeDouble__D__RTLong = (function(x) {
  return new $c_RTLong(this.unsignedSafeDoubleLo__D__I(x), this.unsignedSafeDoubleHi__D__I(x))
});
$c_RTLong$.prototype.unsignedSafeDoubleLo__D__I = (function(x) {
  return this.rawToInt__D__I(x)
});
$c_RTLong$.prototype.unsignedSafeDoubleHi__D__I = (function(x) {
  return this.rawToInt__D__I((x / 4.294967296E9))
});
$c_RTLong$.prototype.asUint__I__D = (function(x) {
  return (+(x >>> 0.0))
});
$c_RTLong$.prototype.rawToInt__D__I = (function(x) {
  return ((x | 0.0) | 0)
});
$c_RTLong$.prototype.isPowerOfTwo_IKnowItsNot0__I__Z = (function(i) {
  return ((i & ((i - 1) | 0)) === 0)
});
$c_RTLong$.prototype.log2OfPowerOfTwo__I__I = (function(i) {
  return ((31 - $s_jl_Integer__numberOfLeadingZeros__I__I(i)) | 0)
});
$c_RTLong$.prototype.inlineNumberOfLeadingZeros__I__I__I = (function(lo, hi) {
  return ((hi !== 0) ? $s_jl_Integer__numberOfLeadingZeros__I__I(hi) : (($s_jl_Integer__numberOfLeadingZeros__I__I(lo) + 32) | 0))
});
$c_RTLong$.prototype.inlineUnsigned_$greater$eq__I__I__I__I__Z = (function(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? this.inlineUnsignedInt_$greater$eq__I__I__Z(alo, blo) : this.inlineUnsignedInt_$greater$eq__I__I__Z(ahi, bhi))
});
$c_RTLong$.prototype.inlineUnsignedInt_$less__I__I__Z = (function(a, b) {
  return ((a ^ (-2147483648)) < (b ^ (-2147483648)))
});
$c_RTLong$.prototype.inlineUnsignedInt_$greater__I__I__Z = (function(a, b) {
  return ((a ^ (-2147483648)) > (b ^ (-2147483648)))
});
$c_RTLong$.prototype.inlineUnsignedInt_$greater$eq__I__I__Z = (function(a, b) {
  return ((a ^ (-2147483648)) >= (b ^ (-2147483648)))
});
$c_RTLong$.prototype.inline_lo_unary_$minus__I__I = (function(lo) {
  return ((-lo) | 0)
});
$c_RTLong$.prototype.inline_hi_unary_$minus__I__I__I = (function(lo, hi) {
  return ((lo !== 0) ? (~hi) : ((-hi) | 0))
});
$c_RTLong$.prototype.inline_abs__I__I__RTLong = (function(lo, hi) {
  return ((hi < 0) ? new $c_RTLong(this.inline_lo_unary_$minus__I__I(lo), this.inline_hi_unary_$minus__I__I__I(lo, hi)) : new $c_RTLong(lo, hi))
});
var $d_RTLong$ = new $TypeData().initClass({
  RTLong$: 0
}, false, "org.scalajs.linker.runtime.RuntimeLong$", {
  RTLong$: 1,
  O: 1
});
$c_RTLong$.prototype.$classData = $d_RTLong$;
var $n_RTLong$;
function $m_RTLong$() {
  if ((!$n_RTLong$)) {
    $n_RTLong$ = new $c_RTLong$()
  };
  return $n_RTLong$
}
/** @constructor */
function $c_jl_Boolean$() {
  $ct_O__(this);
  $n_jl_Boolean$ = this
}
$c_jl_Boolean$.prototype = new $h_O();
$c_jl_Boolean$.prototype.constructor = $c_jl_Boolean$;
/** @constructor */
function $h_jl_Boolean$() {
  /*<skip>*/
}
$h_jl_Boolean$.prototype = $c_jl_Boolean$.prototype;
$c_jl_Boolean$.prototype.toString__Z__T = (function(b) {
  return ("" + b)
});
var $d_jl_Boolean$ = new $TypeData().initClass({
  jl_Boolean$: 0
}, false, "java.lang.Boolean$", {
  jl_Boolean$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_Boolean$.prototype.$classData = $d_jl_Boolean$;
var $n_jl_Boolean$;
function $m_jl_Boolean$() {
  if ((!$n_jl_Boolean$)) {
    $n_jl_Boolean$ = new $c_jl_Boolean$()
  };
  return $n_jl_Boolean$
}
/** @constructor */
function $c_jl_Byte$() {
  $ct_O__(this);
  $n_jl_Byte$ = this
}
$c_jl_Byte$.prototype = new $h_O();
$c_jl_Byte$.prototype.constructor = $c_jl_Byte$;
/** @constructor */
function $h_jl_Byte$() {
  /*<skip>*/
}
$h_jl_Byte$.prototype = $c_jl_Byte$.prototype;
$c_jl_Byte$.prototype.toString__B__T = (function(b) {
  return ("" + b)
});
var $d_jl_Byte$ = new $TypeData().initClass({
  jl_Byte$: 0
}, false, "java.lang.Byte$", {
  jl_Byte$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_Byte$.prototype.$classData = $d_jl_Byte$;
var $n_jl_Byte$;
function $m_jl_Byte$() {
  if ((!$n_jl_Byte$)) {
    $n_jl_Byte$ = new $c_jl_Byte$()
  };
  return $n_jl_Byte$
}
/** @constructor */
function $c_jl_Character$() {
  $ct_O__(this);
  $n_jl_Character$ = this
}
$c_jl_Character$.prototype = new $h_O();
$c_jl_Character$.prototype.constructor = $c_jl_Character$;
/** @constructor */
function $h_jl_Character$() {
  /*<skip>*/
}
$h_jl_Character$.prototype = $c_jl_Character$.prototype;
$c_jl_Character$.prototype.hashCode__C__I = (function(value) {
  return value
});
$c_jl_Character$.prototype.toString__C__T = (function(c) {
  return String.fromCharCode(c)
});
var $d_jl_Character$ = new $TypeData().initClass({
  jl_Character$: 0
}, false, "java.lang.Character$", {
  jl_Character$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_Character$.prototype.$classData = $d_jl_Character$;
var $n_jl_Character$;
function $m_jl_Character$() {
  if ((!$n_jl_Character$)) {
    $n_jl_Character$ = new $c_jl_Character$()
  };
  return $n_jl_Character$
}
/** @constructor */
function $c_jl_Double$() {
  $ct_O__(this);
  $n_jl_Double$ = this
}
$c_jl_Double$.prototype = new $h_O();
$c_jl_Double$.prototype.constructor = $c_jl_Double$;
/** @constructor */
function $h_jl_Double$() {
  /*<skip>*/
}
$h_jl_Double$.prototype = $c_jl_Double$.prototype;
$c_jl_Double$.prototype.toString__D__T = (function(d) {
  return ("" + d)
});
$c_jl_Double$.prototype.hashCode__D__I = (function(value) {
  return $m_jl_FloatingPointBits$().numberHashCode__D__I(value)
});
var $d_jl_Double$ = new $TypeData().initClass({
  jl_Double$: 0
}, false, "java.lang.Double$", {
  jl_Double$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_Double$.prototype.$classData = $d_jl_Double$;
var $n_jl_Double$;
function $m_jl_Double$() {
  if ((!$n_jl_Double$)) {
    $n_jl_Double$ = new $c_jl_Double$()
  };
  return $n_jl_Double$
}
/** @constructor */
function $c_jl_Float$() {
  $ct_O__(this);
  $n_jl_Float$ = this
}
$c_jl_Float$.prototype = new $h_O();
$c_jl_Float$.prototype.constructor = $c_jl_Float$;
/** @constructor */
function $h_jl_Float$() {
  /*<skip>*/
}
$h_jl_Float$.prototype = $c_jl_Float$.prototype;
$c_jl_Float$.prototype.toString__F__T = (function(f) {
  return ("" + f)
});
$c_jl_Float$.prototype.hashCode__F__I = (function(value) {
  return $m_jl_FloatingPointBits$().numberHashCode__D__I(value)
});
var $d_jl_Float$ = new $TypeData().initClass({
  jl_Float$: 0
}, false, "java.lang.Float$", {
  jl_Float$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_Float$.prototype.$classData = $d_jl_Float$;
var $n_jl_Float$;
function $m_jl_Float$() {
  if ((!$n_jl_Float$)) {
    $n_jl_Float$ = new $c_jl_Float$()
  };
  return $n_jl_Float$
}
/** @constructor */
function $c_jl_Integer$() {
  $ct_O__(this);
  $n_jl_Integer$ = this
}
$c_jl_Integer$.prototype = new $h_O();
$c_jl_Integer$.prototype.constructor = $c_jl_Integer$;
/** @constructor */
function $h_jl_Integer$() {
  /*<skip>*/
}
$h_jl_Integer$.prototype = $c_jl_Integer$.prototype;
$c_jl_Integer$.prototype.toString__I__T = (function(i) {
  return ("" + i)
});
$c_jl_Integer$.prototype.numberOfLeadingZeros__I__I = (function(i) {
  return ((($linkingInfo.esVersion | 0) >= 6) ? (Math.clz32(i) | 0) : this.java$lang$Integer$$clz32Dynamic__I__I(i))
});
$c_jl_Integer$.prototype.java$lang$Integer$$clz32Dynamic__I__I = (function(i) {
  if (Object.is((typeof Math.clz32), "function")) {
    return (Math.clz32(i) | 0)
  } else {
    var x = i;
    if ((x === 0)) {
      return 32
    } else {
      var r = 1;
      if (((x & (-65536)) === 0)) {
        x = (x << 16);
        r = ((r + 16) | 0)
      };
      if (((x & (-16777216)) === 0)) {
        x = (x << 8);
        r = ((r + 8) | 0)
      };
      if (((x & (-268435456)) === 0)) {
        x = (x << 4);
        r = ((r + 4) | 0)
      };
      if (((x & (-1073741824)) === 0)) {
        x = (x << 2);
        r = ((r + 2) | 0)
      };
      return ((r + (x >> 31)) | 0)
    }
  }
});
$c_jl_Integer$.prototype.toHexString__I__T = (function(i) {
  return this.java$lang$Integer$$toStringBase__I__I__T(i, 16)
});
$c_jl_Integer$.prototype.java$lang$Integer$$toStringBase__I__I__T = (function(i, base) {
  return this.java$lang$Integer$$asUint__I__D(i).toString(base)
});
$c_jl_Integer$.prototype.java$lang$Integer$$asUint__I__D = (function(n) {
  return (+(n >>> 0.0))
});
var $d_jl_Integer$ = new $TypeData().initClass({
  jl_Integer$: 0
}, false, "java.lang.Integer$", {
  jl_Integer$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_Integer$.prototype.$classData = $d_jl_Integer$;
var $n_jl_Integer$;
function $m_jl_Integer$() {
  if ((!$n_jl_Integer$)) {
    $n_jl_Integer$ = new $c_jl_Integer$()
  };
  return $n_jl_Integer$
}
/** @constructor */
function $c_jl_Long$() {
  $ct_O__(this);
  $n_jl_Long$ = this
}
$c_jl_Long$.prototype = new $h_O();
$c_jl_Long$.prototype.constructor = $c_jl_Long$;
/** @constructor */
function $h_jl_Long$() {
  /*<skip>*/
}
$h_jl_Long$.prototype = $c_jl_Long$.prototype;
$c_jl_Long$.prototype.toString__J__T = (function(i) {
  return ("" + i)
});
$c_jl_Long$.prototype.hashCode__J__I = (function(value) {
  return (value.toInt__I() ^ value.$greater$greater$greater__I__RTLong(32).toInt__I())
});
var $d_jl_Long$ = new $TypeData().initClass({
  jl_Long$: 0
}, false, "java.lang.Long$", {
  jl_Long$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_Long$.prototype.$classData = $d_jl_Long$;
var $n_jl_Long$;
function $m_jl_Long$() {
  if ((!$n_jl_Long$)) {
    $n_jl_Long$ = new $c_jl_Long$()
  };
  return $n_jl_Long$
}
/** @constructor */
function $c_jl_Number() {
  /*<skip>*/
}
$c_jl_Number.prototype = new $h_O();
$c_jl_Number.prototype.constructor = $c_jl_Number;
/** @constructor */
function $h_jl_Number() {
  /*<skip>*/
}
$h_jl_Number.prototype = $c_jl_Number.prototype;
/** @constructor */
function $c_jl_Short$() {
  $ct_O__(this);
  $n_jl_Short$ = this
}
$c_jl_Short$.prototype = new $h_O();
$c_jl_Short$.prototype.constructor = $c_jl_Short$;
/** @constructor */
function $h_jl_Short$() {
  /*<skip>*/
}
$h_jl_Short$.prototype = $c_jl_Short$.prototype;
$c_jl_Short$.prototype.toString__S__T = (function(s) {
  return ("" + s)
});
var $d_jl_Short$ = new $TypeData().initClass({
  jl_Short$: 0
}, false, "java.lang.Short$", {
  jl_Short$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_Short$.prototype.$classData = $d_jl_Short$;
var $n_jl_Short$;
function $m_jl_Short$() {
  if ((!$n_jl_Short$)) {
    $n_jl_Short$ = new $c_jl_Short$()
  };
  return $n_jl_Short$
}
function $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, e, enableSuppression, writableStackTrace) {
  $thiz.jl_Throwable__f_s = s;
  $thiz.jl_Throwable__f_e = e;
  $thiz.jl_Throwable__f_enableSuppression = enableSuppression;
  $thiz.jl_Throwable__f_writableStackTrace = writableStackTrace;
  $ct_O__($thiz);
  if (writableStackTrace) {
    $thiz.fillInStackTrace__jl_Throwable()
  } else {
    (void 0)
  };
  return $thiz
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.jl_Throwable__f_s = null;
    this.jl_Throwable__f_e = null;
    this.jl_Throwable__f_enableSuppression = false;
    this.jl_Throwable__f_writableStackTrace = false;
    this.jl_Throwable__f_jsErrorForStackTrace = null
  };
  getMessage__T() {
    return this.jl_Throwable__f_s
  };
  fillInStackTrace__jl_Throwable() {
    this.jl_Throwable__f_jsErrorForStackTrace = $m_jl_StackTrace$().captureJSError__jl_Throwable__O(this);
    return this
  };
  toString__T() {
    var className = this.getClass__jl_Class().getName__T();
    var message = this.getMessage__T();
    return ((message === null) ? className : ((("" + className) + ": ") + message))
  };
  js_name__T() {
    return this.getClass__jl_Class().getName__T()
  };
  js_message__T() {
    var m = this.getMessage__T();
    return ((m === null) ? "" : m)
  };
  $js$exported$meth$toString__O() {
    return this.toString__T()
  };
  $js$exported$prop$name__O() {
    return this.js_name__T()
  };
  $js$exported$prop$message__O() {
    return this.js_message__T()
  };
  getClass__jl_Class() {
    return $c_O.prototype.getClass__jl_Class.call(this)
  };
  hashCode__I() {
    return $c_O.prototype.hashCode__I.call(this)
  };
  get "message"() {
    return this.$js$exported$prop$message__O()
  };
  get "name"() {
    return this.$js$exported$prop$name__O()
  };
  "toString"() {
    return this.$js$exported$meth$toString__O()
  };
}
/** @constructor */
function $c_jl_Class(data0) {
  this.jl_Class__f_data = null;
  $ct_O__(this);
  this.jl_Class__f_data = data0
}
$c_jl_Class.prototype = new $h_O();
$c_jl_Class.prototype.constructor = $c_jl_Class;
/** @constructor */
function $h_jl_Class() {
  /*<skip>*/
}
$h_jl_Class.prototype = $c_jl_Class.prototype;
$c_jl_Class.prototype.toString__T = (function() {
  return (("" + (this.isInterface__Z() ? "interface " : (this.isPrimitive__Z() ? "" : "class "))) + this.getName__T())
});
$c_jl_Class.prototype.isInterface__Z = (function() {
  return (!(!this.jl_Class__f_data.isInterface))
});
$c_jl_Class.prototype.isPrimitive__Z = (function() {
  return (!(!this.jl_Class__f_data.isPrimitive))
});
$c_jl_Class.prototype.getName__T = (function() {
  return this.jl_Class__f_data.name
});
var $d_jl_Class = new $TypeData().initClass({
  jl_Class: 0
}, false, "java.lang.Class", {
  jl_Class: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_constant_Constable: 1
});
$c_jl_Class.prototype.$classData = $d_jl_Class;
function $ct_jl_Exception__T__jl_Throwable__Z__Z__($thiz, s, e, enableSuppression, writableStackTrace) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, e, enableSuppression, writableStackTrace);
  return $thiz
}
class $c_jl_Exception extends $c_jl_Throwable {
}
function $f_jl_Boolean__booleanValue__Z($thiz) {
  return (!(!$thiz))
}
function $f_jl_Boolean__hashCode__I($thiz) {
  return ($f_jl_Boolean__booleanValue__Z($thiz) ? 1231 : 1237)
}
function $f_jl_Boolean__toString__T($thiz) {
  return $m_jl_Boolean$().toString__Z__T($f_jl_Boolean__booleanValue__Z($thiz))
}
var $d_jl_Boolean = new $TypeData().initClass({
  jl_Boolean: 0
}, false, "java.lang.Boolean", {
  jl_Boolean: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1
}, (void 0), (void 0), ((x) => ((typeof x) === "boolean")));
function $f_jl_Character__charValue__C($thiz) {
  return $uC($bC($thiz))
}
function $f_jl_Character__hashCode__I($thiz) {
  return $m_jl_Character$().hashCode__C__I($f_jl_Character__charValue__C($thiz))
}
function $f_jl_Character__toString__T($thiz) {
  return $m_jl_Character$().toString__C__T($f_jl_Character__charValue__C($thiz))
}
var $d_jl_Character = new $TypeData().initClass({
  jl_Character: 0
}, false, "java.lang.Character", {
  jl_Character: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1
}, (void 0), (void 0), ((x) => (x instanceof $Char)));
function $ct_jl_RuntimeException__T__jl_Throwable__Z__Z__($thiz, s, e, enableSuppression, writableStackTrace) {
  $ct_jl_Exception__T__jl_Throwable__Z__Z__($thiz, s, e, enableSuppression, writableStackTrace);
  return $thiz
}
function $ct_jl_RuntimeException__T__jl_Throwable__($thiz, message, cause) {
  $ct_jl_RuntimeException__T__jl_Throwable__Z__Z__($thiz, message, cause, true, true);
  return $thiz
}
function $ct_jl_RuntimeException__T__($thiz, s) {
  $ct_jl_RuntimeException__T__jl_Throwable__($thiz, s, null);
  return $thiz
}
class $c_jl_RuntimeException extends $c_jl_Exception {
}
class $c_jl_ArithmeticException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_RuntimeException__T__(this, s)
  };
}
var $d_jl_ArithmeticException = new $TypeData().initClass({
  jl_ArithmeticException: 0
}, false, "java.lang.ArithmeticException", {
  jl_ArithmeticException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_ArithmeticException.prototype.$classData = $d_jl_ArithmeticException;
function $f_jl_Byte__byteValue__B($thiz) {
  return ($thiz | 0)
}
function $f_jl_Byte__hashCode__I($thiz) {
  return $f_jl_Byte__byteValue__B($thiz)
}
function $f_jl_Byte__toString__T($thiz) {
  return $m_jl_Byte$().toString__B__T($f_jl_Byte__byteValue__B($thiz))
}
var $d_jl_Byte = new $TypeData().initClass({
  jl_Byte: 0
}, false, "java.lang.Byte", {
  jl_Byte: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1
}, (void 0), (void 0), ((x) => $isByte(x)));
function $f_jl_Short__shortValue__S($thiz) {
  return ($thiz | 0)
}
function $f_jl_Short__hashCode__I($thiz) {
  return $f_jl_Short__shortValue__S($thiz)
}
function $f_jl_Short__toString__T($thiz) {
  return $m_jl_Short$().toString__S__T($f_jl_Short__shortValue__S($thiz))
}
var $d_jl_Short = new $TypeData().initClass({
  jl_Short: 0
}, false, "java.lang.Short", {
  jl_Short: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1
}, (void 0), (void 0), ((x) => $isShort(x)));
function $f_jl_Double__doubleValue__D($thiz) {
  return (+$thiz)
}
function $f_jl_Double__hashCode__I($thiz) {
  return $m_jl_Double$().hashCode__D__I($f_jl_Double__doubleValue__D($thiz))
}
function $f_jl_Double__toString__T($thiz) {
  return $m_jl_Double$().toString__D__T($f_jl_Double__doubleValue__D($thiz))
}
var $d_jl_Double = new $TypeData().initClass({
  jl_Double: 0
}, false, "java.lang.Double", {
  jl_Double: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}, (void 0), (void 0), ((x) => ((typeof x) === "number")));
function $f_jl_Float__floatValue__F($thiz) {
  return Math.fround($thiz)
}
function $f_jl_Float__hashCode__I($thiz) {
  return $m_jl_Float$().hashCode__F__I($f_jl_Float__floatValue__F($thiz))
}
function $f_jl_Float__toString__T($thiz) {
  return $m_jl_Float$().toString__F__T($f_jl_Float__floatValue__F($thiz))
}
var $d_jl_Float = new $TypeData().initClass({
  jl_Float: 0
}, false, "java.lang.Float", {
  jl_Float: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}, (void 0), (void 0), ((x) => $isFloat(x)));
function $f_jl_Integer__intValue__I($thiz) {
  return ($thiz | 0)
}
function $f_jl_Integer__hashCode__I($thiz) {
  return $f_jl_Integer__intValue__I($thiz)
}
function $f_jl_Integer__toString__T($thiz) {
  return $m_jl_Integer$().toString__I__T($f_jl_Integer__intValue__I($thiz))
}
function $s_jl_Integer__numberOfLeadingZeros__I__I(i) {
  return $m_jl_Integer$().numberOfLeadingZeros__I__I(i)
}
var $d_jl_Integer = new $TypeData().initClass({
  jl_Integer: 0
}, false, "java.lang.Integer", {
  jl_Integer: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}, (void 0), (void 0), ((x) => $isInt(x)));
function $f_jl_Long__longValue__J($thiz) {
  return $uJ($thiz)
}
function $f_jl_Long__hashCode__I($thiz) {
  return $m_jl_Long$().hashCode__J__I($thiz.longValue__J())
}
function $f_jl_Long__toString__T($thiz) {
  return $m_jl_Long$().toString__J__T($thiz.longValue__J())
}
var $d_jl_Long = new $TypeData().initClass({
  jl_Long: 0
}, false, "java.lang.Long", {
  jl_Long: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}, (void 0), (void 0), ((x) => (x instanceof $c_RTLong)));
function $f_T__java$lang$_String$$thisString__T($thiz) {
  return $thiz
}
function $f_T__length__I($thiz) {
  return $thiz.length
}
function $f_T__charAt__I__C($thiz, index) {
  return $thiz.charCodeAt(index)
}
function $f_T__hashCode__I($thiz) {
  var res = 0;
  var mul = 1;
  var i = (($f_T__length__I($thiz) - 1) | 0);
  while ((i >= 0)) {
    res = ((res + Math.imul($f_T__charAt__I__C($thiz, i), mul)) | 0);
    mul = Math.imul(mul, 31);
    i = ((i - 1) | 0)
  };
  return res
}
function $f_T__toString__T($thiz) {
  return $f_T__java$lang$_String$$thisString__T($thiz)
}
function $isArrayOf_T(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.T)))
}
var $d_T = new $TypeData().initClass({
  T: 0
}, false, "java.lang.String", {
  T: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_CharSequence: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}, (void 0), (void 0), ((x) => ((typeof x) === "string")));
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sjs_js_JavaScriptException)))
}
$L0 = new $c_RTLong(0, 0);
$d_J.zero = $L0;
let $e_hello = $m_Lexample_Hello$();
export { $e_hello as hello };
//# sourceMappingURL=main.js.map
