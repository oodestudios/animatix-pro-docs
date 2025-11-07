# Custom Conditions

Learn how to create custom conditions that extend Animatix Pro's condition system. This comprehensive guide covers all aspects of custom condition development.

## 🎯 Custom Condition Fundamentals

Custom conditions allow you to:
- **Create Complex Logic** - Build sophisticated conditional statements
- **Integrate External Data** - Use data from APIs, databases, and services
- **Optimize Performance** - Create specialized conditions for specific needs
- **Enhance Reusability** - Build reusable condition components

### Condition Types
- **Data Conditions** - Conditions based on data values
- **State Conditions** - Conditions based on system states
- **Time Conditions** - Conditions based on time and timing
- **Composite Conditions** - Conditions that combine multiple factors

## 📊 Data Conditions

### Basic Data Condition
Create a simple custom data condition.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;

[System.Serializable]
public class CustomDataCondition : GraphCondition
{
    [SerializeField] private string dataKey;
    [SerializeField] private DataType dataType;
    [SerializeField] private string expectedValue;
    [SerializeField] private ComparisonOperator comparison;
    
    public enum DataType
    {
        String,
        Integer,
        Float,
        Boolean
    }
    
    public enum ComparisonOperator
    {
        Equals,
        NotEquals,
        GreaterThan,
        LessThan,
        GreaterThanOrEqual,
        LessThanOrEqual,
        Contains,
        StartsWith,
        EndsWith
    }
    
    public override bool Evaluate()
    {
        if (string.IsNullOrEmpty(dataKey))
            return false;
        
        object dataValue = GetDataValue(dataKey);
        if (dataValue == null)
            return false;
        
        return CompareValues(dataValue, expectedValue);
    }
    
    private object GetDataValue(string key)
    {
        // Get data from your data source
        // This could be from a data manager, player prefs, etc.
        return DataManager.Instance.GetValue(key);
    }
    
    private bool CompareValues(object dataValue, string expectedValue)
    {
        switch (dataType)
        {
            case DataType.String:
                return CompareStrings(dataValue.ToString(), expectedValue);
            case DataType.Integer:
                return CompareIntegers(dataValue, expectedValue);
            case DataType.Float:
                return CompareFloats(dataValue, expectedValue);
            case DataType.Boolean:
                return CompareBooleans(dataValue, expectedValue);
            default:
                return false;
        }
    }
    
    private bool CompareStrings(string data, string expected)
    {
        switch (comparison)
        {
            case ComparisonOperator.Equals:
                return data == expected;
            case ComparisonOperator.NotEquals:
                return data != expected;
            case ComparisonOperator.Contains:
                return data.Contains(expected);
            case ComparisonOperator.StartsWith:
                return data.StartsWith(expected);
            case ComparisonOperator.EndsWith:
                return data.EndsWith(expected);
            default:
                return false;
        }
    }
    
    private bool CompareIntegers(object data, string expected)
    {
        if (!int.TryParse(data.ToString(), out int dataInt) || 
            !int.TryParse(expected, out int expectedInt))
            return false;
        
        switch (comparison)
        {
            case ComparisonOperator.Equals:
                return dataInt == expectedInt;
            case ComparisonOperator.NotEquals:
                return dataInt != expectedInt;
            case ComparisonOperator.GreaterThan:
                return dataInt > expectedInt;
            case ComparisonOperator.LessThan:
                return dataInt < expectedInt;
            case ComparisonOperator.GreaterThanOrEqual:
                return dataInt >= expectedInt;
            case ComparisonOperator.LessThanOrEqual:
                return dataInt <= expectedInt;
            default:
                return false;
        }
    }
    
    private bool CompareFloats(object data, string expected)
    {
        if (!float.TryParse(data.ToString(), out float dataFloat) || 
            !float.TryParse(expected, out float expectedFloat))
            return false;
        
        switch (comparison)
        {
            case ComparisonOperator.Equals:
                return Mathf.Approximately(dataFloat, expectedFloat);
            case ComparisonOperator.NotEquals:
                return !Mathf.Approximately(dataFloat, expectedFloat);
            case ComparisonOperator.GreaterThan:
                return dataFloat > expectedFloat;
            case ComparisonOperator.LessThan:
                return dataFloat < expectedFloat;
            case ComparisonOperator.GreaterThanOrEqual:
                return dataFloat >= expectedFloat;
            case ComparisonOperator.LessThanOrEqual:
                return dataFloat <= expectedFloat;
            default:
                return false;
        }
    }
    
    private bool CompareBooleans(object data, string expected)
    {
        if (!bool.TryParse(data.ToString(), out bool dataBool) || 
            !bool.TryParse(expected, out bool expectedBool))
            return false;
        
        switch (comparison)
        {
            case ComparisonOperator.Equals:
                return dataBool == expectedBool;
            case ComparisonOperator.NotEquals:
                return dataBool != expectedBool;
            default:
                return false;
        }
    }
}
```

### Range Condition
Create a condition that checks if a value is within a range.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;

[System.Serializable]
public class RangeCondition : GraphCondition
{
    [SerializeField] private string dataKey;
    [SerializeField] private float minValue = 0f;
    [SerializeField] private float maxValue = 100f;
    [SerializeField] private bool inclusive = true;
    
    public override bool Evaluate()
    {
        if (string.IsNullOrEmpty(dataKey))
            return false;
        
        object dataValue = GetDataValue(dataKey);
        if (dataValue == null)
            return false;
        
        if (!float.TryParse(dataValue.ToString(), out float value))
            return false;
        
        if (inclusive)
        {
            return value >= minValue && value <= maxValue;
        }
        else
        {
            return value > minValue && value < maxValue;
        }
    }
    
    private object GetDataValue(string key)
    {
        return DataManager.Instance.GetValue(key);
    }
}
```

### Array Condition
Create a condition that checks array properties.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;
using System.Collections.Generic;

[System.Serializable]
public class ArrayCondition : GraphCondition
{
    [SerializeField] private string arrayKey;
    [SerializeField] private ArrayOperation operation;
    [SerializeField] private string targetValue;
    [SerializeField] private int targetCount = 1;
    
    public enum ArrayOperation
    {
        Contains,
        NotContains,
        CountEquals,
        CountGreaterThan,
        CountLessThan,
        IsEmpty,
        IsNotEmpty
    }
    
    public override bool Evaluate()
    {
        if (string.IsNullOrEmpty(arrayKey))
            return false;
        
        object arrayData = GetDataValue(arrayKey);
        if (arrayData == null)
            return false;
        
        if (!(arrayData is List<string> array))
            return false;
        
        switch (operation)
        {
            case ArrayOperation.Contains:
                return array.Contains(targetValue);
            case ArrayOperation.NotContains:
                return !array.Contains(targetValue);
            case ArrayOperation.CountEquals:
                return array.Count == targetCount;
            case ArrayOperation.CountGreaterThan:
                return array.Count > targetCount;
            case ArrayOperation.CountLessThan:
                return array.Count < targetCount;
            case ArrayOperation.IsEmpty:
                return array.Count == 0;
            case ArrayOperation.IsNotEmpty:
                return array.Count > 0;
            default:
                return false;
        }
    }
    
    private object GetDataValue(string key)
    {
        return DataManager.Instance.GetValue(key);
    }
}
```

## 🎮 State Conditions

### Game State Condition
Create a condition that checks game state.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;

[System.Serializable]
public class GameStateCondition : GraphCondition
{
    [SerializeField] private GameStateManager stateManager;
    [SerializeField] private GameState targetState;
    [SerializeField] private StateCheckType checkType;
    
    public enum GameState
    {
        MainMenu,
        Playing,
        Paused,
        GameOver,
        Victory
    }
    
    public enum StateCheckType
    {
        CurrentState,
        PreviousState,
        StateChanged
    }
    
    private GameState lastState;
    
    public override bool Evaluate()
    {
        if (stateManager == null)
            return false;
        
        GameState currentState = stateManager.GetCurrentState();
        
        switch (checkType)
        {
            case StateCheckType.CurrentState:
                return currentState == targetState;
            case StateCheckType.PreviousState:
                return lastState == targetState;
            case StateCheckType.StateChanged:
                return currentState == targetState && lastState != targetState;
            default:
                return false;
        }
    }
    
    public override void Update()
    {
        if (stateManager != null)
        {
            lastState = stateManager.GetCurrentState();
        }
    }
}
```

### Player State Condition
Create a condition that checks player state.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;

[System.Serializable]
public class PlayerStateCondition : GraphCondition
{
    [SerializeField] private PlayerController playerController;
    [SerializeField] private PlayerState targetState;
    [SerializeField] private float duration = 0f;
    
    public enum PlayerState
    {
        Idle,
        Walking,
        Running,
        Jumping,
        Falling,
        Attacking,
        Defending,
        Stunned
    }
    
    private float stateStartTime = 0f;
    private PlayerState lastState;
    
    public override bool Evaluate()
    {
        if (playerController == null)
            return false;
        
        PlayerState currentState = playerController.GetCurrentState();
        
        if (currentState == targetState)
        {
            if (duration <= 0f)
            {
                return true;
            }
            else
            {
                if (lastState != targetState)
                {
                    stateStartTime = Time.time;
                }
                return Time.time - stateStartTime >= duration;
            }
        }
        
        return false;
    }
    
    public override void Update()
    {
        if (playerController != null)
        {
            lastState = playerController.GetCurrentState();
        }
    }
}
```

## ⏰ Time Conditions

### Time-Based Condition
Create a condition that checks time-based criteria.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;
using System;

[System.Serializable]
public class TimeCondition : GraphCondition
{
    [SerializeField] private TimeCheckType checkType;
    [SerializeField] private float targetTime = 0f;
    [SerializeField] private int targetHour = 12;
    [SerializeField] private int targetMinute = 0;
    [SerializeField] private DayOfWeek targetDay = DayOfWeek.Monday;
    
    public enum TimeCheckType
    {
        GameTime,
        RealTime,
        SpecificTime,
        DayOfWeek,
        TimeRange
    }
    
    public override bool Evaluate()
    {
        switch (checkType)
        {
            case TimeCheckType.GameTime:
                return Time.time >= targetTime;
            case TimeCheckType.RealTime:
                return DateTime.Now.TimeOfDay.TotalSeconds >= targetTime;
            case TimeCheckType.SpecificTime:
                return DateTime.Now.Hour == targetHour && DateTime.Now.Minute == targetMinute;
            case TimeCheckType.DayOfWeek:
                return DateTime.Now.DayOfWeek == targetDay;
            case TimeCheckType.TimeRange:
                return IsWithinTimeRange();
            default:
                return false;
        }
    }
    
    private bool IsWithinTimeRange()
    {
        TimeSpan currentTime = DateTime.Now.TimeOfDay;
        TimeSpan startTime = TimeSpan.FromHours(targetHour);
        TimeSpan endTime = TimeSpan.FromHours(targetHour + 1);
        
        return currentTime >= startTime && currentTime <= endTime;
    }
}
```

### Duration Condition
Create a condition that checks duration-based criteria.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;

[System.Serializable]
public class DurationCondition : GraphCondition
{
    [SerializeField] private float requiredDuration = 5.0f;
    [SerializeField] private DurationCheckType checkType;
    [SerializeField] private bool resetOnFalse = true;
    
    public enum DurationCheckType
    {
        Continuous,
        Cumulative,
        SinceLastTrigger
    }
    
    private float startTime = 0f;
    private float cumulativeTime = 0f;
    private float lastTriggerTime = 0f;
    private bool isActive = false;
    
    public override bool Evaluate()
    {
        switch (checkType)
        {
            case DurationCheckType.Continuous:
                return CheckContinuousDuration();
            case DurationCheckType.Cumulative:
                return CheckCumulativeDuration();
            case DurationCheckType.SinceLastTrigger:
                return CheckSinceLastTrigger();
            default:
                return false;
        }
    }
    
    private bool CheckContinuousDuration()
    {
        if (IsConditionMet())
        {
            if (!isActive)
            {
                startTime = Time.time;
                isActive = true;
            }
            return Time.time - startTime >= requiredDuration;
        }
        else
        {
            if (resetOnFalse)
            {
                isActive = false;
            }
            return false;
        }
    }
    
    private bool CheckCumulativeDuration()
    {
        if (IsConditionMet())
        {
            cumulativeTime += Time.deltaTime;
        }
        else if (resetOnFalse)
        {
            cumulativeTime = 0f;
        }
        
        return cumulativeTime >= requiredDuration;
    }
    
    private bool CheckSinceLastTrigger()
    {
        return Time.time - lastTriggerTime >= requiredDuration;
    }
    
    private bool IsConditionMet()
    {
        // Implement your specific condition logic here
        return true; // Placeholder
    }
    
    public void OnTriggered()
    {
        lastTriggerTime = Time.time;
    }
}
```

## 🎨 Composite Conditions

### Logical Condition
Create a condition that combines multiple conditions with logical operators.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;
using System.Collections.Generic;

[System.Serializable]
public class LogicalCondition : GraphCondition
{
    [SerializeField] private List<GraphCondition> conditions = new List<GraphCondition>();
    [SerializeField] private LogicalOperator logicalOperator = LogicalOperator.And;
    
    public enum LogicalOperator
    {
        And,
        Or,
        Not,
        Xor
    }
    
    public override bool Evaluate()
    {
        if (conditions.Count == 0)
            return false;
        
        switch (logicalOperator)
        {
            case LogicalOperator.And:
                return conditions.TrueForAll(c => c.Evaluate());
            case LogicalOperator.Or:
                return conditions.Exists(c => c.Evaluate());
            case LogicalOperator.Not:
                return !conditions.Exists(c => c.Evaluate());
            case LogicalOperator.Xor:
                return conditions.Count(c => c.Evaluate()) == 1;
            default:
                return false;
        }
    }
    
    public override void Update()
    {
        foreach (var condition in conditions)
        {
            condition.Update();
        }
    }
}
```

### Weighted Condition
Create a condition that uses weighted scoring.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;
using System.Collections.Generic;

[System.Serializable]
public class WeightedCondition : GraphCondition
{
    [SerializeField] private List<ConditionWeight> conditionWeights = new List<ConditionWeight>();
    [SerializeField] private float requiredScore = 0.5f;
    
    [System.Serializable]
    public class ConditionWeight
    {
        public GraphCondition condition;
        public float weight = 1.0f;
    }
    
    public override bool Evaluate()
    {
        float totalScore = 0f;
        float totalWeight = 0f;
        
        foreach (var conditionWeight in conditionWeights)
        {
            if (conditionWeight.condition != null)
            {
                if (conditionWeight.condition.Evaluate())
                {
                    totalScore += conditionWeight.weight;
                }
                totalWeight += conditionWeight.weight;
            }
        }
        
        if (totalWeight == 0f)
            return false;
        
        float normalizedScore = totalScore / totalWeight;
        return normalizedScore >= requiredScore;
    }
    
    public override void Update()
    {
        foreach (var conditionWeight in conditionWeights)
        {
            if (conditionWeight.condition != null)
            {
                conditionWeight.condition.Update();
            }
        }
    }
}
```

## 🚀 Performance Optimization

### Condition Optimization Best Practices

#### Efficient Evaluation
- **Cache condition results** when possible
- **Use early exit** for complex conditions
- **Minimize expensive operations** in condition evaluation
- **Profile condition performance** regularly

#### Memory Management
- **Clean up unused conditions** automatically
- **Use condition pooling** for frequently created conditions
- **Limit condition complexity** on mobile devices
- **Monitor memory usage** during development

#### Platform Considerations
- **Mobile**: Simpler conditions, lower evaluation frequency
- **Desktop**: More complex conditions, higher evaluation frequency
- **Console**: Optimize for specific hardware
- **VR**: Consider evaluation timing requirements

## 🔧 Testing Custom Conditions

### Unit Testing
Test your custom conditions thoroughly.

```csharp
using NUnit.Framework;
using UnityEngine;
using AnimatixPro.GraphFlow;

[TestFixture]
public class CustomConditionTests
{
    [Test]
    public void TestCustomDataCondition()
    {
        // Arrange
        var condition = new CustomDataCondition();
        condition.dataKey = "testKey";
        condition.dataType = CustomDataCondition.DataType.String;
        condition.expectedValue = "testValue";
        condition.comparison = CustomDataCondition.ComparisonOperator.Equals;
        
        // Act
        DataManager.Instance.SetValue("testKey", "testValue");
        
        // Assert
        Assert.IsTrue(condition.Evaluate());
    }
    
    [Test]
    public void TestRangeCondition()
    {
        // Arrange
        var condition = new RangeCondition();
        condition.dataKey = "testKey";
        condition.minValue = 10f;
        condition.maxValue = 20f;
        
        // Act
        DataManager.Instance.SetValue("testKey", "15");
        
        // Assert
        Assert.IsTrue(condition.Evaluate());
    }
}
```

### Integration Testing
Test how your conditions work with the GraphFlow system.

```csharp
[Test]
public void TestConditionIntegration()
{
    // Create a test GraphFlow asset
    var graphFlow = ScriptableObject.CreateInstance<GraphFlowAsset>();
    
    // Add your custom condition to the graph
    // Test the condition evaluation
    // Verify the results
}
```

## 🎉 What's Next?

Now that you understand custom conditions:

### **📚 Learn More**
- **[Runtime Control](runtime-control)** - Control animations at runtime
- **[API Reference](api/graph-executor-util)** - Technical documentation
- **[Examples & Tutorials](examples/ui-ux-animations)** - Complete examples

### **🎯 Try These Examples**
- **[UI/UX Examples](examples/ui-ux-animations)** - Complete UI examples
- **[Gameplay Sequences](examples/gameplay-sequences)** - Game condition examples
- **[Advanced Techniques](advanced-features/triggers-conditions)** - Complex workflows

---

<div align="center">

**🎊 Custom Condition mastery achieved!** You're ready to create intelligent logic!

**Let's control runtime!** Check out the [Runtime Control](runtime-control) guide!

</div>
